import React from 'react'
import PriceBenefit from '../Molecules/PriceBenefit'

const CardPrice = ({style, level, desc, price, textColor, benefit1, benefit2, benefit3}) => {

  const handleClick = () => {
    const phoneNumber = '82329322353'; // Ganti dengan nomor telepon Anda
    const message = 'Hello, I would like to inquire about your services.'; // Ganti dengan pesan yang diinginkan
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
  };

  return (
    <div className={`${style} border px-5 py-8 rounded-2xl text-start`}>
        <header className='mb-5'>
            <h2 className={`${textColor} h4 mb-2`}>{level}</h2>
            <p>{desc}</p>
        </header>
        <div className="price mb-5">
            <h3 className='h5'>Rp {price}</h3>
            <button className='button w-full py-2 bg-white text-black rounded-md mt-2' onClick={handleClick}>GET STARTED</button>
        </div>
        <div className="benefit">
            <PriceBenefit desc={benefit1}/>
            <PriceBenefit desc={benefit2}/>
            <PriceBenefit desc={benefit3}/>
        </div>
    </div>
  )
}

export default CardPrice