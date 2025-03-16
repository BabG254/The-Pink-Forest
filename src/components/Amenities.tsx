import React from 'react';
import { Wifi, Power, Coffee, Armchair as Wheelchair, CreditCard, ParkingSquare } from 'lucide-react';

const Amenities = () => {
  return (
    <section className="py-20 bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Accessibility Information */}
          <div>
            <h2 className="text-3xl font-display font-bold mb-8">Accessibility</h2>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="space-y-6">
                <div className="flex items-center">
                  <Wheelchair className="w-6 h-6 text-pink-500 mr-4" />
                  <div>
                    <h3 className="font-semibold">Wheelchair Accessible</h3>
                    <p className="text-gray-600">Ramp access at entrance, wide doorways, and accessible seating</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <ParkingSquare className="w-6 h-6 text-pink-500 mr-4" />
                  <div>
                    <h3 className="font-semibold">Accessible Parking</h3>
                    <p className="text-gray-600">Designated parking spots close to entrance</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <CreditCard className="w-6 h-6 text-pink-500 mr-4" />
                  <div>
                    <h3 className="font-semibold">Payment Options</h3>
                    <p className="text-gray-600">All major credit cards accepted, M-Pesa, and contactless payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Working & Solo Dining */}
          <div>
            <h2 className="text-3xl font-display font-bold mb-8">Perfect for Work & Solo Dining</h2>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="space-y-6">
                <div className="flex items-center">
                  <Wifi className="w-6 h-6 text-pink-500 mr-4" />
                  <div>
                    <h3 className="font-semibold">High-Speed WiFi</h3>
                    <p className="text-gray-600">Complimentary high-speed internet for all guests</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Power className="w-6 h-6 text-pink-500 mr-4" />
                  <div>
                    <h3 className="font-semibold">Power Outlets</h3>
                    <p className="text-gray-600">Multiple charging points at every table</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Coffee className="w-6 h-6 text-pink-500 mr-4" />
                  <div>
                    <h3 className="font-semibold">Solo Dining Comfort</h3>
                    <p className="text-gray-600">Comfortable single seating options and bar-style window seats</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;