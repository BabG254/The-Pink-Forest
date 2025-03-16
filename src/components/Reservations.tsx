import React, { useState } from 'react';
import type { ReservationTime } from '../types';
import { Calendar, Clock, Users } from 'lucide-react';

const availableTimes: ReservationTime[] = [
  { id: '1', time: '10:00', available: true },
  { id: '2', time: '11:00', available: true },
  { id: '3', time: '12:00', available: false },
  { id: '4', time: '13:00', available: true },
  { id: '5', time: '14:00', available: true },
  { id: '6', time: '15:00', available: true },
  { id: '7', time: '16:00', available: true },
  { id: '8', time: '17:00', available: false },
];

const Reservations = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [guests, setGuests] = useState(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle reservation submission
    console.log({ selectedDate, selectedTime, guests });
  };

  return (
    <section id="reservations" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-display font-bold text-center mb-12">Make a Reservation</h2>
        
        <form onSubmit={handleSubmit} className="bg-beige-50 rounded-lg p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                <Calendar className="inline-block w-5 h-5 mr-2" />
                Select Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                <Clock className="inline-block w-5 h-5 mr-2" />
                Select Time
              </label>
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                required
              >
                <option value="">Choose a time</option>
                {availableTimes.map(timeSlot => (
                  <option
                    key={timeSlot.id}
                    value={timeSlot.time}
                    disabled={!timeSlot.available}
                  >
                    {timeSlot.time}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                <Users className="inline-block w-5 h-5 mr-2" />
                Number of Guests
              </label>
              <input
                type="number"
                min="1"
                max="10"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Special Requests</label>
              <textarea
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                rows={3}
                placeholder="Any dietary requirements or special occasions?"
              ></textarea>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              type="submit"
              className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-colors"
            >
              Confirm Reservation
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Reservations;