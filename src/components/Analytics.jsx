import React from 'react'
import laptop from '../assetss/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={laptop} alt="/" />
            <div className='text-center sm:text-left pt-8 flex flex-col justify-center '>
                <p className=' text-[#00df9a] font-bold text-xl'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='font-bold md:py-4 md:text-5xl sm:text-4xl text-3xl py-2'>Manage Data Analytics Centrally</h1>
                <p className=' font-semibold text-md sm:text-lg md:xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quaerat, a doloremque asperiores fugit architecto exercitationem iste quidem nulla, provident distinctio iure vero temporibus iusto! Facere earum ad quisquam veniam!</p>
                <button className='bg-black text-[#00df9a] p-3 rounded-md w-[200px] mx-auto md:mx-0 font-semibold mt-8'>Get Started</button>
            </div>

        </div>

    </div>
  )
}

export default Analytics