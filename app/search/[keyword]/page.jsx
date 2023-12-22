"use client";
import Movies from '@/app/components/Movies';
import React, { useRef, useEffect, useState } from 'react';
import { GrArchlinux } from "react-icons/gr";

const Page = async ({ params }) => {
  const keyword = params.keyword;
  const moviesContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 830);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToTop = () => {
    moviesContainerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSearch = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=6c14ff13bcecdf9def4d06cba56b506d&query=${keyword}&language=en-US&include_adult=false`
    );
    const data = await res.json();
    console.log(data, 'data');
    return data.results || [];
  };

  const chunkArray = (arr, n) => {
    const result = [];
    for (let i = 0; i < arr.length; i += n) {
      result.push(arr.slice(i, i + n));
    }
    return result;
  };

  const movies = await handleSearch();
  const moviesGroups = chunkArray(movies, isMobile ? 1 : 4);

  return (
    <div>
      <div className="movies-container mb-20 " ref={moviesContainerRef}>
        {moviesGroups.length > 0 &&
          moviesGroups.map((group, i) => (
            <div key={i} className="flex space-x-4 ">
              {group.map((dt, j) => (
                <Movies key={j} dt={dt} />
              ))}
            </div>
          ))}
        {movies.length === 0 && <div>Aranılan şey bulunamadı...</div>}
      </div>
      {movies.length > 0 && (
        <div
          className="scroll-to-top flex justify-center mb-10 text-4xl  "
          onClick={scrollToTop}
        >
          <GrArchlinux className='text-cyan-400 cursor-pointer opacity-80 hover:opacity-100 ' />
        </div>
      )}
    </div>
  );
};

export default Page;
