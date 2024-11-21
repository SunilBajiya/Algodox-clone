import React from 'react';
import Slider from 'react-slick';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      image: 'https://reactdemo-envotek.soyonexpress.com/static/media/testimonial1.840502c6e266e3db0af9.png',
      name: 'Ronnie Aguilar',
      occupation: 'Web Developer',
      testimonial: 'It has survived not only five centuries, but also the leap into typesetting, remaining essentially unchanged. It popular of the release and more recent five and centurbut also these tesetng remaining essentially.'
    },
    {
      id: 2,
      image: 'https://reactdemo-envotek.soyonexpress.com/static/media/testimonial2.ce46002eed645a5b22a2.png',
      name: 'Darla Harmon',
      occupation: 'UX Designer',
      testimonial: 'It has survived not only five centuries, but also the leap into typesetting, remaining essentially unchanged. It popular of the release and more recent five and centurbut also these tesetng remaining essentially.'
    },
    {
      id: 3,
      image: 'https://reactdemo-envotek.soyonexpress.com/static/media/testimonial1.840502c6e266e3db0af9.png',
      name: 'Ronnie Aguilar',
      occupation: 'Web Developer',
      testimonial: 'It has survived not only five centuries, but also the leap into typesetting, remaining essentially unchanged. It popular of the release and more recent five and centurbut also these tesetng remaining essentially.'
    },
    {
      id: 4,
      image: 'https://reactdemo-envotek.soyonexpress.com/static/media/testimonial2.ce46002eed645a5b22a2.png',
      name: 'Darla Harmon',
      occupation: 'UX Designer',
      testimonial: 'It has survived not only five centuries, but also the leap into typesetting, remaining essentially unchanged. It popular of the release and more recent five and centurbut also these tesetng remaining essentially.'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '90',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
    ]
  };

  return (
    <section className="testimonial-section pb-20">
      <div className="container px-1 md:px-0"> {/* Added px-1 for smaller devices */}
        <div className="section-title text-center mb-10">
          <span className="text-red-600 text-xl">Testimonial</span>
          <h2 className="font-bold text-3xl py-3">What People Say About Our Company Services.</h2>
        </div>
        <div className="testimonial-wrap pl-20">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-3  testimonial-item mx-auto">
                <div className="quotation-img pt-5 pl-2  mx-auto">
                  <img className='pt-7' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAsCAYAAAA5KtvpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2ZWJkOWRhMy03ZGQyLTdiNGEtODJjNi1mZjg3YmUzOWQ2YWMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0REQTMzRUEwNjA2MTFFQkIyNjlBM0E2MTUwNzRBMDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0REQTMzRTkwNjA2MTFFQkIyNjlBM0E2MTUwNzRBMDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDU0M2E3NzAtNTBhNC1jMzQ4LWI3NWEtM2FkNmUwYTgxNTQ4IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YTk5YmQxNTQtMmViNC0xMWU4LTgwZTEt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" alt="" />
                </div>
                <div className="testimonial-inner bg-red-200 rounded-xl p-8">
                  <div className="testimonial-content">
                    <p>{testimonial.testimonial}</p>
                  </div>
                </div>
                
                <div className="testimonial-imgbox flex items-center mt-4">
                  <div className="testimonial-img rounded-full overflow-hidden w-20 h-20 mr-4">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="testimonial-imgdetails flex flex-col">
                    <h5 className="mb-1 font-bold">{testimonial.name}</h5>
                    <span>{testimonial.occupation}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
