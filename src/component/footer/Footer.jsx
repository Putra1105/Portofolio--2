import React from 'react';
import './footer.css';
import { ImFacebook } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        PUTRA
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portofolio">Portofolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/putra.rizky.9085">
          <ImFacebook />
        </a>
        <a href="https://www.instagram.com/putrarizkyrm/">
          <BsInstagram />
        </a>
        <a href="https://x.com/mnsiaaneh">
          <BsTwitter />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Putra Rizky Ramadhan. All right reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
