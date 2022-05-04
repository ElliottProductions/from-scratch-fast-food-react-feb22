import React from 'react';

export default function OrderForm({ setOrderName }) {
  return (
    <div>
      <p>Order Name: <input onChange={e=> setOrderName(e.target.value)}/></p>
      
    </div>
  );
}
