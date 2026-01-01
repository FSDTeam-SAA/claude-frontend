import Image from 'next/image'
import React from 'react'

const AccessThePlatform = () => {
  return (
    <div className='bg-[#B0FFAA] py-8 md:py-12 lg:py-16'>
        <div className='container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-20'>
            <div className='md:col-span-1 w-full h-full flex items-center'>
                <h1 className='text-3xl md:text-4xl lg:text-[48px] font-normal leading-[120%] text-black'>Access the platform and <span className='text-primary'>your full data report anytime</span>, on any device : phone, tablet, or computer.</h1>
            </div>
            <div className='md:col-span-1'>
                <Image src="/assets/images/access-the-platform.png" alt="access-the-platform" width={1000} height={1000} className='w-auto h-auto object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default AccessThePlatform