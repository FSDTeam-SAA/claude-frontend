import React from 'react'
import ProfilePicture from './profile-picture'
import VideoUpload from './video-upload'
import PersonalInformationForm from './personal-information-form'

const ProfileContainer = () => {
    return (
        <div className="py-8  md:py-12 lg:py-16">
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 lg:gap-14">
                <div className="md:col-span-1 border border-[#E7E7E7] rounded-[16px] p-6">
                    <ProfilePicture />
                        <VideoUpload />
                </div>
                <div className="md:col-span-2">
                    <h1 className="text-2xl md:text-[28px] lg:text-[32px] text-[#131313] leadimg-[120%] font-normal">Profile Setting</h1>
                    <PersonalInformationForm/>
                </div>
            </div>

        </div>
    )
}

export default ProfileContainer