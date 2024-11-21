import React from 'react';
import HomeSection from './Section/HomeSection';
import PartnerSection from './Section/PartnerSection';
import HomeBlogSection from './Section/HomeBlogSection';
import PartnerSection1 from './Section/PartnerSection1';
import ProjectSection from './Section/ProjectSection';
 import CtaSection from './Section/CtaSection';
 import TestimonialSection from './Section/TestimonialSection'
import Footer from  './Footer'
function Home() {
  return (
    <div>
<div
  className="hero relative h-60 min-h-screen bg-cover bg-no-repeat"
  style={{ backgroundImage: "url('https://reactdemo-envotek.soyonexpress.com/static/media/hero-bg.f85b4ea749dce501d7d0.jpg')" }}
>
  <div className="absolute inset-0 bg-purple-900 bg-opacity-50 backdrop-blur-lg"></div>
  <div className="hero-content relative flex flex-col h-full lg:px-32 py-20 md:py-40 px-6">
    <div className="absolute left-5 md:left-10 top-1/4 md:top-1/3 lg:pl-20">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-4 md:mb-10">
        IT Management <br />
        Service & Support <br />
        for Your Business.
      </h1>
      <p className="text-white font-bold text-lg md:text-xl mt-3 md:mt-5">
        Keep your business safe & ensure high availability.
      </p>
      <a
        className="mt-5 inline-flex items-center justify-center w-36 md:w-44 h-12 md:h-14 text-white bg-red-500 border-2 border-red-500 rounded-md hover:text-red-500 hover:bg-transparent hover:border-solid transition duration-300 ease-in-out"
        href="#"
      >
        <span>Find Solution</span>
        <span className="ml-2">&#xBB;</span>
      </a>
    </div>
  </div>
</div>

<HomeSection />
  <PartnerSection />
  <PartnerSection1 />
  <ProjectSection />
  <TestimonialSection />
  <CtaSection />
   <HomeBlogSection />
  <Footer />
  </div>
  
  );
}

export default Home;
