import logo from './logo.svg';
import './App.css';
import OrderForm from './OrderForm';

import { useState } from 'react';



function App() {

  const [orderName, setOrderName] = useState('Customer #001');

  return (
    <div>
      <h3>Order for {orderName}</h3>
      <OrderForm setOrderName={setOrderName}/>
    </div>
    
  );
}

export default App;
