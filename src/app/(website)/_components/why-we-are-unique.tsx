import { Award, CircleCheckBig, Database, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const WhyWeAreUnique = () => {
    return (
        <div className='py-6 md:py-10 lg:py-16'>
            <div className='container'>
                <h3 className='text-3xl md:text-4xl lg:text-[48px] text-[#131313] font-normal leading-[120%] text-center'>Why We&lsquo;re Unique</h3>
                <p className='text-sm md:text-base text-[#616161] font-normal leading-[120%] py-4 md:py-5 text-center'>Analytic Soccer is the first platform to deliver all of this, giving amateur players the same digital tools and data identity that professionals use.</p>
                <p className='text-sm md:text-base text-[#131313] font-normal leading-[150%]  text-center'>There is no global, centralized data platform where amateur players can :</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6 md:py-10 lg:py-12'>

                    <div className='md:col-span-1 flex flex-col items-center rounded-[16px] p-4 border border-[#B6B6B6)] group hover:bg-primary transition'>
                        <div className='flex flex-col items-start'>
                            <div className='bg-[#E6F4E6] rounded-[8px] p-5 inline-flex' >

                                <Database className='text-primary' />
                            </div>
                            <h4 className='text-sm lg:text-base font-normal text-[#0A1628] group-hover:text-white leading-[120%] py-3 md:py-4'>Access verified performance data</h4>
                            <p className='text-sm font-normal text-[#616161] group-hover:text-white leading-[150%]'>Every stat, every match, every achievement verified and recorded in one place. No morescattered records or lost history. </p>
                        </div>
                    </div>
                    <div className='md:col-span-1 flex flex-col items-center rounded-[16px] p-4 border border-[#B6B6B6)] group hover:bg-primary transition'>
                        <div className='flex flex-col items-start'>
                            <div className='bg-[#E6F4E6] rounded-[8px] p-5 inline-flex' >

                                <Award className='text-primary' />
                            </div>
                            <h4 className='text-sm lg:text-base font-normal  text-[#0A1628] group-hover:text-white leading-[120%] py-3 md:py-4'>Receive objective ratings</h4>
                            <p className='text-sm font-normal text-[#616161] group-hover:text-white leading-[150%]'>Get rated based on real performance metrics, not opinions. Fair, transparent, and comparable across regions</p>
                        </div>
                    </div>
                    <div className='md:col-span-1 flex flex-col items-center rounded-[16px] p-4 border border-[#B6B6B6)] group hover:bg-primary transition'>
                        <div className='flex flex-col items-start'>
                            <div className='bg-[#E6F4E6] rounded-[8px] p-5 inline-flex' >

                                <TrendingUp className='text-primary' />
                            </div>
                            <h4 className='text-sm lg:text-base font-normaltext-[#0A1628] group-hover:text-white leading-[120%] py-3 md:py-4'>Track their career progression and transfer history</h4>
                            <p className='text-sm font-normal text-[#616161] group-hover:text-white leading-[150%]'>Track your entire football journey. Every club, every season, every progression milestone documented.</p>
                        </div>
                    </div>


                </div>

                <div className="p-6 shadow-[0px_4px_16px_0px_#00000029] rounded-[16px]  grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 lg:gap-16">
                    <div className='md:col-span-2 '>
                        <Image src="/assets/images/why-we-are-unique.jpg" alt="why-we-uniqe" width={500} height={500} className="object-cover rounded-[8px] h-[350px] md:h-[400px] lg:h-[460px] w-full" />
                    </div>

                    <div className='md:col-span-3 h-full flex flex-col justify-center border-2 border-red-500'>
                        <h4 className='text-2xl md:text-3xl lg:text-4xl text-[#131313] font-normal leading-[120%]'>Why you need verified data from us ?</h4>
                        <p className='text-base md:text-lg text-[#131313] leading-[120%] font-normal py-4 md:py-5'>Key Advantages</p>
                        <ul>
                            <li className='flex items-center gap-2 text-sm md:text-base text-[#616161] leading-[150%] font-normal'><CircleCheckBig className="text-primary" />Trusted Data Source</li>
                            <li className='flex items-center gap-2 text-sm md:text-base text-[#616161] leading-[150%] font-normal py-4 '><CircleCheckBig className="text-primary" />Standardized Evaluation</li>
                            <li className='flex items-center gap-2 text-sm md:text-base text-[#616161] leading-[150%] font-normal'><CircleCheckBig className="text-primary" />Transparency & Fairness</li>
                            <li className='flex items-center gap-2 text-sm md:text-base text-[#616161] leading-[150%] font-normal py-4'><CircleCheckBig className="text-primary" />Verified Performance Profile</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WhyWeAreUnique