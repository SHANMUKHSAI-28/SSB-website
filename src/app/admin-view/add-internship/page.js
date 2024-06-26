"use client";
import React, { useState } from 'react';
import { addInternship } from '../../../services/internship';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

// Initialize Firebase app with your configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4ueWeAITgrofhqbcpRcWNtdWANtzhpUM",
  authDomain: "ssb-automations.firebaseapp.com",
  projectId: "ssb-automations",
  storageBucket: "ssb-automations.appspot.com",
  messagingSenderId: "764868890336",
  appId: "1:764868890336:web:f5cfecafa20e3e94480a85",
  measurementId: "G-4L8V3GPBGJ"
};

export const firebaseStroageURL =
  "gs://ssb-automations.appspot.com";


const app = initializeApp(firebaseConfig);
const storage = getStorage(app, firebaseStroageURL);

const createUniqueFileName = (getFile) => {
  const timeStamp = Date.now();
  const randomStringValue = Math.random().toString(36).substring(2, 12);

  return `${getFile.name}-${timeStamp}-${randomStringValue}`;
};

async function uploadImageToFirebase(file) {
  const fileName = createUniqueFileName(file);
  const storageRef = ref(storage, `ecommerce/${fileName}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        console.error(error);
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => resolve(downloadURL))
          .catch((error) => reject(error));
      }
    );
  });
}

const AddInternshipPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [duration, setDuration] = useState('');
  const [stipend, setStipend] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageUrl) {
      alert('Please upload an image.');
      return;
    }

    const internship = {
      title,
      description,
      company,
      location,
      duration,
      stipend,
      imageUrl,
    };

    try {
      await addInternship(internship);
      alert('Internship added successfully');
    } catch (error) {
      console.error(error);
      alert('Error adding internship');
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    try {
      const url = await uploadImageToFirebase(file);
      setImageUrl(url);
    } catch (error) {
      console.error(error);
      alert('Failed to upload image');
    }
  };

  return (
    <div className="container">
      <h1 className="title">Add Internship</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required></textarea>
        </div>
        <div className="form-group">
          <label>Company:</label>
          <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company" required />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" required />
        </div>
        <div className="form-group">
          <label>Duration:</label>
          <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Duration" required />
        </div>
        <div className="form-group">
          <label>Stipend:</label>
          <input type="text" value={stipend} onChange={(e) => setStipend(e.target.value)} placeholder="Stipend" />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input type="file" onChange={handleImageChange} accept="image/*" />
        </div>
        <button type="submit" className="submit-button">Add Internship</button>
      </form>
      <style jsx>{`
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .title {
          font-size: 24px;
          margin-bottom: 20px;
        }
        .form-group {
          margin-bottom: 15px;
        }
        label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }
        input[type="text"], textarea {
          width: 100%;
          padding: 10px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 4px;
          color: black; /* Set text color to black */
        }
        .submit-button {
          background-color: #007bff;
          color: #fff;
          border: none;
          padding: 10px 20px;
          font-size: 18px;
          cursor: pointer;
          border-radius: 4px;
        }
        .submit-button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default AddInternshipPage;
