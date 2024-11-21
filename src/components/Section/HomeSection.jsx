import React from 'react';

const HomeSection = () => {
  return (
    <section className="service-section pt-28 pb-24">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-red-600 text-lg">Our Services</span>
          <h2 className="text-3xl font-bold">
            Choose Service For<br /> Manage Your Business
          </h2>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-2/3 xl:w-3/4 flex flex-wrap">
            {/* IT Management Services in one row */}
            
            {/* Other services in the next row */}
            {services.slice(0).map((service, index) => (
              <div className="w-full  cursor-pointer  sm:w-1/2 p-4 " key={index}>
                <div className="service-item bg-white p-6 rounded-lg shadow-lg relative overflow-hidden group">
                  <div className="absolute inset-0 bg-red-500 opacity-20 transition-all duration-500 group-hover:opacity-100 group-hover:bg-gradient-to-r from-red-500 via-red-500 to-transparent"></div>
                  <div className="relative z-10 flex items-center space-x-4">
                    <div className="serv-iconimg mb-4">
                      <i className={`fas ${service.icon} text-4xl text-red-500 transition-all duration-500 group-hover:text-white`}></i>
                    </div>
                    <div className="serv-content ">
                      <h5 className="text-xl  font-medium">
                        <a href="/service-details">{service.title}</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-1/3 xl:w-1/4 p-4">
            <div
              className="service-img relative bg-cover bg-center h-96 rounded-lg shadow-lg"
              style={{
                backgroundImage:
                  "url('https://reactdemo-envotek.soyonexpress.com/static/media/service-img.fb40a742470405488b26.jpg')",
              }}
            >
              <div className="absolute bottom-0 w-full text-center pb-5 px-14">
                <a
        className="mt-5 inline-flex items-center justify-center w-36 md:w-44 h-12 md:h-14 text-white bg-red-500 border-2 border-red-500 rounded-md hover:text-red-500 hover:bg-transparent hover:border-solid transition duration-300 ease-in-out"
        href="#"
      >
        <span>More Services</span>
        <span className="ml-2">&#xBB;</span>
      </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const services = [
  { title: 'IT Management Services', icon: 'fa-cogs' },
  { title: 'Backup & Data Recovery', icon: 'fa-database' },
  { title: 'Cloud Managed Services', icon: 'fa-cloud' },
  { title: 'Cyber Security Services', icon: 'fa-shield-alt' },
  { title: 'Software Development', icon: 'fa-code' },
  { title: 'Big Data And Analytics', icon: 'fa-chart-bar' },
];

export default HomeSection;
