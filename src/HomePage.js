// src/components/HomePage.js
import React from 'react';
import background from '../src/images/interior.jpeg'; // Path to your image

const HomePage = () => (
  <div
    style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '92.7vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      textShadow: '1px 1px 5px rgba(0, 0, 0, 0.7)',
      padding: '20px',
      boxSizing: 'border-box',
    }}
  >
    <div
      style={{
        textAlign: 'center',
        maxWidth: '800px',
        background: 'rgba(0, 0, 0, 0.6)',
        padding: '20px',
        borderRadius: '10px',
      }}
    >
      <h1>Welcome to Our Flat Inspection Services</h1>
      <p>
      As experienced professionals in the field of flat inspections, we offer thorough and detailed assessments of your property. With over 5 years of experience, our inspector has extensive knowledge in evaluating the finishing quality of flats, covering all aspects from civil work to plumbing and electrical items. Our inspector's expertise is backed by experience in reputed companies, ensuring you receive the most reliable and comprehensive inspection services. Trust us to help you make informed decisions about your property.
      <p>We currently offer our services in Noida, Gurgaon, and Dehradun. If you're interested in our services in another city, please reach out to us via the provided email or phone number.</p>
      </p>
    </div>
  </div>
);

export default HomePage;
