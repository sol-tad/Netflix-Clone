import React from "react";

function Event() {
  const eventHandler = () => {
    return alert("Hi there!😎😎😋");
  };

  return (
    <div>
      <button href="#" onClick={eventHandler}>
        press me
      </button>
    </div>
  );
}

export default Event;
