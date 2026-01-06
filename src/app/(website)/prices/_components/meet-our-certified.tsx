import Image from 'next/image'
import React from 'react'

const MeetOurCertified = () => {
    return (
        <div className='py-6 md:py-10 lg:py-16'>
            <div className='container '>
                <h4 className='text-2xl md:text-3xl lg:text-[40px] text-[#131313] leading-[120%] font-normal text-center'>Meet Our Certified Coaches</h4>
                <p className='text-base lg:text-lg font-normal leading-[150%] text-[#424242] text-center pt-3 md:pt-4 pb-6 md:pb-8 lg:pb-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br /> Ipsum has been the industry&apos;s st</p>
                <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
                    <div className='w-full md:w-1/2 lg:w-1/3 flex flex-col items-center rounded-[16px] pb-4 px-4 border border-[#B6B6B6] bg-white shadow-[0_4px_8px_rgba(0,0,0,0.08)]'>
                        <Image src="/assets/images/meet1.png" alt="meet" width={500} height={500} className='object-cover w-[200px] h-[200px]' />
                        <p className='text-lg md:text-xl lg:text-2xl font-normal text-[#131313] leading-[120%] py-2 text-center'>Certified Coaches</p>
                        <p className='text-base lg:text-lg font-normal text-[#131313] leading-[120%] text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&rsquo;s st</p>
                    </div>
                     <div className='w-full md:w-1/2 lg:w-1/3 flex flex-col items-center rounded-[16px] pb-4 px-4 border border-[#B6B6B6] bg-white shadow-[0_4px_8px_rgba(0,0,0,0.08)]'>
                        <Image src="/assets/images/meet2.png" alt="meet2" width={500} height={500} className='object-cover w-[200px] h-[200px]' />
                        <p className='text-lg md:text-xl lg:text-2xl font-normal text-[#131313] leading-[120%] py-2 text-center'>Decades of Experience</p>
                        <p className='text-base lg:text-lg font-normal text-[#131313] leading-[120%] text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&rsquo;s st</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeetOurCertified