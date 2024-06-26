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
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', color: 'black' }}>Our Internships</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {internships.map(internship => (
                    <div key={internship._id} style={{ flex: '1 1 calc(33.333% - 20px)', backgroundColor: '#f9f9f9', border: '1px solid #ddd', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', color: 'black', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ flex: '1 0 auto', overflow: 'hidden', borderRadius: '4px', marginBottom: '10px', position: 'relative', height: '250px' }}>
                            <img src={internship.imageUrl} alt={internship.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ flex: '0 0 auto' }}>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'black' }}>Title: {internship.title}</h2>
                            <p style={{ margin: '5px 0', color: 'black', whiteSpace: 'pre-line' }}><strong>Description:</strong> {internship.description}</p>
                            <p style={{ margin: '5px 0', color: 'black' }}><strong>Company:</strong> {internship.company}</p>
                            <p style={{ margin: '5px 0', color: 'black' }}><strong>Location:</strong> {internship.location}</p>
                            <p style={{ margin: '5px 0', color: 'black' }}><strong>Duration:</strong> {internship.duration}</p>
                            <p style={{ margin: '5px 0', color: 'black' }}><strong>Stipend:</strong> {internship.stipend}</p>
                            <button onClick={() => handleApplyNow('https://forms.gle/RTKTFVtL5YzTUMKQ7')} style={{ backgroundColor: '#007bff', color: '#fff', padding: '8px 16px', borderRadius: '4px', border: 'none', cursor: 'pointer', marginTop: '10px' }}>Apply Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InternshipsPage;
