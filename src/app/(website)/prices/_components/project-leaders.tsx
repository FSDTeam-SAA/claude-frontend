import React from 'react'
import Image from 'next/image'

const ProjectLeader = () => {
    const projectLeaders = [
        {
            id:1,
            image: "/assets/images/pl1.png",
            name: "Wilamson"
        },
         {
            id:2,
            image: "/assets/images/pl2.png",
            name: "Wilamson"
        },
    ]
  return (
    <div className='bg_color py-10 md:py-16 lg:py-20'>
        <div className="container">
            <h3 className='text-2xl md:text-3xl lg:text-4xl text-primary font-normal leading-[120%] text-center'>Project Leaders</h3>
       <div className="flex flex-col md:flex-row items-center justify-center gap-10 pt-6 md:pt-8 lg:pt-10">
        {projectLeaders?.map((item) => (
          <div
            key={item?.id}
            className="bg-primary rounded-[16px] shadow-[0px_8px_32px_0px_#00000029] p-6 md:p-7 lg:p-8 flex flex-col items-center justify-center"
          >
            <Image src={item?.image} alt="project leader" width={500} height={500} className="w-[180px] h-[180px] rounded-full object-contain"/>
            <h4 className="text-xl lg:text-2xl text-white font-normal leading-[150%] text-center pt-6 md:pt-7 lg:pt-8">{item?.name}</h4>
          </div>
        ))}
    </div>

        </div>
    </div>
  )
}

export default ProjectLeader