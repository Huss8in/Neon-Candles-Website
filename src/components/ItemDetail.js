  import React from 'react';
  import { useParams } from 'react-router-dom';
  import './ItemDetail.css';

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
      }
    ];

  function ItemDetail() {
    const { candleId } = useParams();
    const candle = candles.find(candle => candle.id === parseInt(candleId));

    if (!candle) {
      return <div className="item-detail">Candle not found</div>;
    }

    return (
      <div className="item-detail">
        <h2>{candle.name}</h2>
        <img src={candle.image} alt={candle.name} className="candle-image" />
        <p>{candle.description}</p>
        <p>Price: ${candle.price.toFixed(2)}</p>
      </div>
    );
  }

  export default ItemDetail;
