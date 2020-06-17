import React from 'react';
import Card from './card';

export default function App({ items }) {
  return (
    <div className="list-cards">
      {
        items.map((item) => (
          <Card
            name={item.nombre}
            lastName={item.lastName}
            city={item.city}
            profession={item.profession}
            entryDate={item.entryDate}
            photo={item.photo}
          />
        ))
      }
    </div>
  )
}
