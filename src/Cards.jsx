import React from 'react'
import single from './assetss/single.png'
import double from './assetss/double.png'
import triple from './assetss/triple.png'

const Cards = () => {
  return (
    <div className='w-full bg-white py-[10rem]'>
        <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8 px-6 md:px-0'>
            <div className='flex flex-col shadow-xl p-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mt-[-3rem] bg-white mx-auto' src={single} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='font-bold text-center text-4xl'>$149</p>
                <div className='text-center text-lg py-8 font-semibold'>
                    <p className='py-4 border-b mx-8 mt-4'>500 GB Storage</p>
                    <p className='py-4 border-b mx-8'>1 Granted User</p>
                    <p className='py-4 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='text-black bg-[#00df9a] p-3 rounded-md w-[200px] mx-auto font-semibold my-6'>Start Trial</button>
            </div>
            <div className='flex flex-col bg-gray-100 shadow-xl p-4 rounded-lg hover:scale-105 duration-300 my-24 md:my-0'>
                <img className='w-20 mt-[-3rem] bg-transparent mx-auto' src={double} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='font-bold text-center text-4xl'>$149</p>
                <div className='text-center text-lg py-8 font-semibold'>
                    <p className='py-4 border-b mx-8 mt-4'>500 GB Storage</p>
                    <p className='py-4 border-b mx-8'>1 Granted User</p>
                    <p className='py-4 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-black text-[#00df9a] p-3 rounded-md w-[200px] mx-auto font-semibold my-6'>Start Trial</button>
            </div>
            <div className='flex flex-col shadow-xl p-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mt-[-3rem] bg-white mx-auto' src={triple} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='font-bold text-center text-4xl'>$149</p>
                <div className='text-center text-lg py-8 font-semibold'>
                    <p className='py-4 border-b mx-8 mt-4'>500 GB Storage</p>
                    <p className='py-4 border-b mx-8'>1 Granted User</p>
                    <p className='py-4 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='text-black bg-[#00df9a] p-3 rounded-md w-[200px] mx-auto font-semibold my-6'>Start Trial</button>
            </div>

        </div>
    </div>
  )
}

export default Cards