import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  const [calVal, setCalVal] = useState("");
  function onButtonClick(buttonText) {
    if(buttonText === 'C') {
        setCalVal("")
    }

    else if(buttonText === '=') {
      const result = eval(calVal);
      setCalVal(result);
    }

    else {
      const newVal = calVal + buttonText;
      setCalVal(newVal);
    }
  }

  return (
    <center>
      <h3>Calculator</h3>
    <div className={styles.calculator}>
      
      <Display dispVal={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
    </center>
  );
}

export default App;
