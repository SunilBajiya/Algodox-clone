import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faPlay, faSearch, faReply, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import CommentForm from '../Section/CommentForm'

library.add(faCalendarAlt, faPlay, faSearch, faReply, faArrowRight);

const BlogDetails = () => {
  return (
    <section className="py-5 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <aside className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-8 ">
              <form method="post" action="#" className="flex items-center border border-red-700 rounded hover:border-red-800">
        <input
          type="search"
          name="search-field"
          placeholder="Search here..."
          className="w-full p-2 bg-white border-b focus:ring-5 focus:outline-none"
        />
                  <button type="submit" className="p-2">
                    <FontAwesomeIcon icon="search" className="text-red-600" />
                  </button>
                </form>
              </div>
              <div className="mb-8 bg-red-100 px-3">
                <h4 className="text-lg font-semibold mb-4">Blog Category</h4>
                <h2 className=' border-b border-dotted border-red-500'></h2>
                <ul className="space-y-2 pt-3">
                  {['Web Design', 'Web Development', 'Graphic Design', 'Online Marketing', 'App Development'].map((category, index) => (
                    <li key={index} className="flex justify-between items-center pb-2">
                      <a href="/blog-details" className="text-gray-700 hover:text-blue-900 flex items-center">
                      <span className="text-red-600 ml-2 px-3">&#xBB;</span>
                        <span>{category}</span>
                      </a>
                      <span>{index * 10 + 22}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-8 bg-red-100 px-3">
                <h4 className="text-lg font-semibold mb-4">Archive Post</h4>
                <h2 className=' border-b pt-2 border-dotted border-red-500'></h2>
                <div className="space-y-4 pt-3">
                  {[1, 2, 3].map((_, index) => (
                    <div key={index} className="pb-2 border-b border-dotted border-gray-300">
                      <p className="text-sm text-red-500 mb-1 flex items-center">
                        <FontAwesomeIcon icon="calendar-alt" className="mr-2" /> 25 May 2024
                      </p>
                      <h6>
                        <a href="/blog-details" className="text-gray-700 hover:text-gray-900">
                          Duis autem eum iriure dolor emn hendrerit consequa vel illum eu feugiat nulla.
                        </a>
                      </h6>
                    </div>
                  ))}
                 
                </div>
              </div>
              <div className="relative bg-cover bg-center h-64 rounded-lg overflow-hidden transform transition-all duration-300 hero container max-w-screen-lg mx-auto  flex" style={{ backgroundImage: `url('https://reactdemo-envotek.soyonexpress.com/static/media/video-widget-bg.5670f0f06464c71af5f0.jpg')` }}>
                <a className="flex items-center justify-center w-full h-full bg-black bg-opacity-50" href="https://www.youtube.com/watch?v=9_Do2-X62rw" target="_blank" rel="noopener noreferrer">
                  <div className="bg-red-500 rounded p-3">
                    <FontAwesomeIcon icon="play" className="text-white text-4xl" />
                  </div>
                </a>
              </div>
            </div>
          </aside>
          <div className="w-full lg:w-2/3 px-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative bg-cover bg-center h-64 rounded-lg overflow-hidden transform transition-all duration-300" style={{ backgroundImage: `url('https://reactdemo-envotek.soyonexpress.com/static/media/blog-details1.cafae623e26e58fadc8d.jpg')` }}>
                <div className="absolute bottom-4 left-4 bg-red-500 text-white px-2 py-2 rounded shadow-md">
                  <span className="font-semibold text-lg">22<br/> June</span>
                </div>
              </div>
              <h3 className="text-2xl py-7 font-bold mb-4">The Best IT Practices in Cloud And Security.</h3>
              <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ustry's standard dummy text ever since the 1500s, when an unknown printer took and galley of scrambled it to make a type specimen book. It has survived not only five centuries, but also the electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with Letraset sheets containing Lorem Ipsum passages.</p>
              <p className="p-4  mb-4">
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged. It was popular in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
              </p>
              <div className="mb-4">
                <img src="https://reactdemo-envotek.soyonexpress.com/static/media/blog-details2.79984dab67b0aeae834d.jpg" alt="Blog Details Image Two" className="w-full rounded-lg  cursor-pointer " />
              </div>
              <p className="mb-4 py-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
              <p className=" p-1  mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <h3 className="text-2xl py-7 font-bold mb-4">Help challenge critical activities</h3>
              <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
              <div className="mb-8 bg-red-100 rounded-md p-4">
                <ul className="flex flex-wrap space-x-2 justify-center">
                  <li className="text-red-700">Tags:</li>
                  <li><a href="/blog-details" className="text-black-500 ">Medical</a></li>
                  <li><a href="/blog-details" className="text-black-500 ">Doctors</a></li>
                  <li><a href="/blog-details" className="text-black-500 ">Therapy</a></li>
                </ul>
              </div>
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4">Comments</h4>
                <div className="space-y-6">
                  <div className="flex space-x-4">
                    <img src="https://reactdemo-envotek.soyonexpress.com/static/media/commenter1.2a7dd896de4ea5d566ea.jpg" alt="Mayra Bolin" className="w-12 h-12 rounded" />
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <h5 className="font-semibold">Mayra Bolin</h5>
                          <span className="text-gray-500">Web Developer</span>
                          <br />
                          <span style={{fontSize:12 }} className="text-gray-500">2 week ago</span>

                        </div>
                        <a href="/blog-details" className="text-red-500  flex items-center">
                          <FontAwesomeIcon icon="reply" className="text-red-500 mr-2" />
                          Reply
                        </a>
                      </div>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                  </div>
                  <div className="flex space-x-4 pl-12">
                    <img src="https://reactdemo-envotek.soyonexpress.com/static/media/commenter2.8afe1226010c5bceda55.jpg" alt="Rafaela Levy" className="w-12 h-12 rounded" />
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <h5 className="font-semibold">Rafaela Levy</h5>
                          <span className="text-gray-500">Web Developer</span>
                          <br />
                          <span style={{fontSize:12 }} className="text-gray-500">1 week ago</span>

                        </div>
                        <a href="/blog-details" className="text-red-500  flex items-center">
                          <FontAwesomeIcon icon="reply" className="text-red-500 mr-2" />
                          Reply
                        </a>
                      </div>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-semibold mb-4">Leave A Comment</h4>
              <CommentForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
