import React from "react";
import '../App.css';

const Menu = ({ setLineColor, setLineWidth, setLineOpacity, setBackgroundColor }) => {

  return (
    <div className="Menu">
      <label>Brush Color</label>
      <input
        type='color'
        onChange={(e) => {
          setLineColor(e.target.value);
        }}
      />
      <label>Brush Width</label>
      <input
        type='range'
        min="3"
        max="20"
        onChange={(e) => {
          setLineWidth(e.target.value);
        }}
      />
      <label>Brush Opacity</label>
      <input
        type='range'
        min="1"
        max="100"
        onChange={(e) => {
          setLineOpacity(e.target.value / 100);
        }}
      />
      <label>Background Color</label>
      <input
        type='color'
        onChange={(e) => {
          setBackgroundColor(e.target.value);
        }}
      />
      {/* TODO

        ERASER
        CLEAN THE BOARD
        PUT/HIDE GRID
        DRAW GEOMETRIC SYMBOLS (CIRCLE, SQUARE, TRIANGLE)
        WRITE
        ICON FOR EACH TOOL
        DOWNLOAD IMAGE

      */}
    </div>
  )
}

export default Menu;