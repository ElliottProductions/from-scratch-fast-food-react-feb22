import React from 'react';
import Instruction from './Instruction';

export default function InstructionsList({ instructions }) {
  return (
    <div>
      <h2>Notes:</h2>
      {instructions.map((instruction, i)=> <Instruction key={instruction + i} instruction={instruction}/>)}
    </div>
  );
}
