import React, {useMemo, useState } from 'react'
import SubChild from './SubChild';

function UseMemo() {
   const [count,setCount]= useState(0);
   function clickHandler(){
    setCount(count+1)
   }
const subchildmemo=useMemo(()=>{
    return <SubChild></SubChild>
},[])


  return (
    <div>
        <h2>Count: {count}</h2>
      <button onClick={clickHandler}>Increment</button>
      <SubChild></SubChild>
      {subchildmemo}
    </div>
  )
}

export default UseMemo
