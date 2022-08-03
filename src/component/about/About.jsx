import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderActive } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="Putra Rizky Ramadhan" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+ Years Studying</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Client</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className="about_card">
              <VscFolderActive className="about_icon" />
              <h5>Project</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloribus ex assumenda hic unde quae, qui itaque quidem nulla, excepturi officiis autem non sit expedita. Ipsum maxime quod aut ex.</p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
