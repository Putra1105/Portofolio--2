import React from 'react';
import './header.css';
import CTA from './CTA';
import PUTRA from '../../assets/PasFotoPutra.png';
import HeaderSocial from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Putra Rizky Ramadhan</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={PUTRA} alt="Putra Rizky Ramadhan" className="me-img" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
