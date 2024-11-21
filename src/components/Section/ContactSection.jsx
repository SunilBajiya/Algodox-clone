import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faMapMarkerAlt, faClock, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !message) {
      setError('Please fill in all the fields');
      setSuccess(false);
    } else if (!email.includes('@')) {
      setError('Invalid email address');
      setSuccess(false);
    } else {
      // Reset form and display success message
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setError(null);
      setSuccess(true);
    }
  };

  const closeModal = () => {
    setSuccess(false);
  };

  return (
    <div className="flex flex-wrap -mx-2 px-4 lg:px-16 py-9 bg-slate-300">
      {success && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4 text-green-600">Success!</h2>
            <p className="mb-6">Form submitted successfully! Our team will connect with you soon.</p>
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
            >
              OK
            </button>
          </div>
        </div>
      )}
      <div className="w-full lg:w-1/3 px-9 mb-4 lg:mb-0 flex flex-col cursor-pointer">
        <div className="p-9 bg-red-100 border border-gray-300 rounded-lg shadow-lg flex-grow">
          <div className="mb-6 flex items-center hover:text-red-500">
            <FontAwesomeIcon icon={faPhoneAlt} className="text-xl text-red-500 mr-4" />
            <div>
              <h4 className="font-semibold">Phone Number &amp; Email</h4>
              <p>
                <a href="tel:+91-7300093286" className="text-black hover:text-red-500">+91-7300093286</a><br />
                <a href="mailto:sunil@algodox.co.in" className="text-black hover:text-red-500">sunil@algodox.co.in</a>
              </p>
            </div>
          </div>
          <div className="mb-6 flex items-center  border-gray-300 py-1 hover:text-red-500">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl text-red-500 mr-4" />
            <div>
              <h4 className="font-semibold">Our Office Address</h4>
              <p>605, SGH, Vaishali Nagar, Jaipur, India</p>
            </div>
          </div>
          <div className="flex items-center border-b border-gray-300 pb-6 mb-6">
            <FontAwesomeIcon icon={faClock} className="text-xl text-red-500 mr-4" />
            <div className='hover:text-red-500'>
              <h4 className="font-semibold ">Official Work Time</h4>
              <p>9:00am - 6:00pm (Mon - Fri)</p>
            </div>
          </div>
          <div className="flex justify-center">
            <img src="https://reactdemo-envotek.soyonexpress.com/static/media/get-touch-img.00c26b0b56cfa070cc06.png" alt="Algodox Contact Center" className="h-60 w-60" />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 px-2 py-3 flex flex-col">
        <div className="p-6 bg-white border border-gray-300 py-10 rounded-lg shadow-lg flex-grow">
          <h3 className="text-3xl font-semibold mb-4">Get in Touch:</h3>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-6 flex flex-col">
            <div className="flex flex-wrap -mx-2">
              <div className="w-full px-3 py-1 mb-4 md:mb-3">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-red-100"
                    required
                  />
                  <FontAwesomeIcon icon={faUser} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <div className="w-full px-2 py-1 mb-4 md:mb-1">
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-red-100"
                    required
                  />
                  <FontAwesomeIcon icon={faEnvelope} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <div className="w-full px-2 py-1 mb-4">
                <div className="relative">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-red-100"
                    required
                  />
                  <FontAwesomeIcon icon={faPhoneAlt} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <div className="w-full px-2 py-1 mb-4">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-red-100"
                  rows="5"
                  required
                ></textarea>
              </div>
               <div className="mt-4 px-40 py-4">
              <button className="mt-5 inline-flex items-center justify-center w-36 md:w-44 h-12 md:h-14 text-white bg-red-500 border-2 border-red-500 rounded-md hover:text-red-500 hover:bg-transparent hover:border-solid transition duration-300 ease-in-out">
                Submit Comments<span className="ml-2">&#xBB;</span>
              </button>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
