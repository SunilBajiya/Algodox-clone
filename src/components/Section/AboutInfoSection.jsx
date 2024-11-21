import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck} from '@fortawesome/free-solid-svg-icons';
import { FaPlay } from 'react-icons/fa';

function AboutInfoSection() {
  return (
    <div className="relative pt-10 pl-12 pb-10" >
      <div className="container mx-auto px-12 relative z-6 pt-20">
      <div className=" overflow-hidden relative mb-5">
  <img
    className="img__full rounded-xl cursor-pointer transform hover:scale-110 transition duration-500 ease-in-out"
    src="https://reactdemo-envotek.soyonexpress.com/static/media/about-chooseus-img.dc8340124bc142ffbd63.jpg"
    alt="image"
  />
  <div className="absolute inset-0 bg-purple-900 opacity-50" style={{ filter: 'blur(10px)' }}></div>
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="absolute bottom-50 left-1/2 transform -translate-x-1/2 translate-y-1/2">
      <a className="inline-block px-4 py-2 md:px-5 md:py-3 bg-red-500 text-white rounded-md hover:bg-red-700 transition duration-300 ease-in-out" href="https://www.youtube.com/watch?v=9_Do2-X62rw">
        <div className="bg-white rounded p-4 shadow-lg">
          <FaPlay className="text-red-700 text-2xl" />
        </div>
      </a>
    </div>
  </div>
</div>

        <div className="flex flex-wrap -mx-4 pt-30 justify-center">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
              <div className="section-title mb-6">
                <h2 className="text-2xl font-bold">Some Reasons Why You<br/> Should Choose Us!</h2>
              </div>
              <div className="chooseus-list">
                <div className="flex flex-wrap -mx-4">
                  <div className="w-1/2 px-4 mb-4">
                    <ul className="list-none">
                      <li className="mb-2 flex items-center">
                      <div className='flex items-center bg-red-100 rounded p-1 mb-1'>
                        <FontAwesomeIcon icon={faCheck} className="text-red-500 mr-2" />
                         </div>    
                          Simplify Communication
                      </li>
                      <li className="mb-2 flex items-center">
                        <div className='flex items-center bg-red-100 rounded p-1 mb-1'>
                        <FontAwesomeIcon icon={faCheck} className="text-red-500 mr-2" />
                         </div>
                        Eliminate Repeat Entry
                      </li>
                    </ul>
                  </div>
                  <div className="w-1/2 px-4 mb-4">
                    <ul className="list-none">
                      <li className="mb-2 flex items-center">
                      <div className='flex items-center bg-red-100 rounded p-1 mb-1'>
                        <FontAwesomeIcon icon={faCheck} className="text-red-500 mr-2" />
                         </div>                        24/7 Customer Service
                      </li>
                      <li className="mb-2 flex items-center">
                      <div className='flex items-center bg-red-100 rounded p-1 mb-1'>
                        <FontAwesomeIcon icon={faCheck} className="text-red-500 mr-2" />
                         </div>                        Expert Team Members
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <blockquote className="mt-4 text-black font-semibold">
                It has survived not only five centuries, but also the leap into typesetting, remaining essentially unchanged. It was popular of the release and more recent.
              </blockquote>
              <p className="mt-4 text-gray-700">
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release and more recent.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">We are Creative &amp;  Professional <span className="block text-red-500">Our Mission And  <br/> Vision.</span></h2>
              <p className="mb-4 text-gray-700">
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release and more recent.
              </p>
              <p className="mb-4 text-gray-700">
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release and more recent.
              </p>
            
              <a
        className="mt-5 inline-flex items-center justify-center w-36 md:w-44 h-12 md:h-14 text-white bg-red-500 border-2 border-red-500 rounded-md hover:text-red-500 hover:bg-transparent hover:border-solid transition duration-300 ease-in-out"
        href="#"
      >
        <span> Read More</span>
        <span className="ml-2">&#xBB;</span>
      </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutInfoSection;
