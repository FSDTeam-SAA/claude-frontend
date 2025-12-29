import React from 'react'

const IndividualPlayer = () => {
    return (
        <div className="bg-[#EBEBEB] py-10 md:py-16 lg:py-24">
            <div className="container ">
                <h3 className='text-2xl md:text-3xl lg:text-[40px] text-[#131313] leading-[120%] font-normal text-center'>Pricing for For Individual Player</h3>
                <p className='text-base text-[#424242] leading-[150%] font-normal text-center pt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className='w-full flex items-center justify-center gap-6 pt-7 md:pt-9 lg:pt-12'>
                    <div className="w-full md:w-1/3 border-[1.5px] border-[#1E3A8A] rounded-[16px]">
                        <h4 className='bg-[#006600] rounded-t-[16px] text-lg md:text-xl lg:text-2xl font-normal text-white leading-[120%] text-center py-6 md:py-8 lg:py-10'>Data report & Highlights</h4>
                        <div className='pt-5 pb-6 md:pb-8 lg:pb-10 px-6 md:px-7 lg:px-8'>
                            <h5 className="text-2xl md:text-3xl lg:text-[40px] text-[#131313] text-center leading-[120%] font-bold pb-5">$99</h5>
                            <button className='w-full h-[51px] bg-[#424242] rounded-[8px] text-base text-white leading-[120%] font-medium '>Continue</button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndividualPlayer