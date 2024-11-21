import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faPlay, faCheck, faArrowRight);

const AboutChooseUsSection = () => {
  return (
    <section className="bg-cover bg-center" style={{ backgroundImage: 'url("https://reactdemo-envotek.soyonexpress.com/static/media/about-chooseus-img.dc8340124bc142ffbd63.jpg")' }}>
      <div className="absolute inset-0 bg-blue-900 opacity-50" style={{ filter: 'blur(10px)' }}></div>
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <a className="video-play mfp-iframe inline-block rounded-full border-4 border-red-500 p-4" href="https://www.youtube.com/watch?v=aFWhf2wjJYo&list=PLUoqTnNH-2XxOt7UsKlTqbfrA2ucGosCR">
              <FontAwesomeIcon icon={faPlay} className="text-white text-4xl md:text-5xl lg:text-6xl" />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
              <div className="section-title mb-6">
               <h2 className="text-2xl font-bold">Some Reason Why You Should Choose Us!</h2>
              </div>
              <div className="chooseus-list">
                <div className="flex flex-wrap -mx-4">
                  <div className="w-1/2 px-4 mb-4">
                    <ul className="list-none">
                      <li className="mb-2 flex items-center">
                        <FontAwesomeIcon icon={faCheck} className="text-red-500 mr-2" />
                        Simplify Communication
                      </li>
                      <li className="mb-2 flex items-center">
                        <FontAwesomeIcon icon={faCheck} className="text-red-500 mr-2" />
                        Eliminate Repeat Entry
                      </li>
                    </ul>
                  </div>
                  <div className="w-1/2 px-4 mb-4">
                    <ul className="list-none">
                      <li className="mb-2 flex items-center">
                        <FontAwesomeIcon icon={faCheck} className="text-red-500 mr-2" />
                        24/7 Customer Service
                      </li>
                      <li className="mb-2 flex items-center">
                        <FontAwesomeIcon icon={faCheck} className="text-red-500 mr-2" />
                        Expert Team Members
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <blockquote className="mt-4 text-gray-700">
                It has survived not only five centuries, but also the leap into typesetting, remaining essentially unchanged. It was popular of the release and more recent.
              </blockquote>
              <p className="mt-4 text-gray-700">
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release and more recent.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">We are Creative &amp; Professional <span className="block text-red-500">Our Mission And Vision.</span></h2>
              <p className="mb-4 text-gray-700">
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release and more recent.
              </p>
              <p className="mb-4 text-gray-700">
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release and more recent.
              </p>
              <a className="btn theme-btn bg-red-500 text-white py-2 px-4 rounded inline-flex items-center hover:bg-red-700 transition duration-300 ease-in-out" href="/about">
                Read More
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutChooseUsSection;