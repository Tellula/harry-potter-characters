import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px solid black",
        height: "100vh",
        background: "rgba(0, 0, 0, 0.3)",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;