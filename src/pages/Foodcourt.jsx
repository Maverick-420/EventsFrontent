const foodItems = [
  { name: "Pizza", img: "/images/pizza.jpg" },
  { name: "Burger", img: "/images/burger.jpg" },
  { name: "Chaats and More", img: "/images/chaat.jpg" },
  { name: "SouthIndian", img: "/images/southindian.jpg" },
  { name: "Drinks", img: "/images/drinks.jpg" },
  { name: "Desserts", img: "/images/desserts.jpg" },
];

const Foodcourt = () => {
  return (
    <div className="min-h-screen/Asz bg-gray-100 text-gray-800">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange-600">
          PlayArena Foodcourt
        </h1>
        <nav className="space-x-4">
          <a href="#" className="text-gray-600 hover:text-orange-600">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-orange-600">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-orange-600">
            Contact
          </a>
        </nav>
      </header>

      <section className="relative bg-[url('/images/foodcourt-bg.jpg')] bg-cover bg-center h-60 flex items-center justify-center">
        <div className="bg-black bg-opacity-50 p-6 rounded-xl">
          <h2 className="text-3xl md:text-5xl text-white font-bold text-center">
            Discover Great Food Options
          </h2>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-10 px-4">
        <h3 className="text-2xl font-semibold mb-6 text-orange-600">
          Explore Food Stalls
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {foodItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold">{item.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-white p-4 text-center text-sm text-gray-500">
        © 2025 PlayArena Foodcourt. All rights reserved.
      </footer>
    </div>
  );
};

export default Foodcourt;
