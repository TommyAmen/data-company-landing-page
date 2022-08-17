import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] grid lg:grid-cols-3 mx-auto'>
            <div className='lg:col-span-2 '>
                <h1 className='font-bold md:text-4xl sm:text-3xl text-2xl py-2 text-center md:text-left'>Want tips & tricks to optimize your data?</h1>
                <p className='font-semibold text-center md:text-left'>Sign up to our newsletter and stay up to date</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row w-full items-center justify-between'>
                    <input className='p-3 rounded-md outline-0 flex text-black w-[80%]  md:w-full my-4 md:my-0 ' type="email" placeholder='Enter Email' />
                    <button className='text-black bg-[#00df9a] p-3 rounded-md w-[200px] mx-auto md:mx-0 font-bold lg:ml-2'>Notify Me</button>
                </div>
                <p className='pt-4 text-center md:text-left mt-8 md:mt-0 w-[80%] md:w-full mx-auto md:mx-0'>we care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy</span></p>
            </div>

        </div>

    </div>
  )
}

export default Newsletter