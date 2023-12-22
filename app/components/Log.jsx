// ./app/components/Log.jsx
"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Log = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = () => {
    // Kullanıcı adı ve şifreyi kontrol et
    if (username === '1234' && password === '1234') {
      // Başarılı giriş
      alert('Başarılı giriş!');
      setLoginSuccess(true);
    } else {
      // Başarısız giriş
      alert('Başarısız giriş. Lütfen tekrar deneyin.');
      setLoginSuccess(false);
    }
  };

  return (
    <div className='flex justify-center items-center mt-20 mb-28'>
      <div className='w-450 text-center bg-gray-100  rounded-lg dark:bg-gray-900 '>
        <h1 className='text-2xl mb-10 font-bold mt-14 dark:text-white'>Kullanıcı Girişi</h1>
        <label className='block mb-8'>
          <p className='font-bold dark:text-white'>E-Posta</p>
          <input className='w-96  bg-white text-black rounded-sm  font-bold opacity-80  ' type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Mail Giriniz...' />
        </label>
        <label className=''>
          <p className='font-bold dark:text-white'>Şifre</p>
          <input className='w-96  bg-white text-black rounded-sm font-bold opacity-80  ' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Şifrenizi Giriniz...' />
        </label>
        <br />
        <button className='w-96   h-14 bg-white text-black rounded-sm mt-8 mb-24 font-bold opacity-80  shadow  duration-300 hover:border hover:border-cyan-400 hover:opacity-100 dark:text-black' onClick={handleLogin}>
          Giriş
        </button>

        {/* Giriş başarılıysa Link'i göster */}
        {loginSuccess && (
          <Link href='/profil' className='text-black bg-white h-14 border-none rounded-md mt-8 mb-24 font-bold opacity-80  shadow  duration-300 hover:border-cyan-400 hover:opacity-100  inline-block text-center w-96' style={{paddingTop: '15px'}}>
            Profil Sayfasına Git
          </Link>
        )}
      </div>
    </div>
  );
};

export default Log;
