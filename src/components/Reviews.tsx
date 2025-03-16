import React from 'react';
import type { Review } from '../types';
import { Star } from 'lucide-react';

const reviews: Review[] = [
  {
    id: '1',
    author: 'Sarah M.',
    content: 'The best vegan desserts I\'ve ever had! The atmosphere is perfect for working remotely.',
    rating: 5,
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    author: 'James K.',
    content: 'Love the quiet corners for solo dining. Their Buddha Bowl is absolutely delicious!',
    rating: 5,
    date: '2024-03-10',
    image: 'https://images.unsplash.com/photo-1546007600-8c2e5a9b8ea7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    author: 'Michelle W.',
    content: 'Great wheelchair accessibility and friendly staff. The outdoor seating is lovely!',
    rating: 4,
    date: '2024-03-05'
  }
];

const Reviews = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-display font-bold text-center mb-12">Customer Reviews</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map(review => (
            <div
              key={review.id}
              className="bg-beige-50 rounded-lg p-6 shadow-lg transform transition-transform hover:-translate-y-1"
            >
              {review.image && (
                <img
                  src={review.image}
                  alt="Review"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`w-5 h-5 ${
                      index < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{review.content}"</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{review.author}</span>
                <span>{new Date(review.date).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;