import React, { useState } from "react";
import {
  Instagram,
  Youtube,
  Facebook,
  Linkedin,
  Send,
  AlertCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) {
      setError(true);
      return;
    }
    console.log("Subscribed:", email);
    setError(false);
    setEmail("");
  };

  return (
    <footer className="bg-black text-white px-6 md:px-16 py-12 text-sm">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Never miss an update
          </h2>
          <p className="font-semibold mb-2">Subscribe to our Newsletter</p>

          <div className="flex items-center bg-white rounded overflow-hidden w-full max-w-sm">
            <input
              type="email"
              placeholder="Enter Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 text-black flex-grow outline-none"
              required
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600"
              onClick={handleSubscribe}
            >
              <Send size={20} />
            </button>
          </div>

          {error && (
            <div className="flex items-start text-red-500 gap-2 mt-2 text-sm">
              <AlertCircle size={16} className="mt-0.5" />
              <span>This field is required and must be a valid email.</span>
            </div>
          )}
        </div>

        <div>
          <h4 className="font-bold mb-2 text-xl">
            Play Arena Sports & Adventure Pvt. Ltd.
          </h4>
          <p className="text-gray-300 leading-relaxed mb-4">
            Address-I live here my name is doraemon 303 yashakuri village japan
            in cartoons
          </p>
          <div className="flex items-center gap-4 text-white">
            <Instagram className="w-5 h-5 hover:text-pink-500 cursor-pointer" />
            <Youtube className="w-5 h-5 hover:text-red-500 cursor-pointer" />
            <Facebook className="w-5 h-5 hover:text-blue-500 cursor-pointer" />
            <Linkedin className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-gray-300">
          <div>
            <p className="font-bold text-white text-xl">Play</p>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/activities/pixel"
                  className="text-white hover:text-blue-600 font-medium"
                >
                  Pixel
                </Link>
              </li>
              <li>
                <Link
                  to="/activities/studio"
                  className="text-white hover:text-blue-600 font-medium"
                >
                  Studio
                </Link>{" "}
              </li>
              <Link
                to="/activities/union"
                className="text-white hover:text-blue-600 font-medium"
              >
                Union
              </Link>{" "}
              <li>
                <Link
                  to="/activities/junior"
                  className="text-white hover:text-blue-600 font-medium"
                >
                  Junior
                </Link>{" "}
              </li>
              <li>
                <Link
                  to="/activities/prime"
                  className="text-white hover:text-blue-600 font-medium"
                >
                  Prime
                </Link>
              </li>
            </ul>
            <p className="font-bold text-white mt-4 text-xl">
              Food & Beverages
            </p>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/foodcourt"
                  className="text-white hover:text-blue-600 font-medium"
                >
                  Foodcourt
                </Link>
              </li>
              <li>
                <Link
                  to="/restaurant"
                  className="text-white hover:text-blue-600 font-medium"
                >
                  Restaurant
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-white mt-4 text-xl">Host</p>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/events"
                  className="text-white hover:text-blue-600 font-medium"
                >
                  Planning
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-white hover:text-blue-600 font-medium"
                >
                  Business
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-white hover:text-blue-600 font-medium"
                >
                  Bookings
                </Link>
              </li>
            </ul>
            <p className="font-bold text-white mt-4 text-xl">Contact</p>
            <ul className="space-y-1">
              <li className="text-blue-400">2420295835634</li>
              <li className="text-blue-400">email@playarena.in</li>
              <li className="text-blue-400">Get Directions</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-400 text-xs">
        <p className="mb-2">Copyright © 2025. All rights reserved.</p>
        <div className="space-x-4">
          <a href="#" className="hover:text-white">
            Disclaimer
          </a>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            About Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
