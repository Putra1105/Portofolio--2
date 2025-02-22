import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Zahra Likha Prasetyo',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repudiandae harum rem expedita ea veritatis provident enim tenetur eius quae, cupiditate quam sint dicta vitae asperiores accusantium dolores animi non.',
  },
  {
    avatar: AVTR2,
    name: 'Vito Ramadhan Dwi Liman Jaya',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repudiandae harum rem expedita ea veritatis provident enim tenetur eius quae, cupiditate quam sint dicta vitae asperiores accusantium dolores animi non.',
  },
  {
    avatar: AVTR3,
    name: 'Ryan Alfin Saputra',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repudiandae harum rem expedita ea veritatis provident enim tenetur eius quae, cupiditate quam sint dicta vitae asperiores accusantium dolores animi non.',
  },
  {
    avatar: AVTR4,
    name: 'M Ridwan Saputra',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repudiandae harum rem expedita ea veritatis provident enim tenetur eius quae, cupiditate quam sint dicta vitae asperiores accusantium dolores animi non.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container testimonials_container"
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="Avatar 1" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_riview">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
