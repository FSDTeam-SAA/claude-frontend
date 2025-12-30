import Image from 'next/image'
import React from 'react'

const HowOurAnalytics = () => {
    return (
        <div className='py-6 md:py-10 lg:py-16 bg-[#B0FFAA]'>
            <div className="container grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10 lg:gap-20">
                <div className='md:col-span-2'>
                    <Image src="/assets/images/how-our-analytics.png" alt="how our analytics" width={1000} height={1000} className='w-[641px] h-[360px] md:h-[500px] lg:h-[547px] object-cover' />
                </div>
                <div className='md:col-span-3 h-full flex flex-col justify-center'>
                    <h3 className='text-3xl md:text-4xl lg:text-[44px] text-[#131313] font-normal leading-[120%]'>How Our Analytics Process Works</h3>
                    <p className='text-sm md:text-base text-[#616161] font-normal leading-[120%] pt-4 md:pt-5'>To activate your profile, you must first register and purchase our data service to receive your report.</p>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6 md:py-10 lg:py-12'>

                        <div className='md:col-span-1 flex flex-col items-center bg-[#CDFFCD] rounded-[16px] p-4 border border-[#E7E7E7)]'>
                            <div className='flex flex-col items-center gap-4'>
                                <div className='bg-[#E6F4E6] rounded-full p-4 inline-flex' >

                                    <Image src="/assets/images/send.png" alt="send" width={500} height={500} className='object-cover w-10 h-10' />
                                </div>
                                <p className='text-sm lg:text-base font-normal text-center text-[#0A1628] leading-[120%]'>Send us your game video
                                    and the team sheet</p>
                            </div>
                        </div>
                        <div className='md:col-span-1 flex flex-col items-center bg-[#CDFFCD] rounded-[16px] p-4 border border-[#E7E7E7)]'>
                            <div className='flex flex-col items-center gap-4'>
                                <div className='bg-[#E6F4E6] rounded-full p-4 inline-flex' >

                                    <Image src="/assets/images/performance.png" alt="send" width={500} height={500} className='object-cover w-10 h-10' />
                                </div>
                                <p className='text-sm lg:text-base font-normal text-center text-[#0A1628] leading-[120%]'>We analyze your performance</p>
                            </div>
                        </div>
                        <div className='md:col-span-1 flex flex-col items-center bg-[#CDFFCD] rounded-[16px] p-4 border border-[#E7E7E7)]'>
                            <div className='flex flex-col items-center gap-4'>
                                <div className='bg-[#E6F4E6] rounded-full p-4 inline-flex' >

                                    <Image src="/assets/images/email.png" alt="send" width={500} height={500} className='object-cover w-10 h-10' />
                                </div>
                                <p className='text-sm lg:text-base font-normal text-center text-[#0A1628] leading-[120%]'>Receive your report and highlight within 72 hours</p>
                            </div>
                        </div>


                    </div>

                    {/* button  */}
                    <div className='w-full flex items-center justify-center md:justify-start'>
                        <button className='h-[48px] py-3 px-12 rounded-full bg-primary text-white text-base md:text-lg leading-[120%] font-normal '>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowOurAnalytics