import React from 'react'

const ContactHero = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url("/assets/images/contact-hero.jpg")` }}
                className="relative min-h-[348px] w-full bg-black/50 flex flex-col items-center justify-center bg-cover bg-no-repeat bg-center px-4 md:px-0">
                     <div className="absolute bg-[#0000007A]"></div>
                <h1 className='text-3xl md:text-4xl lg:text-[48px] text-white font-normal leading-[120%] text-center'>Contact Analytic Soccer</h1>
                <p className='text-base lg:text-lg text-[#E7E7E7] font-normal leading-[150%] text-center pt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br className='hidden md:block'/> Lorem Ipsum has been the industry&lsquo;s standard dummy text ever</p>
            </div>
        </div>
    )
}

export default ContactHero