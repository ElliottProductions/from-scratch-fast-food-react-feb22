import logo from './logo.svg';
import './App.css';
import OrderForm from './OrderForm';
import DropDown from './DropDown';

import { useState } from 'react';



function App() {

  const [orderName, setOrderName] = useState('Customer #001');
  const [drinkChoice, setDrinkChoice] = useState(1);
  return (
    <div>
      <h3>Order for {orderName}</h3>
      <DropDown setChoice={setDrinkChoice} itemName={'drink'}/>
      <DropDown setChoice={setDrinkChoice} itemName={'entrée'}/>
      <DropDown setChoice={setDrinkChoice} itemName={'side'}/>
      <OrderForm setOrderName={setOrderName}/>
    </div>
    
  );
}

export default App;
