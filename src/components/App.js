import React, {Component, useState} from "react";
import slides from './data.js';
import '../styles/App.css';

const App = () => {

  const [currentSlide, setCurrentSlide] = useState(1);
  
  function previous() {
    if(currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }
  }

  function next() {
    
  }

  function restart() {
    
  }
  
  return (
    <>
      <div>{slides[0]}</div>;
      <button data-testid="button-prev" onClick="previous()" disabled>Previous</button>
      <button data-testid="button-restart" onClick="restart()" disabled>Restart</button>
      <button data-testid="button-next" onClick="next()">Next</button>
    </>
  )
}


export default App;
