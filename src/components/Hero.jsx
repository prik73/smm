import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import im1 from "../assets/images/two.jpg"
import im2 from "../assets/images/three.jpg"


const Hero = () => {
  const slides = [
    {
      image: im1,
      title: 'Building a Brighter Future Together',
      description: 'Join us in our mission to bring about social change in the world.'
    },
    {
      image: im2,
      title: 'Building a Brighter Future Together',
      description: 'Join us in our mission to bring about social change in the world'
    }
    // Add more slides
  ];

  return (
    <section className="w-full hero-slider">
      <style>
        {`
          .hero-slider .swiper-button-next,
          .hero-slider .swiper-button-prev {
            color: #808080;
            transform: scale(0.7);
          }

          .hero-slider .swiper-button-next:hover,
          .hero-slider .swiper-button-prev:hover {
            color: #606060;
          }

          .hero-slider .swiper-pagination-bullet {
            background: #808080;
          }

          .hero-slider .swiper-pagination-bullet-active {
            background: #606060;
          }
        `}
      </style>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false,  }}
        className="w-full h-[700px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-white text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-xl">{slide.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;