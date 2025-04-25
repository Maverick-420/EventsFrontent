import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const events = [
  {
    title: "Egg & Seek",
    subtitle: "Let the easter adventure begin!",
    date: "18th April 2025, 12 PM onwards",
    image: "/images/theperfectshot.png",
    description:
      "Let the Easter adventure begin on 18th April, 12 PM onwards! Hunt for eggs, meet the Easter Bunny, and enjoy a day filled with surprises, laughter & festive fun!",
  },
  {
    title: "Egg & Seek",
    subtitle: "Let the easter adventure begin!",
    date: "18th April 2025, 12 PM onwards",
    image: "/images/theperfectshot.png",
    description:
      "Let the Easter adventure begin on 18th April, 12 PM onwards! Hunt for eggs, meet the Easter Bunny, and enjoy a day filled with surprises, laughter & festive fun!",
  },
  {
    title: "Egg & Seek",
    subtitle: "Let the easter adventure begin!",
    date: "18th April 2025, 12 PM onwards",
    image: "/images/theperfectshot.png",
    description:
      "Let the Easter adventure begin on 18th April, 12 PM onwards! Hunt for eggs, meet the Easter Bunny, and enjoy a day filled with surprises, laughter & festive fun!",
  },
  {
    title: "Egg & Seek",
    subtitle: "Let the easter adventure begin!",
    date: "18th April 2025, 12 PM onwards",
    image: "/images/glowitgrowit.png",
    description:
      "Let the Easter adventure begin on 18th April, 12 PM onwards! Hunt for eggs, meet the Easter Bunny, and enjoy a day filled with surprises, laughter & festive fun!",
  },
  {
    title: "Egg & Seek",
    subtitle: "Let the easter adventure begin!",
    date: "18th April 2025, 12 PM onwards",
    image: "/images/legendsgotlatent.png",
    description:
      "Let the Easter adventure begin on 18th April, 12 PM onwards! Hunt for eggs, meet the Easter Bunny, and enjoy a day filled with surprises, laughter & festive fun!",
  },

  {
    title: "Paw-some day out",
    subtitle: "A fun day out with your furry friend!",
    date: "11th April 2025, 12 PM onwards",
    image: "/images/paw.png",
    description:
      "Bring your furry friend for a fun-filled day on 11th April, 12 PM onwards! Enjoy games, treats, and tail-wagging fun because every pet deserves a special day out!",
  },
];

const NowPlaying = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-white">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={16}
        slidesPerView="auto"
        navigation
        autoplay={{ delay: 4000 }}
        loop
      >
        {events.map((event, index) => (
          <SwiperSlide key={index} className="!w-[320px] md:!w-[400px]">
            <div className="bg-white rounded shadow hover:shadow-lg transition-all duration-300">
              <div className="w-full h-60 overflow-hidden rounded-t">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-700">{event.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default NowPlaying;
