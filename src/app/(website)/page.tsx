import React from 'react'
// import { MissionSection } from './_components/mission-section'
import { FAQSection } from './_components/faq-section'
import HeroSection from './_components/hero-section'
import OurPartners from './_components/our-partners'

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
                <FAQSection />
            </>
        </div>
    )
}

export default HomePage