import React from 'react'
import OurGrowthStory from './_components/our-growth-story'
import MeetOurCertified from './_components/meet-our-certified'
import AnalyticSoccer from './_components/analytic-soccer'
import OurPromiseToYou from './_components/our-promise-to-you'
import ActivateYourProfile from '../contact-us/_components/activate-your-profile'
import MeetOurAnalyticsMember from './_components/meet-our-analytics-member'

const AboutUsPage = () => {
  return (
    <div>
      <AnalyticSoccer/>
      <OurGrowthStory/>
      <ActivateYourProfile/>
      <MeetOurAnalyticsMember/>
      <MeetOurCertified/>
      <OurPromiseToYou/>
    </div>
  )
}

export default AboutUsPage