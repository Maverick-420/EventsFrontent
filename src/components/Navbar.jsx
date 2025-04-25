import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const dropdownItems = {
  play: [
    {
      label: "Pixel Zone",
      desc: "VR, racing, and classic games in one space.",
      to: "/activities/pixel",
    },
    {
      label: "Studio",
      desc: "Quick games, fast thrills.",
      to: "/activities/studio",
    },
    {
      label: "Union Sports",
      desc: "Football, cricket, and more.",
      to: "/activities/union",
    },
    {
      label: "Junior Champs",
      desc: "Fun zone for kids.",
      to: "/activities/junior",
    },
    {
      label: "Prime Activities",
      desc: "Paintball, laser tag & tactical action.",
      to: "/activities/prime",
    },
  ],
  participate: [
    {
      label: "Learn & Master",
      desc: "Train with experts, level up your game.",
      to: "/events",
    },
    {
      label: "Events at Play",
      desc: "Join tournaments, contests & more.",
      to: "/events",
    },
  ],
  host: [
    {
      label: "Birthdays",
      desc: "Custom birthday party experiences.",
      to: "/events",
    },
    {
      label: "Corporate Events",
      desc: "Team-building with a twist.",
      to: "/events",
    },
    {
      label: "Plan Your Event",
      desc: "Make your celebration unforgettable.",
      to: "/events",
    },
  ],
  food: [
    {
      label: "Food Court",
      desc: "Quick bites and tasty treats.",
      to: "/foodcourt",
    },
    {
      label: "Restaurant",
      desc: "Sit down and dine in style.",
      to: "/restaurant",
    },
  ],
};

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleEnter = (menu) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <nav className="w-full bg-black shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-700">
          <img src="logo.svg" alt="PLAYARENA" />
        </Link>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        <div className="hidden md:flex space-x-6 items-center relative">
          <div
            onMouseEnter={() => handleEnter("play")}
            onMouseLeave={handleLeave}
            className="relative"
          >
            <button className="text-white hover:text-blue-600 font-medium flex items-center">
              Play <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {activeDropdown === "play" && (
              <DropdownMenu items={dropdownItems.play} />
            )}
          </div>

          <div
            onMouseEnter={() => handleEnter("participate")}
            onMouseLeave={handleLeave}
            className="relative"
          >
            <button className="text-white hover:text-blue-600 font-medium flex items-center">
              Participate <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {activeDropdown === "participate" && (
              <DropdownMenu items={dropdownItems.participate} />
            )}
          </div>

          <div
            onMouseEnter={() => handleEnter("host")}
            onMouseLeave={handleLeave}
            className="relative"
          >
            <button className="text-white hover:text-blue-600 font-medium flex items-center">
              Host <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {activeDropdown === "host" && (
              <DropdownMenu items={dropdownItems.host} />
            )}
          </div>

          <div
            onMouseEnter={() => handleEnter("food")}
            onMouseLeave={handleLeave}
            className="relative"
          >
            <button className="text-white hover:text-blue-600 font-medium flex items-center">
              F&B <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {activeDropdown === "food" && (
              <DropdownMenu items={dropdownItems.food} />
            )}
          </div>

          <Link
            to="/about"
            className="text-white hover:text-blue-600 font-medium"
          >
            About Us
          </Link>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-black shadow-md absolute top-full left-0 w-full z-40">
          <div className="flex flex-col space-y-4 p-4">
            <Link
              to="/activities/pixel"
              className="font-medium hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Play
            </Link>
            <Link
              to="/events"
              className="font-medium hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Participate
            </Link>
            <Link
              to="/events"
              className="font-medium hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Host
            </Link>
            <Link
              to="/foodcourt"
              className="font-medium hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              F&B
            </Link>
            <Link
              to="/about"
              className="font-medium hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const DropdownMenu = ({ items }) => {
  return (
    <div className="absolute top-10 left-0 w-72 bg-white shadow-xl rounded-md p-2 z-50 space-y-2">
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.to}
          className="block px-4 py-2 hover:bg-blue-50 rounded-md"
        >
          <div className="font-semibold text-sm">{item.label}</div>
          <div className="text-xs text-gray-500">{item.desc}</div>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
