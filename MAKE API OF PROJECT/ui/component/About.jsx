import React from "react";
// Importing the CSS file for styling

const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>About Us</h1>
        
        <div className="about-section">
          <img 
            src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg" 
            alt="Company" 
            className="about-image"
          />
          <div className="text">
            <h2>Our Vision</h2>
            <p>
              We are dedicated to providing high-quality services and products.
              Our team is committed to excellence and customer satisfaction. We
              strive to offer the best experience to all of our users.
            </p>
          </div>
        </div>

        <div className="about-section">
          <div className="text">
            <h2>Our Mission</h2>
            <p>
              Our company was founded with the goal of creating innovative
              solutions to everyday challenges. With a diverse team of experts
              in various fields, we work tirelessly to bring the best to our
              community.
            </p>
          </div>
          <img 
            src="https://etimg.etb2bimg.com/photo/111884469.cms" 
            alt="Mission" 
            className="about-image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
