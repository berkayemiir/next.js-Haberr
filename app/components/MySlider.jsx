import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const MySlider = () => {
  const [movies, setMovies] = useState([]);
  const [slider, setSlider] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          'https://api.themoviedb.org/3/trending/all/day?api_key=6c14ff13bcecdf9def4d06cba56b506d&language=en-US&page=1'
        );
        if (!res.ok) {
          throw new Error('API isteği başarısız.');
        }

        const data = await res.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Hata:', error.message);
      }
    };

    fetchMovies();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const nextSlide = () => {
    if (slider) {
      slider.slickNext();
    }
  };

  const prevSlide = () => {
    if (slider) {
      slider.slickPrev();
    }
  };

  return (
    <div className='relative mt-10'>
      <Slider ref={(slider) => setSlider(slider)} {...sliderSettings} className='mb-16'>
        {movies.map((movie, index) => (
          <div key={movie.id} className={`group relative ${index === 0 ? '' : 'hidden md:hidden lg:block'}`}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie?.poster_path}`}
                alt={movie.title}
                className='w-full rounded-lg h-60 md:w-full md:h-full lg:w-full lg:h-full object-cover'
              />
            </div>
            <div className='opacity-0 absolute bottom-0 left-0 w-full h-full bg-white group-hover:opacity-50 dark:text-black'>
              <div
                className='text-center text-md md:text-3xl font-bold'
                style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              >
                {movie.title ?? 'Anonymous'}
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className='absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer text-cyan-400' onClick={prevSlide}>
        <FaArrowLeft size={32} />
      </div>
      <div className='absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer text-cyan-400' onClick={nextSlide}>
        <FaArrowRight size={32} />
      </div>
    </div>
  );
};

export default MySlider;
