"use client"
import { useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react'
import { UserProfileApiResponse } from './player-data-type';
import { Share2 } from 'lucide-react'
import RatingCard from './rating-card';
import PlayerInfoSkeleton from './profile-info-skeleton';
import ErrorContainer from '@/components/shared/ErrorContainer/ErrorContainer';

const PlayerInfo = ({id}:{id:string}) => {
    const session = useSession();
    const token = (session?.data?.user as { accessToken: string })?.accessToken;

    const { data, isLoading, isError, error } = useQuery<UserProfileApiResponse>({
        queryKey: ["profile-info", id],
        queryFn: async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return res.json();
        },
        enabled: !!token
    })

    console.log(data)

    if (isLoading) {
        return <div className="pb-8">
            <PlayerInfoSkeleton />
        </div>
    } else if (isError) {
        return <div className='py-8'>
            <ErrorContainer message={error?.message || "Something went wrong!"} />
        </div>
    }

    const personalInfo = data?.data;
    return (
        <div className='pt-7 pb-40'>
            <div className="container grid grid-cols-1 md:gris-cols-2 lg:grid-cols-5 gap-6 bg-white rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014
]">
                <div className="md:col-span-1">
                    <Image src={personalInfo?.profileImage || "/assets/images/no-user.jpg"} alt={personalInfo?.firstName || "profile image"} width={1000} height={1000} className="w-auto h-auto object-cover rounded-full" />
                </div>
                <div className="md:col-span-3">
                    <ul className="grid gris-cols-1 md:gris-cols-2 lg:grid-cols-3 gap-4">
                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Full Name</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.firstName || "N/A"}  {personalInfo?.lastName || "N/A"}</span></li>
                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Phone</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.phone || "N/A"}</span></li>
                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Nationality</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.citizenship || "N/A"}</span></li>
                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Preferred Foot</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.foot || "N/A"}</span></li>
                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Current Club</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.currentClub || "N/A"}</span></li>
                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>GPA</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.gpa || "N/A"}</span></li>
                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Place of birth</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.birthdayPlace || "N/A"}</span></li>
                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Weight</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.weight || "N/A"}</span></li>
                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Category</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.category || "N/A"}</span></li>
                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Agent</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.agent || "N/A"}</span></li>
                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Social media</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.gpa || "N/A"}</span></li>
                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Age</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.dob || "N/A"}</span></li>
                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Height</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.hight || "N/A"}</span></li>
                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Position</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.position || "N/A"}</span></li>
                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>League</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.league || "N/A"}</span></li>
                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Gender</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.gender || "N/A"}</span></li>
                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Institute Name</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.institute || "N/A"}</span></li>
                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Role</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.role || "N/A"}</span></li>
                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Email</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.email || "N/A"}</span></li>

                    </ul>
                </div>
                <div className="md:col-span-1">
                    <RatingCard averageRating={7.8} totalGames={2} />

                    <div className="pt-10 md:pt-14 lg:pt-20">
                        <button className="w-full h-[40px] bg-primary flex items-center justify-center gap-2 rounded-full text-base font-normal leading-[120%]  text-white px-12 py-2">Share <Share2 className="text-white" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerInfo