"use client"
import React, { useState } from "react";

function MailForm() {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/sendmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            alert('Başarılı bir şekilde mail yollandı')
        } catch (error) {
            // İstisnai durumlar için hata yakalama
            alert("Bir hata oluştu. Lütfen tekrar deneyin.");
        }
    };

    return (
        <form className="flex justify-center items-center bg-gray-100 mb-2 mt-2 dark:bg-gray-900" onSubmit={handleSubmit}>
            <div className="bg-white mt-5 mb-5 rounded-lg dark:bg-neutral-900 dark:text-white">
                <div className="ml-5 mr-5">
                <h1 className='text-center  text-2xl mb-2 mt-4 font-bold text-neutral-500 '>Bize Ulaşın</h1>
                <p className='text-center mb-2 font-bold dark:text-white'>Bize ulaştırmak istediğiniz mesajı aşağıdaki kutuya yazıp "Gönder" <br /> butonuna basınız. Yazacağınız mesaj sistemimiz tarafından ilgili kişiye <br /> yönlendirilecektir.</p>
                <h1 className='text-center text-2xl mb-2 font-bold text-neutral-500'>Adres</h1>
                <p className='text-center mb-2 font-bold dark:text-white'> Kadıköy/İstanbul</p>
                <h1 className='text-center text-2xl mb-2  font-bold text-neutral-500'>Telefon Numaramız</h1>
                <a className='block text-center font-bold dark:text-white' href="tel:+05428984761" >05428984761</a>
                <p className='text-center mb-2 mt-8 font-bold text-neutral-500'>Adınız Soyadınız</p>
                <input className="mb-2 w-full border-none rounded-sm " type="text" name="name" placeholder="İsim" onChange={handleChange} />
                <p className='text-center font-bold text-neutral-500 mb-2'>E-Posta Adresiniz</p>
                <input className="mb-2 w-full border-none rounded-sm" type="email" name="email" placeholder="E-posta" onChange={handleChange} />
                <p className='text-center font-bold text-neutral-500 mb-2'>Konu</p>
                <input className="mb-2 w-full border-none rounded-sm" type="text" name="subject" placeholder="Konu" onChange={handleChange} />
                <p className='text-center font-bold text-neutral-500 mb-2'>Mesajınız</p>
                <textarea className="mb-2 w-full border-none rounded-sm" name="message" placeholder="Mesajınız" onChange={handleChange} />
                <button className="mb-8 mt-8 w-full font-bold text-white bg-neutral-600 h-14 border-none rounded-md hover:bg-neutral-800" type="submit">Gönder</button>
                </div>
                
            </div>

        </form>
    );
}

export default MailForm;