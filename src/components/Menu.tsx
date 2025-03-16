import React, { useState } from 'react';
import type { MenuItem } from '../types';

const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Avocado Toast',
    description: 'Sourdough bread topped with smashed avocado, cherry tomatoes, and microgreens',
    price: 850,
    category: 'breakfast',
    dietary: ['vegetarian', 'vegan'],
    image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    name: 'Berry Pancake Stack',
    description: 'Fluffy pancakes served with fresh berries and maple syrup',
    price: 950,
    category: 'breakfast',
    dietary: ['vegetarian'],
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    name: 'Buddha Bowl',
    description: 'Quinoa, roasted vegetables, chickpeas, and tahini dressing',
    price: 1200,
    category: 'lunch',
    dietary: ['vegetarian', 'vegan', 'gluten-free'],
    image: 'https://images.unsplash.com/photo-1546007600-8c2e5a9b8ea7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    name: 'Chocolate Cake',
    description: 'Rich chocolate cake with ganache frosting',
    price: 650,
    category: 'desserts',
    dietary: ['vegetarian'],
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    name: 'Masala Chai',
    description: 'Traditional spiced tea with oat milk',
    price: 300,
    category: 'drinks',
    dietary: ['vegetarian', 'vegan'],
    image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '6',
    name: 'Quinoa Salad',
    description: 'Fresh mixed greens, quinoa, roasted vegetables, and balsamic dressing',
    price: 950,
    category: 'lunch',
    dietary: ['vegetarian', 'vegan', 'gluten-free'],
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80'
  }
];

const categories = ['all', 'breakfast', 'lunch', 'desserts', 'drinks'] as const;
const dietaryFilters = ['vegetarian', 'vegan', 'gluten-free'] as const;

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number] | 'all'>('all');
  const [selectedDietary, setSelectedDietary] = useState<typeof dietaryFilters[number] | null>(null);

  const filteredItems = menuItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const dietaryMatch = !selectedDietary || item.dietary.includes(selectedDietary);
    return categoryMatch && dietaryMatch;
  });

  return (
    <section id="menu" className="py-20 bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-display font-bold text-center mb-12">Our Menu</h2>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="space-x-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-pink-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-pink-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          <div className="space-x-2">
            {dietaryFilters.map(filter => (
              <button
                key={filter}
                onClick={() => setSelectedDietary(selectedDietary === filter ? null : filter)}
                className={`px-4 py-2 rounded-full ${
                  selectedDietary === filter
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-green-100'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="text-pink-500 font-semibold">KSh {item.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.dietary.map(diet => (
                    <span
                      key={diet}
                      className="px-2 py-1 text-sm bg-beige-100 text-beige-800 rounded-full"
                    >
                      {diet}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;