import React from 'react'
import Image from 'next/image'

const AnalyticSoccer = () => {
    return (
        <div className='py-4 md:py-14 lg:py-[72px]'>
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16">
                <div className='order-2 md:order-1 md:col-span-1 flex flex-col justify-center'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl text-[#131313] leading-[120%] font-normal '>Analytic Soccer Experts
                        Nationwide</h1>
                    <p className='text-sm lg:text-base font-normal leading-[150%] text-[#616161] py-3 md:py-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknow</p>
                    <div className='w-full md:w-[90%] grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='rounded-[16px] p-4 border border-[#E7E7E7] bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex items-center  gap-2'>
                            <div>
                                <span className='bg-[#E6F4E6] p-4 rounded-full inline-flex justify-center items-center'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M33.3332 21.6667C33.3332 30 27.4998 34.1667 20.5665 36.5833C20.2034 36.7064 19.8091 36.7005 19.4498 36.5667C12.4998 34.1667 6.6665 30 6.6665 21.6667V10C6.6665 9.55797 6.8421 9.13405 7.15466 8.82149C7.46722 8.50893 7.89114 8.33333 8.33317 8.33333C11.6665 8.33333 15.8332 6.33333 18.7332 3.8C19.0863 3.49833 19.5354 3.33258 19.9998 3.33258C20.4642 3.33258 20.9134 3.49833 21.2665 3.8C24.1832 6.35 28.3332 8.33333 31.6665 8.33333C32.1085 8.33333 32.5325 8.50893 32.845 8.82149C33.1576 9.13405 33.3332 9.55797 33.3332 10V21.6667Z" stroke="#079201" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg></span>
                            </div>
                            <div>
                                <h4 className='text-2xl md:text-[28px] lg:text-[32px] font-normal leading-[120%] text-[#131313]'>1000+</h4>
                                <p className='text-sm lg:text-base leading-[150%] text-[#616161] font-normal pt-2'>Profile Completed</p>
                            </div>
                        </div>
                        <div className='rounded-[16px] p-4 border border-[#E7E7E7] bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex items-center  gap-2'>
                            <div>
                                <span className='bg-[#E6F4E6] p-4 rounded-full inline-flex justify-center items-center'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M33.3332 21.6667C33.3332 30 27.4998 34.1667 20.5665 36.5833C20.2034 36.7064 19.8091 36.7005 19.4498 36.5667C12.4998 34.1667 6.6665 30 6.6665 21.6667V10C6.6665 9.55797 6.8421 9.13405 7.15466 8.82149C7.46722 8.50893 7.89114 8.33333 8.33317 8.33333C11.6665 8.33333 15.8332 6.33333 18.7332 3.8C19.0863 3.49833 19.5354 3.33258 19.9998 3.33258C20.4642 3.33258 20.9134 3.49833 21.2665 3.8C24.1832 6.35 28.3332 8.33333 31.6665 8.33333C32.1085 8.33333 32.5325 8.50893 32.845 8.82149C33.1576 9.13405 33.3332 9.55797 33.3332 10V21.6667Z" stroke="#079201" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg></span>
                            </div>
                            <div>
                                <h4 className='text-2xl md:text-[28px] lg:text-[32px] font-normal leading-[120%] text-[#131313]'>10+</h4>
                                <p className='text-sm lg:text-base leading-[150%] text-[#616161] font-normal pt-2'>Years Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='order-1 md:order-2 md:col-span-1'>
                    <Image src="/assets/images/analytic-soccer.png" alt="analytic-soccer" width={1000} height={1000} className='object-contain w-[677px] h-[400px] md:h-[500px] lg:h-[625px]' />
                </div>
            </div>
        </div>
    )
}

export default AnalyticSoccer