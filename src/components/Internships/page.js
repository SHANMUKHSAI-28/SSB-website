"use client";
import React, { useEffect, useState } from 'react';
import { viewInternships } from '../../../services/internship';

const InternshipsPage = () => {
    const [internships, setInternships] = useState([]);

    useEffect(() => {
        const fetchInternships = async () => {
            try {
                const data = await viewInternships();
                setInternships(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchInternships();
    }, []);

    const handleApplyNow = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>Internships are shown here</h1>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {internships.map(internship => (
                    <li key={internship._id} style={{ backgroundColor: '#f9f9f9', border: '1px solid #ddd', padding: '20px', marginBottom: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                        <img src={internship.imageUrl} alt={internship.title} style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px', marginBottom: '10px' }} />
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Title: {internship.title}</h2>
                        <p style={{ margin: '5px 0' }}>Description: {internship.description}</p>
                        <p style={{ margin: '5px 0' }}>Company: {internship.company}</p>
                        <p style={{ margin: '5px 0' }}>Location: {internship.location}</p>
                        <p style={{ margin: '5px 0' }}>Duration: {internship.duration}</p>
                        <p style={{ margin: '5px 0' }}>Stipend: {internship.stipend}</p>
                        <button onClick={() => handleApplyNow('https://forms.gle/RTKTFVtL5YzTUMKQ7')} style={{ backgroundColor: '#007bff', color: '#fff', padding: '8px 16px', borderRadius: '4px', border: 'none', cursor: 'pointer', marginTop: '10px' }}>Apply Now</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InternshipsPage;
