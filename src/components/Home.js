import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Correcting the import statement
import './Home.css';

const categories = ['All', 'Lavender', 'Vanilla', 'Cinnamon'];

const candles = [
  {
    id: 1,
    name: 'Lavender Candle',
    description: 'A calming lavender scent.',
    price: 12.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9SYISJJrgmQhHkzps8ZBR9pzCgE1jgba_wg&s',
    category: 'Lavender',
  },
  {
    id: 2,
    name: 'Vanilla Candle',
    description: 'A sweet vanilla aroma.',
    price: 10.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9SYISJJrgmQhHkzps8ZBR9pzCgE1jgba_wg&s',
    category: 'Vanilla',
  },
  {
    id: 3,
    name: 'Cinnamon Candle',
    description: 'A warm cinnamon fragrance.',
    price: 14.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9SYISJJrgmQhHkzps8ZBR9pzCgE1jgba_wg&s',
    category: 'Cinnamon',
  },
];

function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Filter candles based on the selected category
  const filteredCandles = selectedCategory === 'All'
    ? candles
    : candles.filter((candle) => candle.category === selectedCategory);

  return (
    <div className="home-container">
      {/* Category bar */}
      <div className="category-bar">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Candles grid */}
      <div className="candles-grid">
        {filteredCandles.map((candle) => (
          <NavLink to={`/items/${candle.id}`} key={candle.id} className="candle-card">
            <img
              src={candle.image}
              alt={candle.name}
              className="candle-image"
            />
            <h3 className="candle-name">{candle.name}</h3>
            <p className="candle-description">{candle.description}</p>
            <p className="candle-price">${candle.price.toFixed(2)}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Home;
