import { Mail, Phone } from 'lucide-react'
import React from 'react'
import ContactForm from './contact-form'

const ContactInformation = () => {
  return (
    <div className='py-10 md:py-14 lg:py-20'>
        <div className='container grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10'>
            <div className='md:col-span-1 h-full w-full flex flex-col justify-center'>
               <div className='grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 md:pb-10 lg:pb-12'>
                <div className='flex items-center  gap-2'>
                 <div>
                    <span className='bg-[#E7E7E7] p-4 rounded-full inline-flex justify-center items-center'><Mail /></span>
                </div>
                <div>
                    <h4 className='text-base lg:text-lg font-normal leading-[120%] text-[#131313]'>Email Address</h4>
                    <p className='text-sm lg:text-base leading-[150%] text-[#616161] font-normal'>Info@analyticsoccer.com</p>
                </div>
               </div>
               <div className='flex items-center  gap-2'>
                 <div>
                    <span className='bg-[#E7E7E7] p-4 rounded-full inline-flex justify-center items-center'><Phone /></span>
                </div>
                <div>
                    <h4 className='text-base lg:text-lg font-normal leading-[120%] text-[#131313]'>Phone Number</h4>
                    <p className='text-sm lg:text-base leading-[150%] text-[#616161] font-normal'>+1954 549 6906</p>
                </div>
               </div>
               </div>

                <div className='bg-[#F8F8F8] p-4 md:p-5 lg:p-6 rounded-[16px]'>
                    <p className='text-sm lg:text-base text-[#616161] font-normal leading-[150%] text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
             <div className='md:col-span-1'>
                <div className='bg-[#F4FFF4] p-6 border border-primary rounded-[16px]'>
                    <h4 className='text-lg md:text-xl lg:text-2xl text-[#424242] leading-[120%] font-normal'>Contact Information</h4>
                    <div className='pt-6 md:pt-8 lg:pt-8'>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactInformation