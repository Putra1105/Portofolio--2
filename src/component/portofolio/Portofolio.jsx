import React from 'react';
import './portofolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';
import NoImage from '../../assets/NoImage.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'E-Procurement Unilever Olechemical Indonesia',
    demo: 'https://unioleo-eprocurement.com/#/home',
  },
  {
    id: 2,
    image: IMG2,
    title: 'E-Procurement Astra Otoparts',
    demo: 'https://eproc.component.astra.co.id',
  },
  {
    id: 3,
    image: IMG3,
    title: 'E-Procurement Trakindo',
    demo: 'https://eprocurement.trakindo.co.id',
  },
  {
    id: 4,
    image: IMG4,
    title: 'UI Library Stepper',
    github: 'https://github.com/Putra1105/StepperUI',
    demo: 'https://putra1105.github.io/StepperUI/',
  },
  {
    id: 5,
    image: IMG5,
    title: 'GoFutsal',
    github: 'https://github.com/Putra1105/GoFutsal',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Antares Employee List',
    github: 'https://github.com/Putra1105/AntaresEmployeList',
    demo: 'https://antaresemployelist.netlify.app/',
  },
];

const Portofolio = () => {
  return (
    <section id="portofolio">
      <h5>My Recent Project</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portofolio_item">
              {image != null ? (
                <div className="portofolio_item-image">
                  <img src={image} alt={title} />
                </div>
              ) : null}
              <h3>{title}</h3>
              <div className="portofolio_item-cta">
                {github != null ? (
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                ) : null}
                {demo != null ? (
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Website
                  </a>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portofolio;
