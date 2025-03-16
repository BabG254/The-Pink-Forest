import React from 'react';
import type { SpecialOffer } from '../types';

const offers: SpecialOffer[] = [
  {
    id: '1',
    title: 'Friday Afternoon Tea Special',
    description: 'Enjoy our signature afternoon tea set with a selection of pastries and sandwiches at 20% off',
    validUntil: '2024-12-31',
    image: 'https://images.unsplash.com/photo-1587080413959-06b859fb107d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'Weekend Brunch Bundle',
    description: 'Get a complimentary glass of fresh juice with any brunch main course',
    validUntil: '2024-12-31',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80'
  },
];

const SpecialOffers = () => {
  return (
    <section className="py-20 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-display font-bold text-center mb-12">Special Offers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map(offer => (
            <div
              key={offer.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:-translate-y-1"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{offer.title}</h3>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <p className="text-sm text-pink-600">
                  Valid until: {new Date(offer.validUntil).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;