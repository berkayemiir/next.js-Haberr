

// ./app/login/page.jsx
"use client"
import { useEffect } from 'react'; // useEffect hook'unu ekleyin
import Log from '../components/Log';

const LoginPage = () => {
  useEffect(() => {
    // Sayfayı istemci tarafında çalışacak şekilde işaretleyin
    // Not: Bu useEffect hook'u sadece bir kez çalışacaktır, 
    // bu sayede "use client" etkisini elde ederiz.
  }, []);

  return (
    <div>
      
      <Log />
    </div>
  );
};

export default LoginPage;
