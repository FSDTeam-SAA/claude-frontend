import Image from 'next/image'
import React from 'react'
import ResetPasswordForm from './_components/reset-password-form'
const ResetPasswordPage = () => {
  return (
    <div className='w-full min-h-screen grid grid-cols-1 md:grid-cols-2'>
      <div className='md:col-span-1'>
        <Image src="/assets/images/auth-img.png" alt="Auth Image" width={1000} height={1000} className='object-cover w-full h-screen' />
      </div>
      <div className='md:col-span-1 flex items-center justify-center'>
        <ResetPasswordForm />
      </div>
    </div>)
}
export default ResetPasswordPage