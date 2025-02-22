import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/putra-rizky-ramadhan-5388ba285/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Putra1105" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
