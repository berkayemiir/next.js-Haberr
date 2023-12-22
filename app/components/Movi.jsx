import React, { useState, useEffect } from 'react';

const VideoWithThumbnail = ({ videoSrc, thumbnailSrc, description }) => {
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
  };

  return (
    <div className="relative">
      {!playing && (
        <>
          <img
            src={thumbnailSrc}
            alt="Video Thumbnail"
            className="w-full cursor-pointer md:h-400 object-cover"
            onClick={handlePlay}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:scale-105 "
            onClick={handlePlay}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white cursor-pointer hover:text-cyan-400 hover:border-cyan-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 3l14 9-14 9V3z"
              />
            </svg>
          </div>
        </>
      )}
      {playing && (
        <iframe
          className="w-full"
          src={videoSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          height={400}
        ></iframe>
      )}
    </div>
  );
};

const Page = () => {
  const cardData = [
    {
      image: '/6.jpg',
      detail: 'Atatürk 1881 - 1919 (1. Film)',
      buttonText: 'Detaya Git',
      link: '/haber/1',
     
    },
    {
      image: '/2.jpg',
      detail: 'Nefes - Yer Eksi İki',
      buttonText: 'Detaya Git',
      link: '/haber/2',
     
    },
    {
      image: '/3.jpg',
      detail: 'Haile 2: Var mı, Yok mu?!',
      buttonText: 'Detaya Git',
      link: '/haber/3',
     
    },
    {
      image: '/4.jpg',
      detail: 'Ölümlü Dünya 2',
      buttonText: 'Detaya Git',
      link: '/haber/4',
     
    },
    {
      image: '/5.jpg',
      detail: 'Öğretmen',
      buttonText: 'Detaya Git',
      link: '/haber/5',
     
    },
    {
      image: '/1.jpg',
      detail: 'Vatikanın Şifresi: Bir Temel Macerası',
      buttonText: 'Detaya Git',
      link: '/haber/6',
     
    },
    {
      image: '/7.jpg',
      detail: 'Kolpaçino 4 4 lük',
      buttonText: 'Detaya Git',
      link: '/haber/7',
     
    },
    {
      image: '/8.jpg',
      detail: 'Murat Göğebakan: Kalbim Yaralı',
      buttonText: 'Detaya Git',
      link: '/haber/8',
     
    },
    // Diğer kartlar buraya eklenecek...
  ];

  const chunkArray = (arr, chunkSize) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };

  const groupedCards = chunkArray(cardData, 4);

  const handleScroll = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      if (isVisible) {
        card.classList.add('visible');
      }
    });
  };

  useEffect(() => {
    // İlk render sonrasında scroll olayını dinlemeye başla
    window.addEventListener('scroll', handleScroll);
    // Component unmount olduğunda scroll olayını durdur
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Boş bağımlılık dizisi, sadece bir kere çalıştırılmasını sağlar

  return (
    <div className='bg-neutral-300 mb-8'>
      <div className="max-w-7xl mx-auto py-4">
        <div className='flex justify-center items-center mb-8'>
          <div className='w-full text-center'>
            <h1 className='font-bold text-xl md:text-3xl border-b border-[#26C6DA] pb-1 mb-8 inline-block dark:text-black dark:font-bold dark:border-white' >YAKINDA SİNEMALARDA</h1>
            <VideoWithThumbnail
              videoSrc="https://www.youtube.com/embed/LeCk90-TAcM?si=q6aN0JJJLsAhy5k4"
              thumbnailSrc="/eksii.webp"
              description="Buraya video açıklaması gelecek."
            />
          </div>
        </div>
        <div className='w-full text-center'>
          <h1 className='font-bold text-xl md:text-3xl text-center border-b border-[#26C6DA] pb-1 mb-8 inline-block dark:text-black dark:font-bold dark:border-white'>YERLİ FİLMLER</h1>
        </div>
        {groupedCards.map((group, groupIndex) => (
          <div key={groupIndex} className="grid grid-cols-12 gap-4">
            {group.map((card, index) => (
              <div
                key={index}
                className="card max-w-md col-span-12 mx-auto lg:col-span-3 mb-4 bg-white border border-gray-200 rounded-lg shadow  duration-300 hover:border hover:border-cyan-400 dark:hover:border-cyan-400  dark:bg-gray-800 dark:border-gray-700   text-xl font-bold "
                width={320}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a href="#">
                  <img className="rounded-t-lg w-full  opacity-90 hover:opacity-100 " src={card.image} alt="" style={{ maxWidth: '320px' }} />
                </a>
                <div className="p-5  w-80">
                  <p className="mb-3 font-bold text-gray-700 dark:text-gray-400 line-clamp-1 break-words">{card.detail}</p>
                  <p className="mb-3 font-bold text-gray-700 dark:text-gray-400 line-clamp-1 break-words">{card.description}</p>
                  <a href={card.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-neutral-600 rounded-lg hover:bg-cyan-400 focus:ring-4 focus:outline-none  dark:bg-neutral-600 dark:hover:bg-neutral-900">
                    {card.buttonText}
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ))}
        <div className="flex justify-center mb-8">
          <a href='https://boxofficeturkiye.com/haberler/yerli-film-haberleri'
            className='flex item-center justify-center bg-neutral-600 px-8 py-3 duration-300 rounded-lg text-lg font-bold text-center text-white hover:bg-neutral-800 '>
            Daha Fazla
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
