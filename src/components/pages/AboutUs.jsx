import React from 'react'
import Footer from "../Footer"
import TeamSection from '../Section/TeamSection';
import CtaSection from '../Section/CtaSection';
import PartnerSection from '../Section/PartnerSection'
import AboutUsSection from '../Section/AboutUsSection';
import AboutInfoSection from '../Section/AboutInfoSection'

function AboutUs() {
  return (
    <>
<div className="relative h-40 md:h-60 lg:h-80 bg-cover bg-no-repeat flex items-center justify-center text-center" style={{ backgroundImage: "url('https://reactdemo-envotek.soyonexpress.com/static/media/hero-bg.f85b4ea749dce501d7d0.jpg')" }}>
  <div className="absolute inset-0 bg-purple-900 bg-opacity-50 backdrop-blur-lg"></div>
  <div className="relative z-10 p-6 md:p-10">
    <h1 className="text-2xl md:text-4xl text-white font-bold mb-4">About Us</h1>
  </div>
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
    <a className="inline-block px-4 py-2 md:px-6 md:py-3 bg-red-500 text-white rounded-md hover:bg-red-700 transition duration-300 ease-in-out" href="/">
      Home<span className="ml-2">&#xBB;</span> About
    </a>
  </div>
</div>
<AboutUsSection />
<AboutInfoSection />
 <PartnerSection />
 <TeamSection />
 <CtaSection />
<Footer />
</>
  );
}

export default AboutUs