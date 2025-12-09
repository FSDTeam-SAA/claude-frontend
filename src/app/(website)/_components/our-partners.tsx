"use client"
import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { Star } from "lucide-react";

import Image from 'next/image'
import Autoplay from "embla-carousel-autoplay";

const OurPartners = () => {

    const ourPartnersImg = [
        "/assets/our-partners/op1.png",
        "/assets/our-partners/op2.png",
        "/assets/our-partners/op3.png",
        "/assets/our-partners/op4.png",
        "/assets/our-partners/op5.png",
        "/assets/our-partners/op6.png",
        "/assets/our-partners/op7.png",
        "/assets/our-partners/op8.png",
        "/assets/our-partners/op9.png",
        "/assets/our-partners/op10.png",

    ]
    return (
        <div className="py-6 md:py-10 lg:py-16">
            <div className="container">
                <h4 className='text-2xl md:text-4xl lg:text-[48px] text-center font-normal leading-[120%] text-[#131313]'>Our Partners</h4>
                <p className='text-sm lg:text-base text-[#616161] leading-[150%] text-center font-nnormal pt-4'>Don&lsquo;t just take our word for it. Here&lsquo;s what real customers have to say about <br /> their AutoIntel inspection experience.</p>

                <div className="py-6 md:py-10 lg:py-14">
                    <Carousel plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full">
                        <CarouselContent>
                            {
                                ourPartnersImg?.map((item, index) => {
                                    return <CarouselItem key={index} className="basis-1/2 md:basis-[14.28%] lg:basis-[12.5%]">
                                        <Image src={item} alt="our partners image" width={200} height={200} className='object-contain w-full h-[85px]' />
                                    </CarouselItem>
                                })
                            }
                        </CarouselContent>
                    </Carousel>
                </div>

                {/* ratings  */}
                <div className="bg-[#424242] rounded-[8px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                    <div className="md:col-span-1">
                        <h4 className="text-2xl md:text-[28px] lg:text-[32px] font-normal text-white leading-[120$] text-center">1000+</h4>
                        <p className="text-base lg:text-lg font-normal text-[#E7E7E7] leading-[120%] text-center pt-2">Happy Customers</p>
                    </div>
                     <div className="md:col-span-1">
                        <h4 className="flex items-center justify-center gap-1 text-2xl md:text-[28px] lg:text-[32px] font-normal text-white leading-[120$] text-center">4.9 <Star className="fill-[#FBBF24] text-[#FBBF24]"/></h4>
                        <p className="text-base lg:text-lg font-normal text-[#E7E7E7] leading-[120%] text-center pt-2">Average Rating</p>
                    </div>
                     <div className="md:col-span-1">
                        <h4 className="text-2xl md:text-[28px] lg:text-[32px] font-normal text-white leading-[120$] text-center">98%</h4>
                        <p className="text-base lg:text-lg font-normal text-[#E7E7E7] leading-[120%] text-center pt-2">Would Recommend</p>
                    </div>
                     <div className="md:col-span-1">
                        <h4 className="text-2xl md:text-[28px] lg:text-[32px] font-normal text-white leading-[120$] text-center">1000%</h4>
                        <p className="text-base lg:text-lg font-normal text-[#E7E7E7] leading-[120%] text-center pt-2">Report Analytics</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OurPartners