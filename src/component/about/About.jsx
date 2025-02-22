import React from 'react';
import './about.css';
import PUTRA from '../../assets/PasFotoPutra.png';
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
            <img src={PUTRA} alt="Putra Rizky Ramadhan" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>6+ Month Work as Programmer</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Client</h5>
              <small>5+ Indonesian</small>
            </article>

            <article className="about_card">
              <VscFolderActive className="about_icon" />
              <h5>Project</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            Saya adalah seorang fresh graduet dari sebuah SMK Negri di Surabaya dan saya lulusan dari jurusan Rekayasa Perangkat Lunak. Ketika saya sekolah saya memiliki berbagai pengalaman dalam web developer. Sekarang saya bekerja pada
            suatu perusahaan IT Solution yaitu PT ITPI Technology yang berlokasi di Manyar, Surabaya sebagai Programmer.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
