import React from 'react';
import CanvasDraw from "react-canvas-draw";
import './App.css';

class App extends React.Component {
  render(){
  return (
    <div className = "center" >
  
        <CanvasDraw canvasWidth = {500} canvasHeight = {500} lazyRadius= {0} brushRadius= {5} brushColor= "lightblue"/>
   
    </div>
  );
  }
}

export default App;
