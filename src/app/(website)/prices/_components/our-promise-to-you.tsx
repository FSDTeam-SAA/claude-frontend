import Image from 'next/image'
import React from 'react'

const OurPromiseToYou = () => {
    return (
        <div className='bg-[#F4FFF4] py-6 md:py-10 lg:py-16'>
            <div className='container '>
                <h4 className='text-2xl md:text-3xl lg:text-[40px] text-[#131313] leading-[120%] font-normal text-center'>Our Promise to You</h4>
                <p className='text-base lg:text-lg font-normal leading-[150%] text-[#424242] text-center pt-3 md:pt-4 pb-6 md:pb-8 lg:pb-10'>We stand by our commitment to quality, focus on your needs with integrity <br />
                    , and strive to exceed your expectations</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

                    <div className='md:col-span-1 flex flex-col items-center rounded-[16px] p-4 border border-[#B6B6B6)]'>
                        <div className='flex items-start gap-4'>
                            <div className='bg-[#E7E7E7] rounded-full px-5 py-2 inline-flex' >

                            <Image src="/assets/images/our-promise1.svg" alt="promiss" width={500} height={500} className='object-cover w-[44px] h-[32px]' />
                        </div>
                        <div>
                            <p className='text-base md:text-lg lg:text-xl font-normal text-[#131313] leading-[120%] py-2'>Unbiased Coaches</p>
                            <p className='text-sm lg:text-base font-normal text-[#424242] leading-[120%]'>We have no financial interest in your purchase decision. Our only goal is providing you with accurate, honest information.</p>
                        </div>
                        </div>
                    </div>

                    <div className='md:col-span-1 flex flex-col items-center rounded-[16px] p-4 border border-[#B6B6B6)]'>
                        <div className='flex items-start gap-4'>
                            <div className='bg-[#E7E7E7] rounded-full px-5 py-2 inline-flex' >

                            <Image src="/assets/images/our-promiss2.png" alt="promiss" width={500} height={500} className='object-cover w-[44px] h-[32px]' />
                        </div>
                        <div>
                            <p className='text-base md:text-lg lg:text-xl font-normal text-[#131313] leading-[120%] py-2'>Unbiased Coaches</p>
                            <p className='text-sm lg:text-base font-normal text-[#424242] leading-[120%]'>We have no financial interest in your purchase decision. Our only goal is providing you with accurate, honest information.</p>
                        </div>
                        </div>
                    </div>
                    <div className='md:col-span-1 flex flex-col items-center rounded-[16px] p-4 border border-[#B6B6B6)]'>
                        <div className='flex items-start gap-4'>
                            <div className='bg-[#E7E7E7] rounded-full px-5 py-2 inline-flex' >

                            <Image src="/assets/images/our-promiss2.png" alt="promiss" width={500} height={500} className='object-cover w-[44px] h-[32px]' />
                        </div>
                        <div>
                            <p className='text-base md:text-lg lg:text-xl font-normal text-[#131313] leading-[120%] py-2'>Unbiased Coaches</p>
                            <p className='text-sm lg:text-base font-normal text-[#424242] leading-[120%]'>We have no financial interest in your purchase decision. Our only goal is providing you with accurate, honest information.</p>
                        </div>
                        </div>
                    </div>
                    <div className='md:col-span-1 flex flex-col items-center rounded-[16px] p-4 border border-[#B6B6B6)]'>
                        <div className='flex items-start gap-4'>
                            <div className='bg-[#E7E7E7] rounded-full py-2 px-5 inline-flex' >

                            <Image src="/assets/images/our-promiss4.png" alt="promiss" width={500} height={500} className='object-cover w-[44px] h-[32px]' />
                        </div>
                        <div>
                            <p className='text-base md:text-lg lg:text-xl font-normal text-[#131313] leading-[120%] py-2'>Unbiased Coaches</p>
                            <p className='text-sm lg:text-base font-normal text-[#424242] leading-[120%]'>We have no financial interest in your purchase decision. Our only goal is providing you with accurate, honest information.</p>
                        </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default OurPromiseToYou