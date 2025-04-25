const Events = () => {
  return (
    <div className="bg-white text-gray-800">
      <section className="relative h-64 bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            Let's Plan Events
          </h1>
        </div>
      </section>

      <section className="relative h-20 bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex-col items-center justify-center">
          <p className="text-sm text-white font-bold">
            Put your game-face on! Paintball shootouts, laser tag battles,
            football tournaments and more — join our championships or give us a
            call to organise one just for your gang of friends. Choose your side
            and fight it out in a range of events organised by Play. Put your
            game-face on! Paintball shootouts, laser tag battles, football
            tournaments and more — join our championships or give us a call to
            organise one just for your gang of friends. Choose your side and
            fight it out in a range of events organised by Play.
          </p>
        </div>
      </section>

      <section className="bg-white py-8 px-6">
        <div className="text-center text-xl font-bold text-black">
          0 Events Found
        </div>
      </section>
      <footer className="bg-gray-100 text-center text-sm text-gray-500 py-4">
        © 2025 PlayArena. All rights reserved.
      </footer>
    </div>
  );
};

export default Events;
