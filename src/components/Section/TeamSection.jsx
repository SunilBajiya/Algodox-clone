import React from 'react';

const TeamSection = () => {
  return (
    <section className="team-section pt-28 pb-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-lg text-red-500">Team Members</span>
          <h2 className="text-3xl font-semibold">Our Professional Team<br/> Members</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              name: 'Sharyl Etheridge',
              title: 'Consultant Officer',
              img: 'https://reactdemo-envotek.soyonexpress.com/static/media/team-member3.3996a233712e6c8ee2cf.jpg',
            },
            {
              name: 'Brittaney Hickson',
              title: 'Web Developer',
              img: 'https://reactdemo-envotek.soyonexpress.com/static/media/team-member2.fa7a7f664f9d0f120787.jpg',
            },
            {
              name: 'Rosalina Sheldon',
              title: 'UI Designer',
              img: 'https://reactdemo-envotek.soyonexpress.com/static/media/team-member1.a008367e29d1e6eee5f9.jpg',
            },
          ].map((member, index) => (
            <div key={index} className="team-member flex flex-col items-center mb-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <div className="member-image relative border border-gray-300 rounded-lg overflow-hidden mb-4 transition duration-300">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-auto object-cover rounded-lg transition-transform duration-300 transform hover:scale-110"
                />
            
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-75"></div>
                <div className="info-box bg-white p-4 py-6 absolute bottom-12 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-8/12 rounded-lg shadow-lg text-center transition duration-300">
                  <h5 className="text-xl font-bold mb-2">{member.name}</h5>
                  <div className="h-0.5 w-12 bg-red-500 mx-auto mb-2"></div>
                  <span className="text-sm text-gray-700">{member.title}</span>
                  <div className="flex justify-center mt-4 space-x-4">
                    {/* <a href="#" className="text-blue-500 text-lg transform hover:scale-110 transition duration-300">
                      <FaInstagram />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </section>
  );
};

export default TeamSection;
