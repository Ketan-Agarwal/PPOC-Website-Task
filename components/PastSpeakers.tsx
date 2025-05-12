'use client';
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ActivityCard from "./ActivityCard";
import SpeakerCard from "./SpeakerCard";

export default function PastSpeakers() {
    const speakers = [
        {
            name: "Dr. Arvind Subramanian",
            title: "Former Chief Economic Advisor",
            image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKqIg3pZGnGVuDbO7piYwe2EBzDMOcMohDv5sIWQ-tnD7ruRla",
            description: "Discussed India’s fiscal reforms and public policy vision.",
          },
          {
            name: "Prof. Raghuram Rajan",
            title: "Ex-RBI Governor",
            image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKqIg3pZGnGVuDbO7piYwe2EBzDMOcMohDv5sIWQ-tnD7ruRla",
            description: "Talked about economic resilience post-pandemic.",
          },
          {
            name: "Justice Chandrachud",
            title: "Chief Justice of India",
            image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKqIg3pZGnGVuDbO7piYwe2EBzDMOcMohDv5sIWQ-tnD7ruRla",
            description: "Engaged on constitutionality and judicial activism.",
          }, {
            name: "Dr. Arvind Subramanian",
            title: "Former Chief Economic Advisor",
            image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKqIg3pZGnGVuDbO7piYwe2EBzDMOcMohDv5sIWQ-tnD7ruRla",
            description: "Discussed India’s fiscal reforms and public policy vision.",
          },
          {
            name: "Prof. Raghuram Rajan",
            title: "Ex-RBI Governor",
            image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKqIg3pZGnGVuDbO7piYwe2EBzDMOcMohDv5sIWQ-tnD7ruRla",
            description: "Talked about economic resilience post-pandemic.",
          },
          {
            name: "Justice Chandrachud",
            title: "Chief Justice of India",
            image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKqIg3pZGnGVuDbO7piYwe2EBzDMOcMohDv5sIWQ-tnD7ruRla",
            description: "Engaged on constitutionality and judicial activism.",
          },
        // Add more...
      ];
      
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
        modules={[Autoplay, Navigation, Pagination]}
        pagination={{ clickable: true, type: "fraction" }}
        loop={true}
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
        {speakers.map((speaker, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <SpeakerCard key={index} name={speaker.name} image={speaker.image}/>
            </SwiperSlide>)
            )}
            
      </Swiper>
</div>
    </div>    
    </section>
  );
}