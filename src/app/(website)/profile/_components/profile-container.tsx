"use client"

import { useSession } from "next-auth/react"
import { useQuery } from "@tanstack/react-query"
import ProfilePicture from "./profile-picture"
import PersonalInformationForm from "./personal-information-form"
import { UserProfileApiResponse } from "./user-data-type"
import VideoUpload from "./video-upload"

const ProfileContainer = () => {
  const { data: session } = useSession()
  const token = (session?.user as { accessToken?: string })?.accessToken

  const { data, isLoading } = useQuery<UserProfileApiResponse>({
    queryKey: ["user-profile"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profile`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      return res.json()
    },
    enabled: !!token,
    staleTime: 1000 * 60 * 5,
  })
  
  // loading 
  if (isLoading) {
    return <div className="py-20 text-center">Loading profile...</div>
  }

  const user = data?.data?.user

  return (
    <div className="py-8 md:py-12 lg:py-16">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 lg:gap-14">
        <div className="md:col-span-1 border border-[#E7E7E7] rounded-[16px] p-6">
          <ProfilePicture user={user} />
          <VideoUpload videos={user?.playingVideo || []} />
        </div>

        <div className="md:col-span-2">
          <h1 className="text-2xl md:text-[28px] lg:text-[32px] text-[#131313] font-normal">
            Profile Setting
          </h1>
          <PersonalInformationForm user={user} />
        </div>
      </div>
    </div>
  )
}

export default ProfileContainer












// import React from 'react'
// import ProfilePicture from './profile-picture'
// import VideoUpload from './video-upload'
// import PersonalInformationForm from './personal-information-form'

// const ProfileContainer = () => {
//     return (
//         <div className="py-8  md:py-12 lg:py-16">
//             <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 lg:gap-14">
//                 <div className="md:col-span-1 border border-[#E7E7E7] rounded-[16px] p-6">
//                     <ProfilePicture />
//                     <VideoUpload />
//                 </div>
//                 <div className="md:col-span-2">
//                     <h1 className="text-2xl md:text-[28px] lg:text-[32px] text-[#131313] leadimg-[120%] font-normal">Profile Setting</h1>
//                     <PersonalInformationForm />
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default ProfileContainer