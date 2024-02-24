import React, { useEffect, useRef } from "react";

//using useRef hook to directly/automatically focus on the input filed
function UseRefHOOK() {
  const inputref = useRef(null);
  useEffect(() => {
    inputref.current.focus();
  }, []);
  return (
    <div>
      <input ref={inputref} type="text" />
    </div>
  );
}

export default UseRefHOOK;
