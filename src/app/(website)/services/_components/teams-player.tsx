import { CircleCheckBig } from 'lucide-react'
import React from 'react'

const TeamsPlayer = () => {
    const teamsPlayer = [
        {
            id: 1,
            game: 1,
            price: "59"
        },
        {
            id: 2,
            game: 5,
            price: "39.99"
        },
        {
            id: 3,
            game: 10,
            price: "34.99"
        },
        {
            id: 4,
            game: 15,
            price: "29.99"
        },
        {
            id: 5,
            game: 20,
            price: "26.99"
        },
    ]
    return (
        <div className="py-10 md:py-16 lg:py-24">
            <div className="container ">
                <h3 className='text-2xl md:text-3xl lg:text-[40px] text-[#131313] leading-[120%] font-normal text-center'>Pricing for For Teams (minimum 10 players)</h3>
                <p className='text-base text-[#424242] leading-[150%] font-normal text-center pt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-6 pt-7 md:pt-9 lg:pt-12'>
                    {
                        teamsPlayer?.map((item) => {
                            return <div key={item?.id} className="md:col-span-1 border-[1.5px] border-[#1E3A8A] rounded-[16px]">
                                <h4 className='bg-[#006600] rounded-t-[16px] text-lg md:text-xl lg:text-2xl font-normal text-white leading-[120%] text-center py-5 lg:py-6'>{item?.game} Games</h4>
                                <div className='pt-5 pb-6 md:pb-8 lg:pb-10 px-6 md:px-7 lg:px-8'>
                                    <h5 className="text-2xl md:text-3xl lg:text-[40px] text-[#131313] text-center leading-[120%] font-bold pb-5">$ {item?.price} <sub className="text-[#131313] font-medium text-xl md:text-2xl">/ player</sub></h5>
                                    <p className="flex items-center justify-center gap-2 text-base text-[#131313] leading-[120%] font-normal pb-5 "><CircleCheckBig className='text-primary w-5 h-5' /> Data report & Highlights</p>
                                    <button className='w-full h-[51px] bg-[#424242] rounded-[8px] text-base text-white leading-[120%] font-medium '>Continue</button>
                                </div>


                            </div>
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default TeamsPlayer