import Image from 'next/image'
import React from 'react'

const ActivateYourProfile = () => {
  return (
    <div className=' py-10 md:py-14 lg:py-16'>
        <div className='container grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-20'>
            <div className="order-2  md:col-span-1">
                <Image src="/assets/images/activate-your-profile.png" alt="activate-your-profile" width={1000} height={1000} className='object-contain'/>
            </div>
             <div className="order-1 md:col-span-1 flex flex-col justify-center">
                <h3 className='text-3xl md:text-4xl lg:text-[48px] font-normal text-[#131313] leading-[120%]'>Lorem Ipsum is simply dummy text of the </h3>
                <p className='text-sm lg:text-base font-normal text-[#616161] leading-[150%] py-3 md:py-4 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr&rsquo;`s standard dummy text ever since the 1500s, when an unknow</p>
                <div>
                    <button className='bg-primary py-3 px-10 rounded-full text-base lg:text-lg font-normal leading-[120%] text-white '>Activate Your Profile</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ActivateYourProfile