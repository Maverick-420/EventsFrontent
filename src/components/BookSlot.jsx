import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarDays, Clock, Car, Train } from "lucide-react";

const BookSlot = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <section className="bg-gray-50 text-white px-4 md:px-8 lg:px-20 py-12 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-black text-4xl md:text-5xl font-extrabold mb-2">
          Book your slots
        </h2>
        <p className="text-black mb-6 text-base md:text-lg">
          To find special offers, occupancy rates and free time
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
          <div className="flex items-center bg-lime-200 text-black px-4 py-3 rounded-md">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="EEEE, dd MMMM yyyy"
              className="bg-lime-100 outline-none w-full cursor-pointer"
            />
            <CalendarDays className="ml-2 h-5 w-5 text-black" />
          </div>
          <p className="text-black text-sm md:text-base">
            <span className="font-semibold">Average wait time 5–10mins</span>,
            pre booking activities is recommended
          </p>
        </div>

        <hr className="text-black my-6 max-w-4xl mx-auto" />

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm md:text-base max-w-5xl mx-auto">
          <div className="text-black text-left sm:col-span-2 md:col-span-1">
            <p className="font-extrabold leading-tight">
              PLAN YOUR
              <br />
              DAY AT PLAY
            </p>
          </div>

          <div>
            <div className="flex items-start space-x-2">
              <Clock className="h-5 w-5 text-white mt-0.5" />
              <div>
                <p className="font-semibold text-lime-400">Activities</p>
                <p className="text-black">6:00 AM – 11:00 PM</p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-start space-x-2">
              <Clock className="h-5 w-5 text-white mt-0.5" />
              <div>
                <p className="font-semibold text-lime-400">F&B Timings</p>
                <p className="text-black">10:00 AM – 11:00 PM</p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-start ">
              <Car className="h-5 w-5 text-white mt-0.5" />
              <div>
                <p className="font-semibold text-lime-400">Personal Vehicles</p>
                <p className="text-black">Parking available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSlot;
