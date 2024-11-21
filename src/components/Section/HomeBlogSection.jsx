import React from 'react';

const HomeBlogSection = () => {
  const currentDate = "30 May, 2024";

  return (
    <section className="blog-section pt-2 pb-18 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-red-600 text-xl font-semibold">Blog Post</span>
          <h2 className="text-3xl font-bold mt-2">
            Some Latest Articles <br /> From Our News Feed.
          </h2>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8">
            <div className="blog-item flex bg-gray-200 shadow-lg rounded-lg overflow-hidden">
              <div
                className="blog-image h-64 w-1/3 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://reactdemo-envotek.soyonexpress.com/static/media/blog1.8eaa511278f63f538ec6.jpg)' }}
              ></div>
              <div className="blog-content p-6 w-2/3">
                <span className="date text-sm text-red-600">{currentDate}</span>
                <h5 className="text-xl font-semibold mt-2">
                  <a href="/blog-details" className="text-black hover:text-red-700">It uses a dictionary of over <br /> combined handful.</a>
                </h5>
                <p className="text-gray-600 mt-4">It has survived not only five centuries typesetting remaining essentially was the release more recent.</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 mb-8">
            <div className="blog-item flex bg-gray-200 shadow-lg rounded-lg overflow-hidden">
              <div
                className="blog-image h-64 w-1/3 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://reactdemo-envotek.soyonexpress.com/static/media/blog3.927cb80613bf95e1cd8b.jpg)' }}
              ></div>
              <div className="blog-content p-6 w-2/3">
                <span className="date text-sm text-red-600">{currentDate}</span>
                <h5 className="text-xl font-semibold mt-2">
                  <a href="/blog-details" className="text-black hover:text-red-700">Efficiently monetize models<br /> transparent sources.</a>
                </h5>
                <p className="text-gray-600 mt-4">It has survived not only five centuries typesetting remaining essentially was the release more recent.</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 mb-8">
            <div className="blog-item flex bg-gray-200 shadow-lg rounded-lg overflow-hidden">
              <div
                className="blog-image h-64 w-1/3 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://reactdemo-envotek.soyonexpress.com/static/media/blog2.e495947e70752da7c7c4.jpg)' }}
              ></div>
              <div className="blog-content p-6 w-2/3">
                <span className="date text-sm text-red-600">{currentDate}</span>
                <h5 className="text-xl font-semibold mt-2">
                  <a href="/blog-details" className="text-black hover:text-red-700">Market Insights To Manage <br /> People Related Costs.</a>
                </h5>
                <p className="text-gray-600 mt-4">It has survived not only five centuries typesetting remaining essentially was the release more recent.</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 mb-8">
            <div className="blog-item flex bg-gray-200 shadow-lg rounded-lg overflow-hidden">
              <div
                className="blog-image h-64 w-1/3 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://reactdemo-envotek.soyonexpress.com/static/media/blog4.c2aa54b795d12fc69618.jpg)' }}
              ></div>
              <div className="blog-content p-6 w-2/3">
                <span className="date text-sm text-red-600">{currentDate}</span>
                <h5 className="text-xl font-semibold mt-2">
                  <a href="/blog-details" className="text-black hover:text-red-700">New Remote Workers Visible <br /> To Security.</a>
                </h5>
                <p className="text-gray-600 mt-4">It has survived not only five centuries typesetting remaining essentially was the release more recent.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBlogSection;
