export default function AboutUsPage() {
  const features = [
    {
      title: "Diverse Activities",
      description:
        "From go-karting and paintball to VR experiences and trampoline parks, there's something for everyone.",
      icon: "🎮",
    },
    {
      title: "Event Hosting",
      description:
        "Customized packages for birthdays, corporate events, and special occasions.",
      icon: "🎉",
    },
    {
      title: "Food & Beverage",
      description: "A variety of dining options to refuel and relax.",
      icon: "🍕",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 pt-20">
      {/* Hero */}
      <section className="relative bg-[url('/images/playarena-bg.jpg')] bg-cover bg-center h-64 flex items-center justify-center">
        <div className="bg-black bg-opacity-50 p-6 rounded-xl">
          <h2 className="text-4xl md:text-5xl text-white font-bold text-center">
            Where Play Never Ends!
          </h2>
        </div>
      </section>

      {/* About Us */}
      <section className="max-w-5xl mx-auto py-12 px-4 md:px-8">
        <h3 className="text-3xl font-semibold text-orange-600 mb-6">
          About Play Arena
        </h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Since 2011, Play Arena has been Bangalore’s ultimate destination for
          adventure, sports, and entertainment. We’re a vibrant hub for
          thrill-seekers, sports lovers, and families looking to create
          unforgettable memories.
        </p>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Whether you crave high-speed action, immersive games, or simply a
          chill spot with great food, Play Arena has it all. With a wide range
          of activities and dining options, there's something here for everyone.
        </p>
      </section>

      {/* Mission */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-2xl font-bold text-orange-600 mb-4">
            Our Mission
          </h4>
          <p className="text-gray-700 text-lg leading-relaxed">
            To inspire and develop athletes to reach their full potential and
            achieve their sporting goals.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h3 className="text-2xl font-semibold text-orange-600 mb-8 text-center">
          What We Offer
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white p-4 text-center text-sm text-gray-500">
        © 2025 PlayArena. All rights reserved.
      </footer>
    </div>
  );
}
