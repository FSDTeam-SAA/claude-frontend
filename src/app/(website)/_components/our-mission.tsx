// import Image from 'next/image'
// import React from 'react'

// const OurMission = () => {
//     const missionData = [
//         {
//             id: 1,
//             img: "/assets/images/mission1.png",
//             title: "Get rated every game"
//         },
//         {
//             id: 2,
//             img: "/assets/images/mission2.png",
//             title: "Get rated every game"
//         },
//         {
//             id: 3,
//             img: "/assets/images/mission3.png",
//             title: "Get rated every game"
//         },
//         {
//             id: 4,
//             img: "/assets/images/mission4.png",
//             title: "Get rated every game"
//         },
//     ]
//     return (
//         <div className='w-full bg-[#F4FFF4] py-8 md:py-12 lg:py-16 flex relative border-2 border-red-500'>
//             {/* left  */}
//             <div className="absolute left-0 inset-1/2">
//                 <Image src="/assets/images/our-mission1.png" alt="Our Mission" width={300} height={300} className='w-[175px] h-[100px] object-contain mx-auto' />
//             </div>

//             {/* center  */}
//             <div>
//                 <h3 className="text-3xl md:text-4xl lg:text-[48px] text-[#131313] leading-[120%] font-normal text-center">Our Mission</h3>
//                 <p className='text-sm md:text-base text-[#616161] leading-[150%] font-normal pt-3 text-center'>Give amateur players the same digital visibility as professional athletes. </p>



//                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 pt-6 md:pt-10 lg:pt-12'>
//                     {
//                         missionData?.map((item) => {
//                             return <div key={item?.id} className='bg-white shadow-[0px_4px_16px_0px_#00000029] rounded-full'>
//                                 <Image src={item?.img} alt={item?.title} width={300} height={300} className='w-[175px] h-[100px] object-contain mx-auto' />
//                                 <p className='text-sm md:text-base font-normal leading-[150%] text-center text-[#0A1628] pt-2'>{item?.title}</p>
//                             </div>
//                         })
//                     }
//                 </div>


//             </div>

//             {/* right  */}
//             <div className="absolute right-0 inset-1/2">
//                 <Image src="/assets/images/our-mission2.png" alt="Our Mission 2" width={300} height={300} className='w-[175px] h-[100px] object-contain mx-auto' />
//             </div>

//         </div>
//     )
// }

// export default OurMission

import Image from "next/image";
import { ReactNode } from "react";
import React from "react";

type MissionItem = {
  id: number;
  img: string;
  title: ReactNode;
};

const OurMission = () => {
  const missionData: MissionItem[] = [
    {
      id: 1,
      img: "/assets/images/mission1.png",
      title: (
      <>
        Get rated every <br /> game
      </>
    ),
    },
    {
      id: 2,
      img: "/assets/images/mission2.png",
      title: (
        <>
        Compete with <br/> teammates
        </>
      ),
    },
    {
      id: 3,
      img: "/assets/images/mission3.png",
      title: (
        <>
        Build your data <br/> identity
        </>
      ),
    },
    {
      id: 4,
      img: "/assets/images/mission4.png",
      title: (
        <>Unlock new <br/> opportunities</>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-[#F4FFF4] py-8 md:py-12 lg:py-16 overflow-hidden">
      
      {/* Left background image */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2">
        <Image
          src="/assets/images/our-mission1.png"
          alt="Player left"
          width={350}
          height={350}
          className="object-contain h-[450px] w-auto"
        />
      </div>

      {/* Right background image */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <Image
          src="/assets/images/our-mission2.png"
          alt="Player right"
          width={350}
          height={350}
          className="object-contain h-[450px] w-auto"
        />
      </div>

      {/* Center Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-3xl md:text-4xl lg:text-[48px] font-normal text-[#131313] leading-[120%]">
          Our Mission
        </h3>

        <p className="text-sm md:text-base text-[#616161] leading-[150%] pt-3 max-w-2xl mx-auto">
          Give amateur players the same digital visibility as professional athletes.
        </p>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pt-8 md:pt-12">
          {missionData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-tl-[60px] rounded-br-[60px] w-[220px] h-[220px] mx-auto shadow-[0px_4px_16px_rgba(0,0,0,0.16)] flex flex-col items-center justify-center"
            >
              <Image
                src={item.img}
                alt="Mission Item"
                width={320}
                height={320}
                className="w-[175px] h-[100px] object-contain"
              />

              <p className="text-sm md:text-base text-[#0A1628] font-normal leading-[150%] text-center pt-3 px-4">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMission;




// import Image from 'next/image'
// import React from 'react'

// const OurMission = () => {
//     const missionData = [
//         {
//             id: 1,
//             img: "/assets/images/mission1.png", // replace with your actual icon paths
//             title: "Get rated every game"
//         },
//         {
//             id: 2,
//             img: "/assets/images/mission2.png",
//             title: "Compete with teammates"
//         },
//         {
//             id: 3,
//             img: "/assets/images/mission3.png",
//             title: "Build your data identity"
//         },
//         {
//             id: 4,
//             img: "/assets/images/mission4.png",
//             title: "Unlock new opportunities"
//         },
//     ]

//     return (
//         <div className='w-full bg-[#F4FFF4] py-16 lg:py-24 relative overflow-hidden'>
//             {/* Background left player */}
//             <div className='absolute left-0 top-0 bottom-0 flex items-center pointer-events-none'>
//                 <Image 
//                     src="/assets/images/our-mission1.png" // your left soccer player image
//                     alt="Soccer player left"
//                     width={600}
//                     height={800}
//                     className='w-auto h-full object-contain opacity-80'
//                     priority
//                 />
//             </div>

//             {/* Background right player */}
//             <div className='absolute right-0 top-0 bottom-0 flex items-center pointer-events-none'>
//                 <Image 
//                     src="/assets/images/our-mission2.png" // your right soccer player image
//                     alt="Soccer player right"
//                     width={600}
//                     height={800}
//                     className='w-auto h-full object-contain opacity-80'
//                     priority
//                 />
//             </div>

//             {/* Center content */}
//             <div className='relative z-10 max-w-7xl mx-auto px-6'>
//                 <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#131313] text-center leading-tight">
//                     Our Mission
//                 </h3>
//                 <p className='text-base lg:text-lg text-[#616161] text-center mt-4 max-w-3xl mx-auto'>
//                     Give amateur players the same digital visibility as professional athletes.
//                 </p>

//                 {/* Mission items grid */}
//                 <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-12 lg:mt-16'>
//                     {missionData.map((item) => (
//                         <div 
//                             key={item.id} 
//                             className='bg-white rounded-full shadow-lg flex flex-col items-center py-8 px-6 hover:shadow-xl transition-shadow'
//                         >
//                             <div className='w-32 h-32 mb-6'>
//                                 <Image 
//                                     src={item.img} 
//                                     alt={item.title}
//                                     width={200}
//                                     height={200}
//                                     className='w-full h-full object-contain'
//                                 />
//                             </div>
//                             <p className='text-[#0A1628] text-center text-base lg:text-lg font-medium'>
//                                 {item.title}
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default OurMission