import React from "react";
import { 
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaLaravel, 
    FaGitAlt, FaBootstrap , FaPencilAlt,FaGithub,FaPython
} from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si"; 
import "./Skills.css"; 

const skills = [
    { name: "HTML", icon: <FaHtml5 className="icon html-icon" /> },
    { name: "CSS", icon: <FaCss3Alt className="icon css-icon" /> },
    { name: "JavaScript", icon: <FaJs className="icon js-icon" /> },
    { name: "React", icon: <FaReact className="icon react-icon" /> },
    { name: "PHP", icon: <FaPhp className="icon php-icon" /> },
    { name: "Laravel", icon: <FaLaravel className="icon laravel-icon" /> },
    { name: "MySQL", icon: <SiMysql className="icon mysql-icon" /> },
    { name: "MongoDB", icon: <SiMongodb className="icon mongodb-icon" /> },
    { name: "Git", icon: <FaGitAlt className="icon git-icon" /> },
    { name: "GitHub", icon: <FaGithub className="icon github-icon" /> },
    { name: "Python", icon: <FaPython className="icon python-icon" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="icon bootstrap-icon" /> },
    { name: "Modeling", icon: <FaPencilAlt className="icon bootstrap-icon" /> }, 
];

const Skills = () => {
    return (
        <div >
            <h2 className="skillsText text-center" id="skills">My Skills</h2>
            <p className="skills-description">
                I can fix bugs and build responsive websites using the following technologies.<br></br> 
                I'm also flexible and passionate to learn new technologies to improve my skills.
            </p>
            <div className="skills-container p-4" >
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-box">
                            <span className="icon">{skill.icon}</span>
                            <p className="skillName text-light">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
