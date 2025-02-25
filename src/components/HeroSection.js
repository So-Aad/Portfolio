import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroSection.css';
import photo1 from './assets/images/soaad.jpg';


function Hero() {
   
    return (
        <div className="container-fluid cont">
            <h1 className="title">Full Stack Web Developer</h1>

            {/* Right - Menu */}
            <nav className="menu">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link scroll-link" href="#about" >
                            <i className="bi bi-person-circle"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link scroll-link" href="#skills">
                            <i className="bi bi-code-slash"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">
                            <i className="bi bi-folder-fill"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">
                            <i className="bi bi-envelope"></i>
                        </a>
                    </li>
                </ul>

            </nav>

            <div className="imageContainer" style={{ backgroundImage: `url(${photo1})` }}></div>

            {/* Profile Text */}
            <h6 className="profileText text-center d-flex justify-content-center align-items-center pt-4">
                {"<"}Your vision, my expertise—together, we create<br /> digital brilliance{"/>"}
            </h6>
            <span className="teckit">Hello there !</span>


            {/* Button Centered Below h3 */}
            <div className="cv-container">
                <a href="/Soaad chafyq.pdf" download className="cv btn">
                    Download my CV! <i className="bi bi-file-earmark-text"></i>
                </a>
            </div>
        </div>
    );
}

export default Hero;
