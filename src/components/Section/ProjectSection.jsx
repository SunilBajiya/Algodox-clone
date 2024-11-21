import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const ProjectSection = () => {
  const projectDetails = [
    {
      image: "https://reactdemo-envotek.soyonexpress.com/static/media/project1.8768dc6523f76fdd0158.jpg",
      title: "IT Management Services"
    },
    {
      image: "https://reactdemo-envotek.soyonexpress.com/static/media/project2.af753172c9c8226ffbe8.jpg",
      title: "Branding Development"
    },
    {
      image: "https://reactdemo-envotek.soyonexpress.com/static/media/project3.a21848be21b7c3429785.jpg",
      title: "Technology Prototyping"
    },
    {
      image: "https://reactdemo-envotek.soyonexpress.com/static/media/project4.a407b876ec1ce6edf28f.jpg",
      title: "UI/UX Design Strategy"
    }
  ];

  return (
    <div className="related-project px-20 py-7 md:px-14">
 <div className="text-center mb-10">
          <span className="text-red-600">Success Stories</span>
          <h2 className="text-3xl font-bold">
            Successfully Complete <br /> All Case of Clients.
          </h2>
        </div>    
          <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-2/3 flex flex-wrap">
          {projectDetails.map((project, index) => (
            <div className="w-full md:w-1/2 px-4 mb-8" key={index}>
              <div className="project-item bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="project-image relative cursor-pointer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full"
                  />
                </div>
                <div className='py-1'></div> 
                <div className="project-content p-7 hover:bg-red-400 bg-red-100">
                  <h5 className="mt-2 font-semibold flex items-center space-x-2">
                    <a href="/project-details" className="bg-white text-red-500 p-2 rounded px-3">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                    <span className="text-black font-semibold text-lg">{project.title}</span>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/3 px-9">
  <div className="project-item h-full relative group cursor-pointer">
    <img className="w-full h-60 lg:h-full object-cover" src="https://reactdemo-envotek.soyonexpress.com/static/media/project5.003bed1ebcf2538144d4.jpg" alt="Product Consultation." />
    <div className="absolute bg-red-200  hover:bg-red-400 bottom-7 left-0 w-full bg-white bg-opacity-75 py-12 flex items-center justify-between">
    <a href="/project-details" className="bg-white text-red-500  p-2 rounded px-3 left-6">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </a>      
       <h5 className="text-black  text-2xl font-semibold mb-0">Product Consultation.</h5>
      <a className="text-red-500" href="/project-details">
      </a>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};


export default ProjectSection;