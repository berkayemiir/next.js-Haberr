import React from 'react';
import store from '@/app/data/store.json';
import { notFound } from 'next/navigation';

export default function Page({ params }) {
  const haberData = store.data.filter((item) => item.id == params.id);

  if (haberData.length === 0) {
    return notFound();
  }

  const updateContent = (content) => {
    const halfIndex = Math.ceil(content.length / 2);
    const firstHalf = content.substring(0, halfIndex);
    const secondHalf = content.substring(halfIndex);
    return (
      <>
        {firstHalf}
        <br />
        {secondHalf}
      </>
    );
  };

  return (
    <div key={'99999'}>
      {haberData.map((item) => (
        <div className='mb-20' key={item.id}>
          <div>
            <h1 className='text-2xl font-bold mb-10 ml-8 mt-4'>{item.title}</h1>
          </div>
          <div className='flex ml-8 mb-8'>
            <div>
              <img className='h-full w-96 rounded-lg opacity-90 hover:opacity-100 cursor-pointer' src={item.img_src} alt='' />
            </div>
            <div className='ml-8'>
              <h3 className='font-bold'>Filmin Türü</h3>
              <h3 className='font-bold mb-4 opacity-70'>{item.tur}</h3>
              <h3 className='font-bold'>Yönetmen</h3>
              <h3 className='font-bold mb-4 opacity-70'>{item.yonetmen}</h3>
              <h3 className='font-bold'>Oyuncular</h3>
              <h3 className='font-bold mb-4 opacity-70'>{item.oyuncular}</h3>
              <h3 className='font-bold'>Vizyon Tarihi</h3>
              <h3 className='font-bold mb-4 opacity-70'>{item.vizyon_tarihi}</h3>
              <h3 className='font-bold'>Sinema Dağıtım</h3>
              <h3 className='font-bold mb-4 opacity-70'>{item.dagitim}</h3>
              <h3 className='font-bold'>Yapımcı</h3>
              <h3 className='font-bold mb-4 opacity-70'>{item.yapimci}</h3>
              <h3 className='font-bold'>Ülke</h3>
              <h3 className='font-bold mb-4 opacity-70'>{item.ulke}</h3>
            </div>
            <div className='ml-8'>
              <iframe
                width='560'
                height='315'
                src={`https://www.youtube.com/embed/${item.youtube_id}?si=P6piHL3XstJodZGl`}
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
              ></iframe>
              <h3 className='text-2xl font-bold mt-4'>Filmin Konusu</h3>
              <p className='font-bold mb-4 opacity-70'>{updateContent(item.konu)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
