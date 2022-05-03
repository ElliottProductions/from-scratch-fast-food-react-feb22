import logo from './logo.svg';
import './App.css';
import OrderForm from './OrderForm';
import DropDown from './DropDown';
import Meal from './Meal';

import { useState } from 'react';



function App() {

  const [orderName, setOrderName] = useState('Customer #001');
  const [drinkID, setDrinkId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [foodId, setFoodId] = useState(1);
  return (
    <div>
      <h3>Order for {orderName}</h3>
      <Meal drinkId={drinkID} sideId={sideId} foodId={foodId}/>
      <DropDown setChoice={setDrinkId} itemName={'drink'}/>
      <DropDown setChoice={setFoodId} itemName={'entrée'}/>
      <DropDown setChoice={setSideId} itemName={'side'}/>
      <OrderForm setOrderName={setOrderName}/>
    </div>
    
  );
}

export default App;
