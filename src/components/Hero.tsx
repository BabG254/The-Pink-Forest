import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Welcome to The Pink Forest
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            A charming vegetarian café & bakery in the heart of Nairobi
          </p>
          <div className="space-x-4">
            <a 
              href="#menu" 
              className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-colors"
            >
              View Menu
            </a>
            <a 
              href="#reservations" 
              className="bg-white text-pink-500 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              Make a Reservation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;