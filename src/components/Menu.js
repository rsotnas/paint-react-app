import React from "react";
import '../App.css';

const Menu = ({
  setLineColor
  , setLineWidth
  , setLineOpacity
  , setBackgroundColor
  , reset
  , tool
  , setTool
  , setGrid
  , download
}) => {

  return (
    <div className="Menu">
      <ul>
        <li>
          <button className='button' onClick={() => setGrid(0)}>
            No Grid
          </button>
        </li>
        <li>
          <button className='button' onClick={() => setGrid(2)}>
            2x2
          </button>
        </li>
        <li>
          <button className='button' onClick={() => setGrid(3)}>
            3x3
          </button>
        </li>
      </ul>
      <input
        type="radio"
        id="pencil"
        name="drawing"
        value="pencil"
        // checked={tool === 'pencil' ? true : false}
        defaultChecked
        onClick={(e) => {
          setTool(e.target.value);
        }}
      />
      <label htmlFor="pencil">Pencil</label>
      <input
        type="radio"
        id="eraser"
        name="drawing"
        value="eraser"
        // checked={tool === 'eraser' ? true : false}
        onClick={(e) => {
          setTool(e.target.value);
        }}
      />
      <label htmlFor="eraser">Eraser</label>
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
      <input
        type='button'
        value='Reset'
        onClick={reset}
      />
      <input
        type='button'
        value='Download'
        onClick={download}
      />
      {/* TODO

        PUT/HIDE GRID
        DRAW GEOMETRIC SYMBOLS (CIRCLE, SQUARE, TRIANGLE)
        WRITE
        ICON FOR EACH TOOL
        DOWNLOAD IMAGE

      */}
    </div >
  )
}

export default Menu;