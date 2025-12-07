import Image from 'next/image'
import React from 'react'
import SignupForm from './_components/sign-up-form'
const SignupPage = () => {
    return (
        <div className='w-full min-h-screen grid grid-cols-1 md:grid-cols-2 border-2 border-red-500'>
            <div className='md:col-span-1'>
                <Image src="/assets/images/auth-img.png" alt="Auth Image" width={1000} height={1000} className='object-cover w-full h-fit' />
            </div>
            <div className='md:col-span-1'>
                <SignupForm />
            </div>
        </div>)
}
export default SignupPage