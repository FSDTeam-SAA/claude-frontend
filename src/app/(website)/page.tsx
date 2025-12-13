import React from 'react'
// import { MissionSection } from './_components/mission-section'
import HeroSection from './_components/hero-section'
import OurPartners from './_components/our-partners'
import { FaqSection } from './_components/faq-section'

const HomePage = () => {
    return (
        <div>
            <>
                <HeroSection />

                {/* <MissionSection /> */}
                {/* <OfferingsSection />
                <AnalyticsProcessSection />
                <PricingSection /> */}
                <OurPartners/>
                <FaqSection />
            </>
        </div>
    )
}

export default HomePage