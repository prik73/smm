import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { Card, CardContent } from "@/components/ui/card";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import im1 from "../assets/images/hero/one.jpg";
import im2 from "../assets/images/hero/two.jpg";
import im3 from "../assets/images/hero/three.jpg";
import im4 from "../assets/images/hero/four.jpg";
import im5 from "../assets/images/hero/five.jpg";
import im6 from "../assets/images/hero/six.jpg";

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
    },
    {
      image: im3,
      title: 'Building a Brighter Future Together',
      description: 'Join us in our mission to bring about social change in the world'
    },
    {
      image: im4,
      title: 'Building a Brighter Future Together',
      description: 'Join us in our mission to bring about social change in the world'
    },
    {
      image: im5,
      title: 'Building a Brighter Future Together',
      description: 'Join us in our mission to bring about social change in the world'
    },
    {
      image: im6,
      title: 'Building a Brighter Future Together',
      description: 'Join us in our mission to bring about social change in the world'
    }
  ];

  return (
    <section className="w-full hero-slider">
      <style>
        {`
          .hero-slider .swiper-button-next,
          .hero-slider .swiper-button-prev {
            color: #fff;
            transform: scale(0.7);
            transition: all 0.3s ease;
          }

          @media (max-width: 640px) {
            .hero-slider .swiper-button-next,
            .hero-slider .swiper-button-prev {
              transform: scale(0.5);
            }
          }

          .hero-slider .swiper-button-next:hover,
          .hero-slider .swiper-button-prev:hover {
            transform: scale(0.8);
            color: #f0f0f0;
          }

          .hero-slider .swiper-pagination-bullet {
            background: #fff;
            opacity: 0.7;
          }

          .hero-slider .swiper-pagination-bullet-active {
            opacity: 1;
            background: #fff;
          }

          .backdrop-blur-card {
            backdrop-filter: blur(2px);
            background-color: rgba(255, 255, 255, 0.2);
          }
        `}
      </style>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        className="w-full h-[500px] sm:h-[600px] md:h-[700px]"
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
                <Card className="max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl backdrop-blur-card border-0 mt-[75%] sm:mt-[50%] md:mt-[55%] lg:mt-[490px]">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <div className="text-white text-center">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 md:mb-6 tracking-tight">
                        {slide.title}
                      </h2>
                      <p className="text-sm sm:text-base md:text-xl text-gray-100">
                        {slide.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;