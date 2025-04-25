import React from "react";

export default function RestaurantPage() {
  return (
    <div className="bg-white text-gray-800">
      <section className="relative h-64 bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            Restaurant at PLaY
          </h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-10 px-4 text-center">
        <p className="text-lg text-gray-700">
          From tasty continental bites to refreshing sips, dive into a
          fun-filled flavor fest that’s sure to satisfy your cravings and keep
          the good vibes flowing!
        </p>
        <p className="mt-4 text-orange-600 font-semibold">
          Call Us on 9935935935939593599
        </p>
      </section>

      <footer className="bg-gray-100 text-center text-sm text-gray-500 py-4">
        © 2025 PlayArena. All rights reserved.
      </footer>
    </div>
  );
}
