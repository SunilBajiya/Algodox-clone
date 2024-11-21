import React from 'react';

const CtaSection = () => {
  return (
    <section className="cta-section pb-10 md:pb-20 lg:pb-40">
      <div className="container mx-auto">
        <div className="relative h-60 md:h-80 lg:h-96 bg-cover bg-no-repeat bg-center flex flex-col justify-center rounded-lg px-6 py-4 md:px-8 md:py-6 lg:px-12 lg:py-8" style={{ backgroundImage: 'url("https://reactdemo-envotek.soyonexpress.com/static/media/cta-bg.900813190ce68414195f.jpg")' }}>
          <div className="absolute inset-0 bg-blue-900 bg-opacity-70 backdrop-filter backdrop-lg rounded-lg"></div>
          <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-6 py-4 md:px-8 lg:px-12">
            <div className="contact-withus-content text-white font-bold md:pl-10 lg:pl-20 md:max-w-lg lg:max-w-xl">
              <h3 className="text-base md:text-lg lg:text-xl xl:text-3xl">Contact With Us. To Require <br/> a Detailed Analysis of Your <br/> Plan.</h3>
            </div>
            <div className="contact-withus-num flex flex-col items-end md:pr-10 lg:pr-20">
              <a href="/AboutUs" className="contact-number text-lg md:text-xl lg:text-2xl  xl:text-3xl text-white font-semibold mb-4 md:mb-0">+91-9571144478</a>
              <a 
                href="/ContactUs" 
                className="inline-block px-4 py-2 md:px-6 md:py-3 text-lg md:text-xl lg:text-2xl xl:text-3xl mt-3 md:mt-0 inline-flex items-center justify-center w-36 md:w-auto h-12 md:h-14 text-white bg-red-500 border-2 border-red-500 rounded-md hover:text-red-500 hover:bg-transparent hover:border-solid transition duration-300 ease-in-out"
              >
                <span className='font-semibold  text-xl'>Contact Today</span>
                <span className="ml-2">&#xBB;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
