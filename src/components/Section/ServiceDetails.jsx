import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaPlay } from 'react-icons/fa';

const ServiceDetails = () => {
  return (
    <section className="service-details pt-10 pb-10 md:pt-28 md:pb-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
            <div className="service-sidebar">
              <div className="sidebar-widget service-widget mb-8 bg-gray-200 rounded-xl p-4">
                <h4 className="text-2xl font-semibold mb-4 text-center py-4">All Services</h4>
                <ul>
                  {[
                    'Web Development',
                    'Data Management',
                    'Cyber Security',
                    'Software Development',
                    'Cloud Management'
                  ].map((service, index) => (
                    <li
                      key={index}
                      className="mb-4 py-3 border rounded-lg shadow-md bg-white hover:bg-red-700 hover:text-white transition duration-300"
                    >
                      <Link to="/service-details" className="font-semibold px-4 text-gray-600 block">
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sidebar-widget service-video-widget rounded text-center bg-cover h-80 bg-center p-8 relative cursor-pointer hover:bg-blue-500 transition duration-300" style={{ backgroundImage: 'url("https://reactdemo-envotek.soyonexpress.com/static/media/video-widget-bg.5670f0f06464c71af5f0.jpg")' }}>
                <div className="absolute inset-0 bg-blue-600 bg-opacity-50 rounded transition duration-300"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-4">
                  <a className="inline-block px-4 py-2 md:px-5 md:py-3 bg-red-500 text-white rounded-md hover:bg-red-700 transition duration-300 ease-in-out" href="https://www.youtube.com/watch?v=9_Do2-X62rw">
                    <FaPlay className="text-white text-2xl" />
                  </a>
                  <h4 className="text-white font-semibold text-2xl text-center">Have any project in <br /> your mind?</h4>
                  <a href="tel:+91-9571144478" className="text-red-400 mt-4 font-bold text-xl inline-block">
                    <FaPhoneAlt className='h-8 w-6 text-red-400 inline-block mr-2' />+91-7300093286
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/3 px-4">
            <div className="service-details-content">
              <div className="w-full h-auto overflow-hidden relative mb-8">
                <img
                  className="w-full rounded-xl cursor-pointer transform hover:scale-110 transition duration-500 ease-in-out"
                  src="https://reactdemo-envotek.soyonexpress.com/static/media/service-details.60df85d0434a99b7d480.jpg"
                  alt="service details"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    <a className="inline-block px-4 py-2 md:px-5 md:py-3 bg-red-500 text-white rounded-md hover:bg-red-700 transition duration-300 ease-in-out" href="https://www.youtube.com/watch?v=9_Do2-X62rw">
                      <div className="bg-white rounded p-4 shadow-lg">
                        <FaPlay className="text-red-700 text-2xl" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <h2 className="text-3xl font-semibold mb-4">IT Management Service</h2>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
              </p>
              <p className="font-bold mb-4">
                It has survived not only five centuries, but also the leap into typesetting, remaining essentially unchanged. It was popular in the release and more recent times. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <div className="work-part-content">
                <div className="flex flex-wrap -mx-4 mb-8">
                  <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                    <div className="work-content">
                      <h2 className="text-2xl font-semibold mb-4">How it works?</h2>
                      <p className="mb-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      </p>
                      <p className="mb-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      </p>
                      <p className="mb-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 px-4">
                    <div className="work-left">
                      <div className="work-image mb-4 cursor-pointer relative">
                        <img src="https://reactdemo-envotek.soyonexpress.com/static/media/work-img2.1a0010b52509b8be08da.png" alt="Work Image" className="w-80 h-90 rounded-md" />
                        <div className="work-image-two absolute top-1/2 transform -translate-y-1/2 left-40">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="text-2xl font-semibold mb-4">Help challenge critical activities</h2>
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                </p>
                <p className="font-bold mb-4">
                  It has survived not only five centuries, but also the leap into typesetting, remaining essentially unchanged. It was popular in the release and more recent times. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceDetails;
