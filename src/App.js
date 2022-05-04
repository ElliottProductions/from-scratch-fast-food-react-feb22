import './App.css';
import OrderForm from './OrderForm';
import DropDown from './DropDown';
import OrderImages from './OrderImages';
import InstructionsForm from './InstructionsForm';
import InstructionsList from './InstructionsList';

import { useState } from 'react';



function App() {

  const [orderName, setOrderName] = useState('Customer #001');
  const [drinkID, setDrinkId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [foodId, setFoodId] = useState(1);
  const [instructions, setInstructions] = useState(['']);
  const [instructionsInput, setInstructionsInput] = useState('');

  
  return (
    <div className="App">
      <h3>Order for {orderName}</h3>
      <OrderImages drinkId={drinkID} sideId={sideId} foodId={foodId}/>
      <OrderForm setOrderName={setOrderName}/>
      <DropDown setChoice={setDrinkId} itemName={'drink'}/>
      
      <DropDown setChoice={setSideId} itemName={'side'}/>
      <DropDown setChoice={setFoodId} itemName={'entrée'}/>
      
      <InstructionsForm instructions={instructions} setInstructions={setInstructions}
        instructionsInput={instructionsInput} setInstructionsInput={setInstructionsInput}/>
      <InstructionsList instructions={instructions}/>
      
    </div>
    
  );
}

export default App;
