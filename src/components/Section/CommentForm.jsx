import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CommentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormValid, setIsFormValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (name && email && message) {
      setIsFormValid(true);
      setIsModalOpen(true);
      // Clear the form fields
      setFormData({
        name: '',
        email: '',
        number: '',
        message: '',
      });
    } else {
      setIsFormValid(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="   min-h-screen ">
      <form onSubmit={handleSubmit} className="space-y-6  bg-white pl-10   w-full max-w-md">
        <div>
          <input
            type="text"
            className={`w-full p-2 bg-red-100 border ${!isFormValid && !formData.name ? 'border-red-500' : 'hover:border-red-400'} rounded`}
            id="name"
            name="name"
            placeholder="Name:"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="email"
            className={`w-full p-2 bg-red-100 border ${!isFormValid && !formData.email ? 'border-red-500' : 'hover:border-red-300'} rounded`}
            id="email"
            name="email"
            placeholder="Email:"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            className="w-full bg-red-100 p-2 border hover:border-red-300 rounded"
            id="number"
            name="number"
            placeholder="Phone:"
            value={formData.number}
            onChange={handleChange}
          />
        </div>
        <div>
          <textarea
            className={`w-full p-2 bg-red-100 border ${!isFormValid && !formData.message ? 'border-red-500' : 'hover:border-red-300'} rounded`}
            id="message"
            name="message"
            rows="6"
            placeholder="Message:"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        {!isFormValid && (
          <div className="text-red-500">Please fill in all the required fields.</div>
        )}
        <div className="text-center mt-4">
          <button
            type="submit"
            className="mt-5 inline-flex items-center justify-center w-36 md:w-44 h-12 md:h-14 text-white bg-red-500 border-2 border-red-500 rounded-md hover:text-red-500 hover:bg-transparent hover:border-solid transition duration-300 ease-in-out"
          >
            Submit Comment <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </button>
        </div>
      </form>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Comment Submitted</h2>
            <p className="mb-6">Thank you for your comment! It has been posted.</p>
            <button
              onClick={closeModal}
              className="inline-flex items-center justify-center w-24 h-10 bg-green-500 text-white rounded-md hover:bg-green-700 transition duration-300 ease-in-out"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentForm;
