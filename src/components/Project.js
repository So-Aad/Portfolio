import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Project.css";
import img1 from "./assets/images/jaura.png";
import img2 from "./assets/images/talkie.png";
import img3 from "./assets/images/restaurant.png";
import img4 from "./assets/images/dashboard.png";
import img5 from "./assets/images/meetingRoom.png";
import img6 from "./assets/images/virtual mouse.png";

const projects = [
  {
    title: "E-Commerce Website",
    tech: ["React", "Bootstrap"],
    demoLink: "https://j-aura.netlify.app/",
    sourceCode: "https://github.com/So-Aad/J-aura.git",
    image: img1,
  },
  {
    title: "Real-Time Chat App",
    tech: ["Laravel", "Mysql", "Chatify"],
    demoLink: "https://github.com/So-Aad/Talkie.git",
    sourceCode: "https://github.com/So-Aad/Talkie.git",
    image: img2,
  },
  {
    title: "Restaurant Reservation",
    tech: ["Javascript", "Mysql", "php"],
    demoLink: "https://github.com/So-Aad/Restaurant.git",
    sourceCode: "https://github.com/So-Aad/Restaurant.git",
    image: img3,
  },
  {
    title: "Admin Dashboard",
    tech: ["Laravel", "Mysql", "Filament"],
    demoLink: "https://github.com/So-Aad/Admin_Dashboard.git",
    sourceCode: "https://github.com/So-Aad/Admin_Dashboard.git",
    image: img4,
  },
  {
    title: "Meeting Rooms",
    tech: ["HTML", "CSS", "Bootstrap"],
    demoLink: "https://so-aad.github.io/MeetingRooms",
    sourceCode: "https://github.com/So-Aad/MeetingRooms.git",
    image: img5,
  },
  {
    title: "Virtual Mouse",
    tech: ["Python", "OpenCV", "MediaPipe"],
    sourceCode: "https://github.com/So-Aad/Virtual_Mouse.git",
    image: img6,
  },
];

const Portfolio = () => {
  return (
    <div className="container py-5" id="project">
      <h2 className="text-center mb-4 pro">My Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="col-md-6 mb-4"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card project-card d-flex flex-row align-items-center">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <div className="mb-3">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="badge me-1">{tech}</span>
                  ))}
                </div>
                <div className="d-flex justify-content-between">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm lien"
                    >
                      🔗 Demo
                    </a>
                  )}
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm lien"
                  >
                    💻 Code
                  </a>
                </div>
              </div>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
