import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="main-footer bg-red-200 text-white py-12">
      <div className="footer-wrap">
        <div className="container mx-auto px-4">
          <div className="row flex flex-wrap">
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="footer-widget quick-links">
                <h4 className="text-black font-bold text-2xl mb-4">Quick Links</h4>
                <ul>
                  {[
                    { href: "/", text: "Pick up locations" },
                    { href: "/", text: "Terms of Payment" },
                    { href: "/", text: "Privacy Policy" },
                    { href: "/", text: "Where to Find Us" },
                    { href: "/", text: "Privacy Policy" },
                  ].map((link, index) => (
                    <li key={index} className="mb-2">
                      <a href={link.href} className="flex items-center text-gray-800 hover:text-red-500">
                        <FaAngleDoubleRight className="mr-2" /> {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
  <div className="footer-widget latest-post">
    <h4 className="text-black font-bold text-2xl mb-4">Latest Post</h4>
    {[
      {
        href: "/blog-details",
        src: "https://reactdemo-envotek.soyonexpress.com/static/media/post1.5b29eba4e9aada8eb3a4.png",
        alt: "Latest Post Image",
        title: "We carry more than just.",
      },
      {
        href: "/blog-details",
        src: "https://reactdemo-envotek.soyonexpress.com/static/media/post2.9ac9aa9aa5ac8019e15c.png",
        alt: "Latest Post Image",
        title: "We carry more than just ",
      },
    ].map((post, index) => (
      <div key={index} className="post-item mb-4 flex">
        <div className="post-image mr-4">
          <a href={post.href}>
            <img
              src={post.src}
              alt={post.alt}
              className="rounded-lg" // Added border-radius using Tailwind's rounded-lg
            />
          </a>
        </div>
        <div className="post-content">
          <h6 className="text-gray-800 hover:text-red-500">
            <a href={post.href}>{post.title}</a>
          </h6>
          {/* Display the current date dynamically */}
          <span className="text-red-500">{new Date().toLocaleDateString()}</span>
        </div>
      </div>
    ))}
  </div>
</div>


            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="footer-widget quick-links support">
                <h4 className="text-black font-bold text-2xl mb-4">Support</h4>
                <ul>
                  {[
                    { href: "/", text: "Forum Support" },
                    { href: "/", text: "Help & FAQ" },
                    { href: "/", text: "Pricing and Plans" },
                    { href: "/", text: "Cookies Policy" },
                    { href: "/", text: "Help & FAQ" },
                  ].map((link, index) => (
                    <li key={index} className="mb-2">
                      <a href={link.href} className="flex items-center text-gray-800 hover:text-red-500">
                        <FaAngleDoubleRight className="mr-2" /> {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="footer-widget quick-links company">
                <h4 className="text-black font-bold text-2xl mb-4">Company</h4>
                <ul>
                  {[
                    { href: "/about", text: "About Us" },
                    { href: "/", text: "Leadership Team" },
                    { href: "/", text: "Case Studies" },
                    { href: "/contact", text: "Locations" },
                    { href: "/", text: "Team Members" },
                  ].map((link, index) => (
                    <li key={index} className="mb-2">
                      <a href={link.href} className="flex items-center text-gray-800 hover:text-red-500">
                        <FaAngleDoubleRight className="mr-2" /> {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-mb-12 bg-white py-4 border-t w-full">
  <div className="container mx-auto px-4">
    <div className="copy-right-text text-center">
      <p className="text-gray-800">
        <span className='text-red-600'>Copyright</span> © 2024 | All Rights Reserved
      </p>
    </div>
  </div>
</div> 

    </footer>
  );
};

export default Footer;
