import React from 'react'

function AboutExSection() {
  return (
<section className="about-us pt-20 pb-20">
  <div className="container mx-auto px-4 md:px-0">
    <div className="flex flex-wrap items-center">
      <div className="w-full md:w-1/2">
        <div className="relative">
          <img src="https://reactdemo-envotek.soyonexpress.com/static/media/about-img1.a95eaffd1f27bd255ddd.jpg" alt="About Image" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute top-0 left-0 p-4">
            <div className="bg-red-500 h-2 w-2 rounded-full"></div>
          </div>
          <div className="absolute top-0 left-0 p-4 text-4xl font-bold text-white">25+</div>
          <img src="https://reactdemo-envotek.soyonexpress.com/static/media/about-img2.486724031d9be34353e4.jpg" alt="About Image" className="absolute bottom-0 right-0 w-1/2 h-1/2 object-cover rounded-lg" />
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="about-us-content">
          <div className="section-title">
            <span>About Us</span>
            <h2 className="text-3xl font-bold">We are the best world IT Company. More than 25 years of experience.</h2>
          </div>
          <p className="text-lg">It has survived not only five centuries, but also the leap into electroni typesetting, remaining essentially unchanged. It was popularised the 1960s with the release and more recent.</p>
          <blockquote className="text-lg italic">It has survived not only five centuries, but also the leap into the typesetting, remaining essentially unchanged. It was popular of the release and more recent.</blockquote>
          <p className="text-lg">It has survived not only five centuries, but also the leap into electroni typesetting, remaining essentially unchanged. It was popularised the 1960s with the release and more recent.</p>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

export default AboutExSection