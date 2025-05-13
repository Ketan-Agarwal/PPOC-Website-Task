'use client';
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ActivityCard from "./ActivityCard";
import SpeakerCard from "./SpeakerCard";
import content from "@/config/content";
export default function PastSpeakers() {

    return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block text-center justify-center w-full">
        <h1 className="text-2xl lg:text-4xl font-bold underline pb-10">Our Past Speakers.</h1>
        <div className="flex flex-wrap gap-4 justify-center">
            <Swiper
            className="ml-3 w-full justify-center gap-2"
        spaceBetween={3}
        slidesPerView={4}
        navigation
        modules={[Navigation]}
        loop={true}
        centerInsufficientSlides={true}
        centeredSlidesBounds={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
            // When the screen width is >= 0px (small screens)
            0: {
              slidesPerView: 1, // Show 1 slide per view
            },
            // When the screen width is >= 768px (medium screens)
            768: {
              slidesPerView: 2, // Show 2 slides per view
            },
            // When the screen width is >= 1024px (large screens)
            1024: {
              slidesPerView: 4, // Show 4 slides per view
            },
          }}
      >
        {content.pastSepakers.map((speaker, index) => (
          <SwiperSlide key={index} className="">
            <SpeakerCard key={index} name={speaker.name} image={speaker.image}/>
            </SwiperSlide>)
            )}
            
      </Swiper>
</div>
    </div>    
    </section>
  );
}