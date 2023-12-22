"use client"
import React from 'react'
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';


const Tabs = () => {
    const searchParams=useSearchParams()
    const genre= searchParams.get('genre')
    console.log(genre,"genre")
    const tabs=[
        {
            name:"En Populer",
            url:"popular"
        },
        
        {
            name:"Yakında Gelecekler",
            url:"upcoming"
        },
    ]
  return  (
    <div className='p-5 font-bold bg-gray-100 dark:bg-gray-900 dark:text-black dark:font-bold flex items-center justify-center gap-7'>
      {
        tabs.map((tab,i)=>(
            <Link className={` bg-neutral-600 py-1 text-white px-3 rounded hover:bg-gray-800 hover:text-gray-50 duration-300 transition-opacity dark:bg-gray-100 dark:text-black dark:hover:bg-gray-400 ${tab.url ===genre? "underline underline-offset-8 text-cyan-400":""}`} href={`/?genre=${tab.url}`}>{tab.name}</Link>
        ))
      }
    </div>
  );
}

export default Tabs