import React from 'react'

function EventHandler() {

function handler(){
    console.log("The button is clicked");
    alert("The button is clicked");
}

  return (
    <div >
      <button onClick={handler}>Press Me</button>
    </div>
  )
}

export default EventHandler;
