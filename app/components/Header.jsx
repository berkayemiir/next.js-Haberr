"use client"
import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useRouter } from 'next/navigation';
import { CiUser } from 'react-icons/ci';
import Link from 'next/link';
import Themecomp from '../ThemeComp';

const Header = () => {
  const [keyword, setKeyword] = useState('');
  const router = useRouter();
  const [showInput, setShowInput] = useState(false);

  const searchFunc = (e) => {
    if (e.key === 'Enter' && keyword.length >= 3) {
      router.push(`/search/${keyword}`);
      setKeyword('');
    }
  };

  return (
    <div className='flex justify-between  items-center gap-5 h-20 p-5 w-full'>
      <Link
        href={'/'}
        className='bg-cyan-400 rounded-lg p-3 text-xl md:text-2xl font-bold cursor-pointer dark:dark:bg-gray-700'
      >
        MovieApp
      </Link>

      <div className='flex items-center gap-4'>
        {/* Mobil boyutta BiSearch ikonu veya input */}
        {showInput ? (
          <input
            value={keyword}
            onKeyDown={searchFunc}
            onChange={(e) => setKeyword(e.target.value)}
            onBlur={() => setShowInput(false)}
            placeholder='Arama Yapınız...'
            className='outline-none flex-1 bg-transparent border-none'
            type='text'
          />
        ) : (
          <BiSearch
            size={25}
            className='md:hidden cursor-pointer'
            onClick={() => setShowInput(true)}
          />
        )}

        {/* Geniş ekran boyutunda görünen arama alanı */}
        <div className='hidden md:flex flex-1 items-center gap-2 border p-3 rounded-lg hover:border-cyan-400'>
          <input
            value={keyword}
            onKeyDown={searchFunc}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder='Arama Yapınız...'
            className='outline-none flex-1 bg-transparent border-none'
            type='text'
          />
          <BiSearch size={25} />
        </div>

        {/* Diğer ikonlar */}
        <Themecomp />
        <Link href={'/login'} to='/SignIn' className='hover:text-cyan-400'>
          <CiUser size={25} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
