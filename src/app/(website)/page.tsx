import React from 'react'
import { HeroSection } from './_components/hero-section'
import { MissionSection } from './_components/mission-section'
import { OfferingsSection } from './_components/offerings-section'
import { AnalyticsProcessSection } from './_components/analytics-process-section'
import { PricingSection } from './_components/pricing-section'
import { FAQSection } from './_components/faq-section'

const HomePage = () => {
    return (
        <div>
            <>
                <HeroSection />
                <MissionSection />
                <OfferingsSection />
                <AnalyticsProcessSection />
                <PricingSection />
                <FAQSection />
            </>
        </div>
    )
}

export default HomePage