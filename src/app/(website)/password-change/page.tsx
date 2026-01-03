import React from 'react'
import PasswordChangeForm from './_components/password-change-form'

const PasswordChangePage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-10">
      <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[120%] text-[#131313] text-center">Password Change</h4>
      <PasswordChangeForm/>
    </div>
  )
}

export default PasswordChangePage