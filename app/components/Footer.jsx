import Link from 'next/link'
import React from 'react'



const Footer = () => {



  return (

    <div className='bg-neutral-600 rounded-lg text-lg font-bold p-8 block'>
      <div className='flex items-center justify-center gap-8 border-b '>
        <Link className='block text-white  text-base font-bold mb-2 hover:opacity-50 ' href="/">Anasayfa</Link>
        <Link className='block text-white text-base font-bold mb-2 hover:opacity-50' href="/hakkinda">Hakkımızda</Link>
        <Link className='block text-white text-base font-bold mb-2 hover:opacity-50' href="/iletisim">İletişim</Link>
      </div>
      <h3 className='text-center text-white text-sm opacity-75 py-4'>©2023 MovieApp Tüm Hakları Saklıdır.</h3>

    </div>
  )
}

export default Footer
