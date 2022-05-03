import React from 'react';

export default function DropDown({ setChoice, itemName }) {
  return (
    <div>
      <p>Choose your {itemName}.</p>
      <select onChange={e=> setChoice(e.target.value)}>
        <option value="1">{itemName === 'drink' && 'New Coke' || itemName === 'entrée' && 'Halloween Whopper' || itemName === 'side' && 'Fistful of Fries'}</option>
        <option value="2">{itemName === 'drink' && 'Coke Classic' || itemName === 'entrée' && 'McRib' || itemName === 'side' && 'Nuggets'}</option>
        <option value="3">{itemName === 'drink' && 'Coke Zero' || itemName === 'entrée' && 'KCF Shredder' || itemName === 'side' && 'Mt Potato'}</option>
      </select>

    </div>
  );
}
