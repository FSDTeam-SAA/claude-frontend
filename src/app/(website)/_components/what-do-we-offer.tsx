import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const WhatDoWeOffer = () => {
    return (
        <div className='py-6 md:py-12 lg:py-16'>

            <div className='container grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-24'>
                <div className='order-2 md:order-1 md:col-span-1 bg-[#B0FFAA] shadow-[0px_4px_16px_0px_#00000029] rounded-[16px] flex flex-col justify-center py-6 px-8 md:px-16 lg:px-20'>
                    <h3 className='text-3xl md:text-4xl lg:text-[48px] text-[#131313] leading-[120%] font-normal'>What do we offer</h3>

                    <ul className='py-6 md:py-10 lg:py-12 list-disc list-inside'>
                        <li className='text-base font-normal leading-[150%] text-[#616161]'>Specific technical and tactical data</li>
                        <li className='text-base font-normal leading-[150%] text-[#616161] py-4 md:py-5 lg:py-6'>Ratings for every game to measure your progression</li>
                        <li className='text-base font-normal leading-[150%] text-[#616161]'>Personalized highlights showcasing your key actions</li>
                    </ul>

                    <Link href="/sign-up">
                        <button className="w-[180px] md:w-[200px] lg:w-[215px] h-[40px] md:h-[44px] lg:h-[48px] text-base md:text-lg text-white leading-[120%] font-normal bg-primary rounded-full relative z-10">Register</button>
                    </Link>
                </div>
                <div className='order-1 md:order-2 md:col-span-1'>
                    <Image src="/assets/images/what-do-we-offer.png" alt="What Do We Offer" width={1000} height={1000} className='w-full h-[360px] md:h-[440px] lg:h-[520px]' />
                </div>
            </div>
        </div>
    )
}

export default WhatDoWeOffer