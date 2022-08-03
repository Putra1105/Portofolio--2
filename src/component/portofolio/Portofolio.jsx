import React from 'react';
import './portofolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/PRTZ',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Charts Templates & Infografis in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/PRTZ',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Figma Dashboard UI Kit for Data Design Web Apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/PRTZ',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Maintaining Taks & Tracking Progress',
    github: 'https://github.com',
    demo: 'https://dribbble.com/PRTZ',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Chart Templates & Infografis in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/PRTZ',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Maintaining Taks & Tracking Progress',
    github: 'https://github.com',
    demo: 'https://dribbble.com/PRTZ',
  },
];

const Portofolio = () => {
  return (
    <section id="portofolio">
      <h5>My Recent Study</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portofolio_item">
              <div className="portofolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portofolio_item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portofolio;
