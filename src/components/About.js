import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaInstagram, FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { DiJavascript, DiReact, DiNodejs, DiHtml5, DiCss3 } from "react-icons/di";
import { SiBootstrap, SiMysql, SiPhp } from "react-icons/si";
import './About.css';
import photo2 from './assets/images/pc.jpeg';


function About() {
  return (
    <div className="about-container container" id="about">
      <h2 className="about-title text-center pt-5">About Me</h2>

      <div className="row align-items-center">
        {/* Left Column - About Text */}
        <div className="col-md-6 text-left">
          <p className="about-text">
            I’m Soaad Chafyq, a Full-Stack Web Developer with a passion for building functional and visually appealing web applications.
            I specialize in both front-end and back-end development, turning ideas into seamless digital experiences.
            Constantly learning and improving, I strive to create efficient, user-friendly solutions that make an impact.
            Technology is my canvas, and problem-solving is my art. I believe that every line of code should serve a purpose—whether it’s enhancing user experience, optimizing performance, or unlocking new possibilities. 
          </p>
         
          <h3 className="contact-title text-center">Here where you can find me:</h3>
      <div className="social-links text-center">
        <a href="mailto:chafyqsoaad@gmail.com" className="social-icon"><FaEnvelope /></a>
        <a href="https://www.instagram.com/chafik_soaad" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
        <a href="https://wa.me/0610228442" target="_blank" rel="noopener noreferrer" className="social-icon"><FaWhatsapp /></a>
        <a href="https://github.com/So-Aad" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/soaad-chafyq-353052290/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
      </div>
        </div>

        {/* Right Column - Image */}
        <div className="col-md-6 text-center">
          <img src={photo2} alt="Soaad Chafyq" className="about-img" />
          
        </div>
      </div>
      <div className="floating-icons pt-4">
        <DiJavascript className="tech-icon" />
        <DiReact className="tech-icon" />
        <DiNodejs className="tech-icon" />
        <DiHtml5 className="tech-icon" />
        <DiCss3 className="tech-icon" />
        <SiBootstrap className="tech-icon" />
        <SiMysql className="tech-icon" />
        <SiPhp className="tech-icon" />
      </div>
    </div>
  );
}

export default About;
