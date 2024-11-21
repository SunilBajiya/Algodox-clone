import React from 'react'

function AboutTeams() {
  return (
    <section className="team-section pt-110 pb-120 rpt-90 rpb-60">
  <div className="container">
    <div className="row">
      <div className="col-12 py-4">
        <div className="section-title text-center text-5xl">
          <span>Team Members</span>
          <h2>Our Professional Team Members</h2>
        </div>
      </div>
    </div>
    <div className="team-wrap">
      <div className="border-shap pb-2"></div>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="team-member flex flex-col items-center mb-10">
          <div className="member-image relative border border-gray-300 rounded-lg overflow-hidden mb-4 hover:scale-110 transition duration-300">
            <img
              src="https://reactdemo-envotek.soyonexpress.com/static/media/team-member3.3996a233712e6c8ee2cf.jpg"
              alt="Sharyl Etheridge"
              className="w-full h-auto"
            />
            <div className="info-box bg-white p-4 py-6">
              <h5 className="text-xl font-bold mb-2">Sharyl Etheridge</h5>
              <span className="text-sm">Consultant Officer</span>
              <div className="flex justify-center mt-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full blur-sm transition duration-300 mr-4">Contact</button>
                <a href="#" className="transform hover:scale-110"><i className="fab fa-instagram text-blue-500 text-lg"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="team-member flex flex-col items-center mb-10">
          <div className="member-image relative border border-gray-300 rounded-lg overflow-hidden mb-4 hover:scale-110 transition duration-300">
            <img
              src="https://reactdemo-envotek.soyonexpress.com/static/media/team-member2.fa7a7f664f9d0f120787.jpg"
              alt="Brittaney Hickson"
              className="w-full h-auto"
            />
            <div className="info-box bg-white p-4 py-6">
              <h5 className="text-xl font-bold mb-2">Brittaney Hickson</h5>
              <span className="text-sm">Web Developer</span>
              <div className="flex justify-center mt-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full blur-sm transition duration-300 mr-4">Contact</button>
                <a href="#" className="transform hover:scale-110"><i className="fab fa-instagram text-blue-500 text-lg"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="team-member flex flex-col items-center mb-10">
          <div className="member-image relative border border-gray-300 rounded-lg overflow-hidden mb-4 hover:scale-110 transition duration-300">
            <img
              src="https://reactdemo-envotek.soyonexpress.com/static/media/team-member1.a008367e29d1e6eee5f9.jpg"
              alt="Rosalina Sheldon"
              className="w-full h-auto"
            />
            <div className="info-box bg-white p-4 py-6">
              <h5 className="text-xl font-bold mb-2">Rosalina Sheldon</h5>
              <span className="text-sm">UI Designer</span>
              <div className="flex justify-center mt-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full blur-sm transition duration-300 mr-4">Contact</button>
                <a href="#" className="transform hover:scale-110"><i className="fab fa-instagram text-blue-500 text-lg"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> 
 )
}

export default AboutTeams