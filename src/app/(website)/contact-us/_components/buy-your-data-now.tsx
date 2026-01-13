import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const BuyYourDataNow = () => {
  return (
    <div className='p-6 md:py-10 lg:py-12 border-t border-[#B6B6B6)]'>
      <div className='container bg-white rounded-[50px] '>
        <Image src="/assets/images/buyyourdatanow.png" alt="buy your data now" width={1000} height={1000} className="w-full object-cover"/>

        
        <div className="w-full flex flex-col items-center justify-center">
          <p className='w-full md:max-w-2xl text-lg md:text-xl text-[#333333] font-medium leading-[150%] text-center py-4 md:py-6 lg:py-8'><span className='text-primary'>Analytic Soccer</span> is the first data platform designed for amateur players. Showcase your profile, upload your stats, get rated, and track your transfer history <span className='text-primary'>just like the pros.</span></p>
          <Link href="#">
          <button className='h-[48px] md:h-[52px] lg:h-[56px] px-6 md:px-12 lg:px-16 text-sm md:text-base leading-[120%] text-white font-bold bg-primary rounded-[8px]'>Buy Your Data Now</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BuyYourDataNow