'use client';

import { useRef, useState } from 'react';

const ContactUs = ({ userID }) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();
  const messageRef = useRef();
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userID,  // Pass the userID if applicable
        name: nameRef.current.value,
        email: emailRef.current.value,
        mobile: mobileRef.current.value,
        message: messageRef.current.value,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      setResponseMessage(data.message);
    } else {
      setResponseMessage('Error submitting the form');
    }

    nameRef.current.value = '';
    emailRef.current.value = '';
    mobileRef.current.value = '';
    messageRef.current.value = '';
  };

  return (
    <div className="max-w-md mx-auto my-8 p-4 border rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border rounded text-gray-900"
            ref={nameRef}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded text-gray-900"
            ref={emailRef}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="mobile">Mobile</label>
          <input
            type="text"
            id="mobile"
            className="w-full px-3 py-2 border rounded text-gray-900"
            ref={mobileRef}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            className="w-full px-3 py-2 border rounded text-gray-900"
            rows="4"
            ref={messageRef}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Send
        </button>
      </form>
      {responseMessage && <p className="mt-4 text-green-500">{responseMessage}</p>}
    </div>
  );
};

export default ContactUs;
