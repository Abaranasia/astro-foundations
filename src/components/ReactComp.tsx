import React, { useState } from "react";
import './reactComp.css';

export default function ReactComp() {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    console.log("dialog open");
    setVisible(true)
  };
  const handleClose = () => {
    console.log("dialog close");
    setVisible(false);
  };
  
  return (
    <div>
      <button onClick={handleClick}>Show me</button>
      {visible && (
        <div className="dialog">
          <h2>Ahoi!</h2>
          <button onClick={handleClose}>Hide me</button>
        </div>
      )}
    </div>
  );
}
