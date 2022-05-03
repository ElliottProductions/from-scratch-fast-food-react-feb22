import React from 'react';

export default function OrderForm({ setOrderName }) {
  return (
    <div>
      <p>Order is for:</p>
      <input onChange={e=> setOrderName(e.target.value)}/>
    </div>
  );
}
