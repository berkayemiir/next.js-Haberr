import React from 'react';
import Image from 'next/image';

const getMovie = async (id) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6c14ff13bcecdf9def4d06cba56b506d`)
  return await res.json();
}

const Page = async ({ params }) => {
  const id = params.id;
  const movieDetail = await getMovie(id);

  return (
    <div className='flex justify-center items-center h-screen mb-4'>
      <div className='ml-5 mr-5 bg-gray-100 dark:bg-gray-900 w-full md:w-1/2 text-center rounded-lg'>
        <div className='relative p-7 text-black dark:text-white'>
          <Image
            className='rounded-t-lg w-full h-1/2 md:w-700 md:h-full mx-auto object-cover'
            src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path || movieDetail?.poster_path}`}
            alt={movieDetail?.title}
            width={500}
            height={400}
          />

          <h5 className='mb-2 text-xl md:text-2xl font-bold' style={{ borderBottom: '2px solid #26C6DA', display: 'inline-block' }}>
            {movieDetail?.title}
          </h5>
          <p className='mb-3 font-normal'>{movieDetail?.overview}</p>
          <h5 className='my-3 font-bold'>{movieDetail?.release_date}</h5>
          <h5 className='my-3 font-bold'>İMDB: {movieDetail?.vote_average}</h5>
        </div>
      </div>
    </div>
  );
}

export default Page;
