import React, { useState, useEffect } from "react";

function UseEffectHook() {
  const [counter, updateCounter] = useState(0);
  useEffect(() => {
    console.log(counter);
  }, []); //   {/* the array is used to optimize the effect on console */}
  return (
    <div>
      you Clicked {counter} times{" "}
      <button onClick={() => updateCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default UseEffectHook;
