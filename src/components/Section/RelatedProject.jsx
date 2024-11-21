import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons';

const RelatedProject = () => {
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
      image: "https://reactdemo-envotek.soyonexpress.com/static/media/project4.a407b876ec1ce6edf28f.jpg",
      title: "UI/UX Design Strategy"
    }
  ];

  return (
    <div className="related-project px-4 md:px-14">
      <h2 className="text-2xl font-semibold mb-4">Related Project</h2>
      <div className="row flex flex-wrap -mx-4">
        {projectDetails.map((project, index) => (
          <div className="col-lg-4 col-md-6 px-4 mb-8" key={index}>
            <div className="project-item bg-white shadow-lg rounded-lg overflow-hidden relative">
              <div className="project-image relative cursor-pointer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full hover:blur-sm transition-blur duration-300"
                />
                <div className="project-title absolute inset-0 bg-blue-700 bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2 p-4">
                  <FontAwesomeIcon icon={faPlus} className="text-white text-3xl" />
                </div>
              </div>
              <div className='py-1'></div>
              <div className="project-content p-7 hover:bg-red-400 hover:text-white transition-colors duration-300 bg-red-100">
                <h5 className="mt-2 font-semibold ">
                  <a href="/project-details" className="bg-white text-red-500 p-2 rounded  px-3 ">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                  <span className="text-white font-semibold text-lg">{project.title}</span>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProject;
