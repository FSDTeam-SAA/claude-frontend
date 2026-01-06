import Image from 'next/image'
import React from 'react'

const MeetOurAnalyticsMember = () => {

    const teamMembers = [
        {
            id: 1,
            img : "/assets/images/member1.png",
            name: "Wilamson",
            role: "CEO"
        },
        {
            id: 2,
            img : "/assets/images/member2.png",
            name: "Marvin McKinney",
            role: "CEO"
        },
        {
            id: 3,
            img : "/assets/images/member3.png",
            name: "Darlene Robertson",
            role: "CEO"
        },
        {
            id: 4,
            img : "/assets/images/member4.png",
            name: "Esther Howard",
            role: "CEO"
        },
    ]
  return (
    <div className='bg-[#F4FFF4] py-6 md:py-10 lg:py-16'>
        <div className="container">
              <h3 className='text-2xl md:text-3xl lg:text-4xl text-[#131313] text-center font-normal leading-[120%]'>Meet Our Analytics Members</h3>
                    <p className='text-sm md:text-base text-[#616161] font-normal text-center leading-[120%] pt-4 md:pt-5 lg:pt-6 '>To activate your profile, you must first register and purchase our data service.</p>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 md:pt-8 lg:pt-10'>
            {
                teamMembers?.map((item)=>{
                    return <div key={item?.id} className="flex flex-col items-center p-6 md:p-7 lg:p-8 bg-white rounded-[16px] shadow-[0_8px_32px_0_rgba(0_0_0_0.16]">
                        <Image src={item?.img} alt={item?.name} width={300} height={300} className="h-auto w-auto object-contain rounded-full"/>
                        <h4 className='text-[#0A1628] text-lg md:text-xl lg:text-2xl font-normal leading-[150%] text-center pt-6 md:pt-7 lg:pt-8'>{item?.name}</h4>
                        <p className='text-base md:text-lg lg:text-xl font-normal leading-[150%] text-[#616161] text-center pt-2'>{item?.role}</p>
                    </div>
                })
            }
        </div>
        </div>
       
    </div>
  )
}

export default MeetOurAnalyticsMember