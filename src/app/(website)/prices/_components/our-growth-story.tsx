import Image from 'next/image'
import React from 'react'

const OurGrowthStory = () => {
    return (
        <div className='bg-[#F4FFF4] py-10 md:py-14 lg:py-16'>
            <div className='container grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-20'>
                <div className="md:col-span-1">
                    <Image src="/assets/images/our-growth-story.png" alt="activate-your-profile" width={1000} height={1000} className='object-contain'/>
                </div>
                <div className="md:col-span-1 flex flex-col justify-center">
                    <h3 className='text-2xl md:text-3xl lg:text-4xl font-normal text-[#131313] leading-[120%]'>Our Growth Story </h3>
                    <p className='text-sm lg:text-base font-normal text-[#616161] leading-[150%] py-3 md:py-4 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                       <p className='text-sm lg:text-base font-normal text-[#616161] leading-[150%] pt-3 md:pt-4 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&lsquo;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>

            </div>
        </div>
    )
}

export default OurGrowthStory