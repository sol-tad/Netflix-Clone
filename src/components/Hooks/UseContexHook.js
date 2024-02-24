import React, { useContext } from "react";
import { OwnerContext, ChannelContext } from "../../App";

function UseContextHook() {
  const owner = useContext(OwnerContext);
  const channel = useContext(ChannelContext);

  return <div>{owner}-{channel}
  </div>;
}

export default UseContextHook;
