import "../Botones/boton1.css";

import React from "react";
import styles from "./boton1.css";

// useEffect

export default function Buton1(props) {
  // React.useState() -> [ stateVar, setterStateVar ]
  const [colorState, setColorState] = React.useState("orange");

  let styleButton = {
    padding: props.padding,
    backgroundColor: colorState,
  };

  function handleClick(evt) {
    //colorState = "red";
    setColorState("red");
  }

  return (
    <button onClick={props.onClick} style={styleButton} className={styles.btn}>
      {props.children}
    </button>
  );
}
