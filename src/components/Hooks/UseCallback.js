import React, { useCallback,useState } from 'react'
import Button from './Button'
import Counter from './Counter'

function UseCallback() {
    const [counter1,setCounter1]=useState(0)
    const [counter2,setCounter2]=useState(0)
  
    const increment1=useCallback(()=>{
        setCounter1(counter1 + 1);
    },[counter1])
    const increment2=useCallback(()=>{
        setCounter1(counter2 + 2);
    },[counter2])


    // const increment1=()=>{
    //     setCounter1(counter1+1)
    // }
    // const increment2=()=>{
    //     setCounter2(counter2+2)
    // }
  return (
    <div>
      <Counter text="Count by 1: " count={counter1}/>
      <Button handlerClick={increment1}>+1</Button>

      <Counter text="Count by 2: " count={counter2}/>
      <Button handlerClick={increment2}>+1</Button>
    </div>
  )
}

export default UseCallback
