import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
 import RelatedProject from './RelatedProject'
 import { FaPhoneAlt, FaPlay } from 'react-icons/fa';

library.add(faPlay, faArrowRight);
 
const ProjectDetails = () => {
  return (
    <>
    <section className="project-details-content pt-12 pb-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="project-details-content-inner">
        <div className="project-details-image w-full max-w-2xl mx-auto mb-8 px-6">
              <img
                src="https://reactdemo-envotek.soyonexpress.com/static/media/project-details.de87428cfeb62653011b.jpg"
                alt="Project Details Image"
                className="w-full h-70 rounded-lg object-cover"
              />
            </div>

            <div className="project-info-box bg-red-100 p-6 rounded-xl mb-8 lg:pl-60">
            <div className="row flex flex-wrap -mx-4">
              <div className="col-full md:col-1/3 px-4 mb-4 md:mb-0">
                <div className="project-info-text">
                  <h4 className="text-xl font-semibold">Project<br /> Information</h4>
                </div>
              </div>
              <div className="col-full md:col-1/3 lg:offset-1 px-4 mb-4 md:mb-0">
                <div className="client-content">
                  <ul className="space-y-2">
                    <li><span className="text-red-500 font-semibold">Clients: </span>Marian Crant</li>
                    <li><span className="text-red-500 font-semibold">Category: </span>Data Management</li>
                    <li><span className="text-red-500 font-semibold">Date: </span>26 June 2024</li>
                  </ul>
                </div>
              </div>
              <div className="col-full md:col-1/3 px-4 py-5 md:py-0">
                <div className="client-content">
                  <ul className="space-y-2">
                    <li>
                      <span className="text-red-500 font-semibold">Website: </span>
                      <a href="https://www.algodox.co.in" className="text-blue-500 hover:underline">www.algodox.co.in</a>
                    </li>
                    <li><span className="text-red-500 font-semibold">Location: </span>Jaipur</li>
                    <li><span className="text-red-500 font-semibold">Duration: </span>04 months</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">The Best IT Practices in Cloud And Security</h2>
          <p className="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
          </p>
          <p className="text-black-900 p-4 rounded-lg mb-4">
            It has survived not only five centuries, but also the leap into the typesetting, remaining essentially unchanged. It was popularised and more recent. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <p className="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
          </p>
          <div className="project-result-area mb-8">
            <div className="row flex flex-wrap -mx-4">
              <div className="col-lg-7 w-1/2 px-4 mb-8 lg:mb-0">
                <div
                  className="project-result-video bg-cover bg-center h-64  rounded-lg overflow-hidden flex items-center justify-center"
                  style={{ backgroundImage: `url('https://reactdemo-envotek.soyonexpress.com/static/media/project-result1.2b2c3bdc79049008d804.jpg')` }}
                >
                   <a className="inline-block px-4 py-2 md:px-5 md:py-3 bg-red-500 text-white rounded-md hover:bg-red-700 transition duration-300 ease-in-out" href="https://www.youtube.com/watch?v=9_Do2-X62rw">
                  <FaPlay className="text-white text-2xl" />
                  </a>
                </div>
              </div>
              <div className="col-lg-5 px-4">
                <div className="project-result-image">
                  <img
                    src="https://reactdemo-envotek.soyonexpress.com/static/media/project-result2.35d96600da5af3c0f4bb.jpg"
                    alt="Project Result Image"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Project Result & Benefits of Project</h2>
          <p className="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
          </p>
          <p className="bg-gray-100 p-4 rounded-lg mb-4">
            It has survived not only five centuries, but also the leap into the typesetting, remaining essentially unchanged. It was popularised and more recent. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>
    </section>

    <RelatedProject />
 </>
  );
};

export default ProjectDetails;
