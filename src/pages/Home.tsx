import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // For smooth scrolling
import HeaderLogo from '../assets/Header-Logo.png';
import HeroImage from '../assets/Hero.png';
import Service1 from '../assets/Service-1.png';
import Service2 from '../assets/Service-2.png';
import Service3 from '../assets/Service-3.png';
import Service4 from '../assets/Service-4.png';
import Vector from '../assets/Vector.png'
import Service5 from '../assets/Service-5.png';
import Vector2 from '../assets/Vector-2.png';
import FooterLogo from '../assets/Footer-Logo.png';
import AppointmentsImage from '../assets/Appointments-Image.png';
import Vector3 from '../assets/Vector-3.png';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

const Home: React.FC = () => {
  // Navigation menu items
  const navItems = ['Home', 'About Us', 'Services', 'Appointments', 'Contact Us'];

  const appointmentForm = {
  title: 'Book Your Appointment',
  description: 'Fill out the form below to schedule your visit with Cocoa Clinic.',
  fields: [
    { id: 1, label: 'First Name', required: true },
    { id: 2, label: 'Last Name', required: true },
    { id: 3, label: 'Email', required: true },
    { id: 4, label: 'Phone Number', required: true },
    { id: 5, label: 'Preferred Date', required: true },
    { id: 6, label: 'Reason for Visit', required: false },
  ],
};

  const service1 = {
    title: 'Health Care for Staff and Family',
    paragraphs: [
      'Our comprehensive healthcare services ensure that both staff and their families receive top-notch medical care tailored to their needs.',
      'From routine check-ups to specialized treatments, we prioritize accessibility and quality to keep your loved ones healthy.',
      'Our experienced team is dedicated to providing compassionate care in a welcoming environment.',
    ],
    images: [
      { src: Service1, alt: 'Service Image 1' },
      { src: Service2, alt: 'Service Image 2' },
    ],
  };

  const service3 = {
    title: 'Our Lab',
    topParagraph: 'Our state-of-the-art laboratory facilities provide accurate and timely diagnostic services to support your healthcare needs.',
    rightParagraphs: [
      'Equipped with the latest technology, our lab conducts a wide range of tests to ensure precise diagnoses.',
      'Our skilled technicians work closely with medical professionals to deliver reliable results.',
      'We prioritize efficiency and quality, ensuring you receive the best care possible.',
      'From routine blood tests to advanced diagnostics, our lab is here to support your health journey.',
    ],
    image: { src: Service4, alt: 'Lab Image' },
  };

  const service4 = {
  title: 'Our Pharmacy',
  paragraphs: [
    'Our pharmacy provides a wide range of medications and health products, ensuring you have access to what you need, when you need it.',
    'With expert pharmacists on hand, we offer personalized advice and support to help you manage your health effectively.',
  ],
};

    const [isVideoPlaying, setIsVideoPlaying] = useState(false);


  return (
    <div className="flex flex-col min-h-screen">
      {/* Reusing existing Header component */}
      {/* <Header /> */}

      {/* Top Bar with Email and Social Media */}
      <header className="w-full h-16 bg-blue-900 text-white">
        <div className="container mx-auto flex justify-between items-center h-full px-6">
          <div className="flex items-center gap-3">
            <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 2l-7 5-7-5h14zM4 18V8l8 5 8-5v10H4z" />
            </svg>
            <span className="font-inter text-xl">cococlinic@cocobod.gh</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Main Navigation */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              className="w-[67px] h-[66px] object-cover"
              alt="Cocoa Clinic Logo"
              src={HeaderLogo}
            />
            <div className="w-px h-[27px] bg-gray-400"></div>
            <span className="font-inter text-2xl text-black">Cocoa Clinic</span>
          </div>
          <div className="flex items-center gap-8">
            <nav>
              <ul className="flex gap-6 font-inter font-semibold text-[#00416b] text-lg">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <ScrollLink
                      to={item.toLowerCase().replace(' ', '-')}
                      smooth={true}
                      duration={500}
                      className="hover:text-blue-700 transition-colors cursor-pointer"
                    >
                      {item}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center bg-[#00ACD8] text-white px-6 py-3 rounded-full">
              <svg className="w-4 h-4 mr-2" fill="white" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.12.35.03.74-.24 1.02l-2.2 2.2z" />
              </svg>
              <span className="font-roboto-slab text-[21px]">0300 309 098 0</span>
            </div>
          </div>
        </div>
      </div>

     {/* Home Section */}
<section
  id="home"
  className="w-full h-[744px] bg-cover bg-center relative"
>
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `linear-gradient(to right, transparent 50%, #0A436A 100%), url(${HeroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  ></div>
  <div className="container mx-auto px-6 h-full flex items-center relative z-10">
    <div className="max-w-2xl ml-auto text-white">
      <h2 className="font-inter font-light text-[64px] leading-[64px]">
        Get Quick
      </h2>
      <h1 className="font-inter font-bold text-[64px] leading-[64px] mt-2">
        Medical Services
      </h1>
      <p className="font-inter text-lg leading-[29.2px] mt-8">
        At Cocoa Clinic, we provide compassionate and comprehensive healthcare
        services tailored to your needs. Our dedicated team of professionals
        is committed to ensuring your well-being with state-of-the-art facilities
        and personalized care.
      </p>
      <button className="mt-12 bg-[#00ACD8] hover:bg-blue-300 text-white font-roboto-slab text-[21px] px-6 py-3 rounded-full transition-colors cursor-pointer">
        Contact Us
      </button>
    </div>
  </div>
</section>

      {/* About Section */}
      <section
        id="about-us"
        className="w-full min-h-screen bg-gray-200 flex items-center justify-center"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-inter font-bold text-[#00416b] text-[46px] mb-4">
            About Us
          </h2>
          <p className="font-inter text-lg text-black leading-[35.2px] max-w-[875px] mx-auto mb-6">
            Cocoa Clinic is dedicated to delivering exceptional healthcare services
            to our community. With a team of experienced professionals and modern
            facilities, we strive to provide personalized care that meets the unique
            needs of each patient, ensuring their health and well-being.
          </p>
          <button className="bg-[#00ACD8] hover:bg-blue-300 text-white font-roboto-slab text-[21px] px-14 py-3 rounded-full transition-colors cursor-pointer">
            More
          </button>
        </div>
      </section>

       {/* Services Section */}
      <section id="services" className="w-full bg-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="font-inter font-bold text-[#00416b] text-[46px] text-center mb-12">
            Our Services
          </h2>

          {/* First Subsection: Health Care for Staff and Family */}
          <div className="w-full min-h-[600px] flex items-center justify-center py-8 bg-gray-50">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
              {/* Left Column: Images */}
              <div className="flex flex-col gap-6 md:w-1/2">
                {service1.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image.src}
                    alt={image.alt}
                    className="w-full max-w-[449px] h-auto object-cover rounded-lg shadow-md"
                  />
                ))}
              </div>

              {/* Right Column: Text and Button */}
              <div className="md:w-1/2 max-w-[570px]">
                <h3 className="font-inter font-bold text-[#00416b] text-[36px] md:text-[46px] leading-tight mb-6">
                  {service1.title}
                </h3>
                <div className="space-y-6">
                  {service1.paragraphs.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="font-inter text-lg text-black leading-[29.2px]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                <button className="mt-8 bg-[#00ACD8] hover:bg-blue-300 text-white font-roboto-slab text-[21px] px-12 py-3 rounded-full transition-colors cursor-pointer">
                  More
                </button>
              </div>
            </div>
          </div>

          {/* Second Subsection: Video */}
          <div className="w-full min-h-[600px] flex items-center justify-center py-8 bg-white">
            <div className="container mx-auto px-6 text-center">
              <h3 className="font-inter font-bold text-[#00416b] text-[36px] md:text-[46px] mb-6">
                Our Approach in Action
              </h3>
              <p className="font-inter text-lg text-black leading-[29.2px] max-w-[875px] mx-auto mb-8">
                Watch our video to see how Cocoa Clinic delivers exceptional healthcare
                with compassion and expertise.
              </p>
              <div className="relative max-w-[901px] mx-auto aspect-[16/9]">
                {isVideoPlaying ? (
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/5u70bsFTPno"
                    title="Cocoa Clinic Video"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div
                    className="w-full h-full bg-cover bg-center rounded-lg shadow-md"
                    style={{ backgroundImage: `url(${Service3})` }}
                  >
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-blue-600/80 hover:bg-blue-700/80 flex items-center justify-center transition-colors"
                      aria-label="Play video"
                    >
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

           {/* Third Subsection: Our Lab */}
          <div className="w-full min-h-[600px] relative py-8 overflow-hidden">
            {/* Spiral Vector Effect */}
            <div
             className="absolute inset-0 bg-contain bg-center bg-repeat-x z-10 opacity-50"
              style={{
                backgroundImage: `url(${Vector})`,
                 width: '100vw',
      left: '50%',
      transform: 'translateX(-50%)',
              }}
            ></div>

            <div className="flex items-center justify-center relative z-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] w-full px-4">
                {/* Left Column: Image and Top Text */}
                <div className="flex flex-col gap-6 text-blue-950">
                  <h3 className="font-inter font-bold text-[36px] md:text-[46px] leading-tight">
                    {service3.title}
                  </h3>
                  <p className="font-inter text-lg leading-[29.2px]">
                    {service3.topParagraph}
                  </p>
                  <img
                    src={service3.image.src}
                    alt={service3.image.alt}
                    className="w-full max-w-[400px] h-auto object-cover rounded-lg shadow-md"
                  />
                </div>

                {/* Right Column: Paragraphs */}
                <div className="flex flex-col gap-6 text-blue-950">
                  {service3.rightParagraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="font-inter text-lg leading-[29.2px]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

         {/* Fourth Subsection: Our Pharmacy */}
          <div className="w-full min-h-[600px] flex items-center justify-center py-8 bg-gray-50">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 max-w-[1145px]">
              {/* Left Column: Text and Button */}
              <div className="flex flex-col gap-8 max-w-[600px]">
                <h3 className="font-inter font-bold text-[#00416b] text-[36px] md:text-[46px] leading-tight">
                  {service4.title}
                </h3>
                {service4.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="font-inter text-lg text-black leading-[29.2px]"
                  >
                    {paragraph}
                  </p>
                ))}
                <button className="w-[214px] h-[51px] bg-[#00ACD8] hover:bg-blue-400 text-white font-roboto-slab text-[21px] rounded-full transition-colors cursor-pointer">
                  Contact Us
                </button>
              </div>

              {/* Right Column: Image over Vector */}
              <div className="relative w-full max-w-[410px] h-[580px]">
                <img
                  src={Vector2}
                  alt="Vector Background"
                  className="absolute w-full max-w-[410px] h-[400px] bottom-0 left-0 object-cover z-10"
                />
                <img
                  src={Service5}
                  alt="Pharmacy Image"
                  className="absolute w-full max-w-[380px] h-auto top-0 left-[15px] object-cover z-20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointments Section */}
<section id="appointments" className="w-full bg-white pt-12 pb-0">
  <div className="container mx-auto px-6 relative z-20">
    <div className="bg-gray-100 rounded-lg shadow-md p-8 md:p-12">
      <h2 className="font-inter font-bold text-[#00416b] text-[36px] md:text-[44px] mb-4">
        {appointmentForm.title}
      </h2>
      <p className="font-inter text-lg text-black leading-[25px] mb-8 max-w-[600px]">
        {appointmentForm.description}
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Form */}
        <div className="w-full md:w-1/2">
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {appointmentForm.fields.map((field) => (
              <div key={field.id} className="flex flex-col">
                <label
                  htmlFor={`field-${field.id}`}
                  className="font-inter text-sm text-black mb-2"
                >
                  {field.label}
                  {field.required && <span className="text-red-500">*</span>}
                </label>
                <input
                  id={`field-${field.id}`}
                  type="text"
                  required={field.required}
                  className="w-full h-[34px] bg-white border border-gray-300 rounded px-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            ))}
          </form>

          {/* Checkboxes */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <label className="flex items-center gap-2 text-sm text-black">
              <input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              I agree to the terms and conditions
            </label>
            <label className="flex items-center gap-2 text-sm text-black">
              <input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              Receive appointment reminders (<a href="#" className="text-[#00acd8] underline">Details</a>)
            </label>
          </div>

          {/* Submit Button */}
          <button className="mt-8 w-[296px] h-[51px] bg-[#00ACD8] hover:bg-blue-300 text-white font-roboto-slab text-[21px] rounded-full cursor-pointer transition-colors">
            Submit
          </button>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={AppointmentsImage}
            alt="Appointments"
            className="w-full max-w-[387px] h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>

  {/* Footer */}
  <footer className="w-full bg-[#AEAEAE] text-black pt-32 pb-18 -mt-20 relative z-10">
    <div
      className="absolute inset-x-0 bottom-0 h-[50px] text-amber-50 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${Vector3})` }}
    >
      <p className="text-center text-base font-inter pt-4">
        © 2025 Cocoa Clinic. All rights reserved.
      </p>
    </div>

    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <img
              src={FooterLogo}
              alt="Cocoa Clinic Logo"
              className="w-[67px] h-[66px] object-cover"
            />
            <div className="w-px h-[27px] bg-gray-400"></div>
            <span className="font-inter text-2xl">Cocoa Clinic</span>
          </div>
          <p className="font-inter text-lg leading-[29.2px] max-w-[346px]">
            Cocoa Clinic provides compassionate healthcare services with a focus on quality and accessibility for all.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-4">
          <h3 className="font-inter font-bold text-lg">Navigation</h3>
          <ul className="flex flex-col gap-4">
            {['Home', 'About Us', 'Services', 'Appointments'].map((link, index) => (
              <li key={index}>
                <ScrollLink
                  to={link.toLowerCase().replace(' ', '-')}
                  smooth={true}
                  duration={500}
                  className="font-inter text-lg hover:text-blue-600 transition-colors cursor-pointer"
                >
                  {link}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h3 className="font-inter font-bold text-lg">Contact Us</h3>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="#00ACD8" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 2l-7 5-7-5h14zM4 18V8l8 5 8-5v10H4z" />
            </svg>
            <span className="font-inter text-lg">cococlinic@cocobod.gh</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="#00ACD8" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.12.35.03.74-.24 1.02l-2.2 2.2z" />
            </svg>
            <span className="font-inter text-lg">0300 309 098 0</span>
          </div>
          <div className="flex gap-4">
             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <div className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center">
      <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
      </svg>
    </div>
  </a>
             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <div className="w-10 h-10 bg-[#1DA1F2] rounded-full flex items-center justify-center">
      <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.44 3c-2.63 0-4.57 2.37-3.99 4.99C8.36 7.91 5.7 6.31 3.98 4a4.48 4.48 0 00-.63 2.27c0 1.57.8 2.96 2.03 3.77A4.48 4.48 0 012 9.74v.05a4.5 4.5 0 003.6 4.4 4.52 4.52 0 01-2.02.08 4.5 4.5 0 004.2 3.13A9.03 9.03 0 012 19.54 12.77 12.77 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.35-.02-.53A8.32 8.32 0 0023 3z" />
      </svg>
    </div>
  </a>
             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <div className="w-10 h-10 bg-[#0077B5] rounded-full flex items-center justify-center">
      <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v12h-4V8zm7 0h3.6v1.5h.05c.5-.94 1.7-1.94 3.5-1.94 3.75 0 4.45 2.5 4.45 5.74V20h-4v-6.12c0-1.45-.03-3.3-2-3.3s-2.3 1.57-2.3 3.2V20h-4V8z" />
      </svg>
    </div>
  </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</section>
    </div>
  );
};

export default Home;