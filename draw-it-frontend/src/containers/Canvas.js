import React, {Component} from 'react';
import CanvasDraw from "react-canvas-draw";

export class Canvas extends Component {
    render() {
        return (
            <div className = "ui card" style={{height: "500px", width: "500px", margin: "20px"}}>
                 <CanvasDraw canvasWidth = {500} canvasHeight = {500} lazyRadius= {0} brushRadius= {5} brushColor= "lightblue"/>
            </div>
        );
    }
}


export default Canvas;
