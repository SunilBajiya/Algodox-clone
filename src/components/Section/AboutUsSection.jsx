import React from 'react';

const AboutUsSection = () => {
  return (
    <section className="about-us pt-20 md:pt-40  pl-16 lg:pt-20">
      <div className="container mx-auto">
        <div className="row flex flex-wrap items-center">
          <div className="col-lg-6 w-1/4 mb-8 md:mb-0">
            <div className="about-left relative">
              <div className="about-image pl-12">
                <img
                  src="https://reactdemo-envotek.soyonexpress.com/static/media/about-img1.a95eaffd1f27bd255ddd.jpg"
                  alt="About Image"
                  className="w-1/1 h-80 rounded"
                />
               <div className="absolute left-60 top-10  py-1   h-30 px-9 transform rotate-90">
                <h1 className="text-4xl text-red-700 font-bold">25+</h1>
                <h4 className='text-black font-semibold text-2xl'>Years Experience</h4>
              </div>

              </div>
              
              <div className="about-image-two  rounded py-6 pr-10  absolute left-60  top-40 w-full">
              
                <img
                  src="https://reactdemo-envotek.soyonexpress.com/static/media/about-img2.486724031d9be34353e4.jpg"
                  alt="About Image"
                  className="w-40 h-50 "
                />
                
              </div>
            </div>
          </div>
          <div className="col-lg-6 w-full lg:w-1/2  md:pl-10 lg:pl-40">
            <div className="about-us-content">
              <div className="section-title mb-6">
                <span className="text-red-400 text-xl">About Us</span>
                <h2 className="text-2xl font-semibold text-black">
                  We are the best world IT <br /> Company. More than 25 <br /> years of experience.
                </h2>
              </div>
              <p className="mb-4">
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised the 1960s with the release and more recent.
              </p>
              <blockquote className="mb-4 font-semibold">
                It has survived not only five centuries, but also the leap into the typesetting, remaining essentially
                unchanged. It was popular of the release and more recent.
              </blockquote>
              <p className="mb-4">
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised the 1960s with the release and more recent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
