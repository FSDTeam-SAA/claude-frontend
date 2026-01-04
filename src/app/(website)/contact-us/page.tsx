import React from 'react'
import ContactHero from './_components/contact-hero'
// import ActivateYourProfile from './_components/activate-your-profile'
import ContactInformation from './_components/contact-information'
import BuyYourDataNow from './_components/buy-your-data-now'

const ContactUsPage = () => {
  return (
    <div>
      <ContactHero/>
      <ContactInformation/>
      <BuyYourDataNow/>
      {/* <ActivateYourProfile/> */}
    </div>
  )
}

export default ContactUsPage