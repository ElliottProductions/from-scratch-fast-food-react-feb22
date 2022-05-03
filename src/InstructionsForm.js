import React from 'react';

export default function InstructionsForm({ instructions, setInstructions, instructionsInput, setInstructionsInput }) {

  function handleSubmit(e) {
    e.preventDefault();

    setInstructions([...instructions, instructionsInput]);
      
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>Additional Instructions: <input onChange={e=> setInstructionsInput(e.target.value)}></input></p>
      <button>Add Instructions</button>
    </form>
  );
}
