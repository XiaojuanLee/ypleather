'use client';
import Navbar from "@/components/navbar/Navbar"
import { useState } from "react";

export default function CardHolderWorkshop() {

    const [selectedColor, setSelectedColor] = useState('');
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const days = Array.from({ length: 7 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() + i + 1);
      return date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
    });
    const times = ['1 PM', '2 PM', '3 PM', '4 PM', '5 PM'];
  
    const handleBooking = () => {
      if (selectedColor && selectedDay && selectedTime) {
        alert(`Booked for ${selectedDay} at ${selectedTime} with color ${selectedColor}`);
      } else {
        alert('Please select all options!');
      }
    };

    return (
        <div>
            <Navbar></Navbar>
            <main className="pt-16">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 p-10">
                {/* Left Side: Product Image */}
                <div className="w-full lg:w-1/2">
                    <img
                    src="/images/cardholder.jpg"
                    alt="Workshop Product"
                    className="w-full h-auto rounded shadow-lg object-cover"
                    />
                </div>

                {/* Right Side: Selection Options */}
                <div className="w-full lg:w-1/2 bg-white p-6 rounded shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Workshop Title</h2>
                    <p className="text-gray-600 mb-6">Description of the workshop and what it offers.</p>

                    {/* Select Color */}
                    <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Color</label>
                    <select
                        value={selectedColor}
                        onChange={(e) => setSelectedColor(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="" disabled>Select a color</option>
                        <option value="Red">Red</option>
                        <option value="Blue">Blue</option>
                        <option value="Green">Green</option>
                        <option value="Yellow">Yellow</option>
                    </select>
                    </div>

                    {/* Select Day */}
                    <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Day</label>
                    <select
                        value={selectedDay}
                        onChange={(e) => setSelectedDay(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="" disabled>Select a day</option>
                        {days.map((day, index) => (
                        <option key={index} value={day}>
                            {day}
                        </option>
                        ))}
                    </select>
                    </div>

                    {/* Select Time */}
                    <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Time</label>
                    <select
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="" disabled>Select a time</option>
                        {times.map((time, index) => (
                        <option key={index} value={time}>
                            {time}
                        </option>
                        ))}
                    </select>
                    </div>

                    {/* Book Button */}
                    <button
                    onClick={handleBooking}
                    className="w-full py-2 px-4 bg-[#42563b] text-white rounded hover:bg-[#5a7853] transition"
                    >
                    Book Now
                    </button>
                </div>
                </div>
            </main>
        </div>
    )
}