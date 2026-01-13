import React from 'react'
import Link from "next/link"
import Image from "next/image"
import NewsletterSubscribe from './NewsletterSubscribe'
import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <div className=" bg-white">
      <div className="py-10 md:py-12 lg:py-14 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-6 md:gap-8 lg:gap-10">
        <div className="md:col-span-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/assets/images/logo.png" alt="logo" width={1000} height={1000} className="w-[202px] h-[56px] object-cover" />
          </Link>
          {/* <p className="text-base md:text-lg leading-[120%] text-[#616161] font-normal pt-4 md:pt-5 lg:pt-6">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit?</p> */}
          <p className="text-base md:text-lg leading-[120%] text-[#616161] font-normal pt-2"><strong className='text-[#131313]'>Email :</strong> <Link href="mailto:info@analyticsoccer.com" className='hover:font-semibold'>info@analyticsoccer.com</Link></p>

          <div className='pt-4 flex items-center gap-2'>
            <Link href="#">
            <span className='inline-flex border-[2px] border-[#5B6574] p-3 rounded-full '><Facebook /></span>
            </Link>
            <Link href="#">
            <span className='inline-flex border-[2px] border-[#5B6574] p-3 rounded-full '><Linkedin /></span>
            </Link>
            <Link href="#">
            <span className='inline-flex border-[2px] border-[#5B6574] p-3 rounded-full '><Twitter /></span>
            </Link>
            <Link href="#">
            <span className='inline-flex border-[2px] border-[#5B6574] p-3 rounded-full '><Instagram /></span>
            </Link>

          </div>
        </div>
        <div className="md:col-span-2">
          <h4 className="text-lg md:text-xl font-normal text-[#131313] leading-[120%] pb-4 md:pb-6 lg:pb-8">
            Useful Links
          </h4>
          <ul>
            <Link href="/services">
              <li className="text-base md:text-lg font-normal text-[#616161] leading-[120%] hover:underline hover:text-primary">Services</li>
            </Link>
            {/* <Link href="/about-us">
              <li className="text-base md:text-lg font-normal text-[#616161] leading-[120%] hover:underline hover:text-primary py-3 md:py-4">About Us</li>
            </Link> */}
            <Link href="/contact-us">
              <li className="text-base md:text-lg font-normal text-[#616161] leading-[120%] hover:underline hover:text-primary py-3 md:py-4">Contact Us</li>
            </Link>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h4 className="text-lg md:text-xl font-normal text-[#131313] leading-[120%] pb-4 md:pb-6 lg:pb-8">
            Other Links
          </h4>
          <ul>
            <Link href="/terms-of-use">
              <li className="text-base md:text-lg font-normal text-[#616161] leading-[120%] hover:underline hover:text-primary">Terms Of Use</li>
            </Link>
            <Link href="/privacy-policy">
              <li className="text-base md:text-lg font-normal text-[#616161] leading-[120%] hover:underline hover:text-primary py-3 md:py-4">Privacy Policy</li>
            </Link>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h4 className="text-lg md:text-xl font-semibold leading-[120%] text-[#2A2A2A] pb-4 md:pb-6 lg:pb-8">Subscribe To Our <span className="text-primary">NEWSLETTER</span></h4>
          <p className="text-base md:text-lg leading-[120%] text-[#616161] font-normal">Connect with us on social media and <br /> stay in the loop :</p>
          <div>
            <NewsletterSubscribe />
          </div>
        </div>


      </div>
      {/* footer bottom  */}
      <p className="container text-base md:text-lg font-normal text-center text-[#929292] leading-[120%] py-4 border-t border-[#8E959F]">@ {new Date().getFullYear()}. All Rights Reserved</p>
    </div>
  )
}

export default Footer