"use client"
import React, { useState } from 'react'
import RegisterAsIndividualPlayerForm from './register-as-individual-player-form';
import { useQuery } from '@tanstack/react-query';
import { SubscriptionApiResponse } from './subscription-data-type';
import { useSession } from 'next-auth/react';

const IndividualPlayer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const session = useSession();
    const token = (session?.data?.user as {accessToken:string})?.accessToken;

    const {data} = useQuery<SubscriptionApiResponse>({
        queryKey: ["subscription-all"],
        queryFn: async ()=>{
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/subscription`,{
                method: "GET",
                headers: {
                    Authorization : `Bearer ${token}`
                }
            })
            return res.json();
        }
    })

    console.log(data)

const subscriptionData = data?.data?.filter(
  (item) => item?.paymentType === "Individual"
)

console.log(subscriptionData)
 const subscriptionId = "695645ddf8fc385a2d079234"

    return (
        <div className="bg-[#EBEBEB] py-10 md:py-16 lg:py-24">
            <div className="container ">
                <h3 className='text-2xl md:text-3xl lg:text-[40px] text-[#131313] leading-[120%] font-normal text-center'>Pricing For Individual Player</h3>
                <p className='text-base text-[#424242] leading-[150%] font-normal text-center pt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className='w-full flex items-center justify-center gap-6 pt-7 md:pt-9 lg:pt-12'>
                    {
                        subscriptionData?.map((item)=>{
                            return  <div key={item?._id} className="w-full md:w-1/3 border-[1.5px] border-[#1E3A8A] rounded-[16px]">
                        <h4 className='bg-[#006600] rounded-t-[16px] text-lg md:text-xl lg:text-[22px] font-normal text-white leading-[120%] text-center py-6 md:py-8 lg:py-10'>{item?.description}</h4>
                        <div className='pt-5 pb-6 md:pb-8 lg:pb-10 px-6 md:px-7 lg:px-8'>
                            <h5 className="text-2xl md:text-3xl lg:text-4xl text-[#131313] text-center leading-[120%] font-bold pb-5">${item?.price}</h5>
                            <button onClick={()=>setIsOpen(true)} className='w-full h-[51px] bg-[#424242] rounded-[8px] text-base text-white leading-[120%] font-medium '>Continue</button>
                        </div>


                    </div>
                        })
                    }
                   
                </div>
            </div>

            {/* modal open  */}
            {
                isOpen && (
                   <RegisterAsIndividualPlayerForm open={isOpen} onOpenChange={setIsOpen} subscriptionId={subscriptionId}/>
                )
            }
        </div>
    )
}

export default IndividualPlayer