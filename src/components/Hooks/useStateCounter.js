import React from 'react'
import {useState} from 'react'
function UseStateCounter() {
 const[counter,counterUpdater]=useState(0);
  return (
    <div>
      <button onClick={() => counterUpdater(counter+1)}>Count{counter}</button>
    </div>
  );
}

export default UseStateCounter;
