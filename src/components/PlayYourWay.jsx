import { Link } from "react-router-dom";

const playItems = [
  {
    icon: "/images/birthday.webp",
    title: "Birthday Bashes",
    desc: "Thrilling activities, exciting games, and delicious food—our custom packages ensure unforgettable experiences for all ages!",
    link: "/birthdays",
  },
  {
    icon: "/images/corporate.webp",
    title: "Corporate Events",
    desc: "Nothing like a game to get the teamwork going. Talk to us to find out more about our corporate packages for offsites, team building activities, leadership meets, outbound learning and more.",
    link: "/corporate-events",
  },
  {
    icon: "/images/dates.webp",
    title: "Play Dates",
    desc: "Experience Play Dates, any day of the week, enjoy this special offer and quality time with your partner. Perfect for fun and connection!",
    link: "/play-dates",
  },
];

const PlayYourWay = () => {
  return (
    <section className="bg-[#f7d2b7a6] py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Play, Your Way
        </h2>
        <p className="text-black max-w-3xl mx-auto mb-10">
          When it comes to get-togethers, the more is always the merrier. You
          bring the people, we’ll take care of the rest. Customized birthdays,
          farewells, anniversaries and other group packages with entertainment,
          music, and fantastic food & drinks.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {playItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-trasnsparent rounded-xl overflow-hidden  hover:shadow-lg transition-all duration-300"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-black mb-4">{item.desc}</p>
                <Link
                  to={item.link}
                  className="inline-flex items-center justify-center px-5 py-2 border border-black rounded-lg text-black font-medium hover:bg-black hover:text-white transition-all duration-300"
                >
                  Find out more
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="text-black mb-3">
            Have an offbeat idea? Create your own event, fully customised!
          </p>
          <Link
            to={playItems.link}
            className="inline-flex items-center justify-center px-5 py-2 border border-black rounded-lg text-black font-medium hover:bg-black hover:text-white transition-all duration-300"
          >
            Lets Do it
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlayYourWay;
