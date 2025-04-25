import ActivityCategories from "./ActivityCategories";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden" id="home">
      <div className="relative h-[77vh] w-full">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
        <div className="z-20 relative h-full flex items-center justify-center">
          <div className="text-white text-3xl font-semibold">Let’s Play!</div>
        </div>
      </div>
      <ActivityCategories />
    </section>
  );
};

export default Hero;
