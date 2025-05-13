'use client';
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/react";
import ActivityCard from "./ActivityCard";
import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'; // if you're using navigation
import 'swiper/css/pagination'; // if using pagination
import 'swiper/css/autoplay';
import 'swiper/css/effect-cards';
import BlogCard from "./BlogCard";
import content from "@/config/content";
export default function Blogs() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block text-center justify-center w-full">
            <h1 className="text-2xl lg:text-4xl font-bold underline pb-10">Recent Blogs.</h1>
            {/* <p className="text-lg">Stay updated with our latest activities.</p> */}
            <div className="flex flex-wrap gap-4 justify-center px-2">
            <Swiper
            className="ml-3 w-full justify-center gap-2"
        spaceBetween={3}
        slidesPerView={4}
        navigation
        centerInsufficientSlides={true}
        centeredSlidesBounds={true}
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {content.blogs.map((blog, index) => (
          <SwiperSlide key={index} className="">
            <BlogCard
              title={blog.title}
              description={blog.description}
              image={blog.image}
              link={blog.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
            </div>
        </div>
        </section>
    );
    }