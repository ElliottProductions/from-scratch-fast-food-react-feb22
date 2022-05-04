import React from 'react';

export default function Meal({ drinkId, sideId, foodId }) {
  return (
    <div className="meal">
      <img src={`drink-${drinkId}.png`}/>
      <img src={`side-${sideId}.png`}/>
      <img src={`food-${foodId}.png`}/>
    </div>
  );
}
