import React,{useState} from 'react'

function UseStatecounterReset() {
    const initialValue=0;
    const[count,counterUpdater]=useState(initialValue)

  return (
    <div>
      Count: {count}
      <button onClick={()=>counterUpdater(initialValue)}>Reset</button>
      <button onClick={()=>counterUpdater(count+1)}>Increment</button>
      <button onClick={()=>counterUpdater(count-1)}>Decrement</button>
      
    </div>
  )
}

export default UseStatecounterReset;
