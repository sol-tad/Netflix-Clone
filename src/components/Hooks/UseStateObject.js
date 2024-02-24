import React,{useState} from 'react'

function UseStateObject() { 
    const[name,setName]=useState({Fname:'',Lname:''});
    console.log(name);
  return (
    <div>
      <form>
       { /*without spread opertor we i set the fname value it affects the lname why?*/}
        <input type="text"  value={name.Fname} onChange={e=>setName({...name,Fname:e.target.value})}/>
        <input type="text"  value={name.Lname} onChange={e=>setName({...name,Lname:e.target.value})}/>
      <h2>First Name: {name.Fname}</h2>
      <h2>Last Name: {name.Lname}</h2>
      </form>
     
    </div>
  )
}

export default UseStateObject
