// Page.jsx
"use client"
import React, { useState, useEffect } from 'react';
import Movies from './components/Movies';
import MySlider from './components/MySlider';
import Movi from './components/Movi';
import Haberler from './components/Haberler';
import { GrArchlinux } from "react-icons/gr";

const Page = ({ searchParams }) => {
  const [movies, setMovies] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState(8);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/${searchParams.genre ? 'movie/' + searchParams.genre : 'trending/all/day'
          }?api_key=6c14ff13bcecdf9def4d06cba56b506d&language=en-US&page=1`
        );

        if (!res.ok) {
          throw new Error(`API request failed with status ${res.status}`);
        }

        const data = await res.json();
        setMovies(data.results);
      } catch (error) {
        console.error('An error occurred while fetching movies:', error);
      }
    };

    fetchMovies();
  }, [searchParams.genre]);

  const handleLoadMore = () => {
    if (displayedMovies === movies.length) {
      window.location.href = '/all-movies';
    } else {
      setDisplayedMovies((prev) => prev + 8);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <MySlider />

      {/* İlk Komp */}
      <div className="text-center mb-8">
        <h3 className="font-bold text-xl md:text-3xl border-b pb-1 border-cyan-400 relative inline-block">
          GLOBAL FİLMLER
        </h3>
      </div>

      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-12 gap-8 mb-8'>
          {movies.slice(0, displayedMovies).map((dt, i) => (
            <Movies key={i} dt={dt} />
          ))}
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <button onClick={handleLoadMore}
          className=' bg-neutral-600 w-40 h-12 duration-300 rounded-lg text-lg font-bold text-center text-white mb-4 hover:bg-neutral-800 '>
          Daha Fazla
        </button>
      </div>
      {/* İlk Komp */}
      
      <Movi />
      <Haberler />
      <div
        onClick={handleScrollToTop}
        className="scroll-to-top flex justify-center mb-10 text-4xl "
      >
        <GrArchlinux className='text-cyan-400 cursor-pointer opacity-80 hover:opacity-100 hover:text-neutral-600 ' />
      </div>
    </div>
  );
};

export default Page;
