import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactUs: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-4">Welcome to Cocoa Clinic</h2>
        <p className="text-lg text-center">Providing quality healthcare with compassion.</p>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;