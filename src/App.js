// https://www.geeksforgeeks.org/how-to-create-a-paint-app-in-reactjs/
import { useEffect, useRef, useState } from 'react';
import Menu from './components/Menu';
import './App.css';

const DEFAULT_BACKGROUND_COLOR = 'white';

function App() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const canvasBackgroundRef = useRef(null);
  const ctxBackgroundRef = useRef(null);
  const canvasGridRef = useRef(null);
  const ctxGridRef = useRef(null);

  const [isDrawing, setIsDrawing] = useState(false);
  const [lineWidth, setLineWidth] = useState(5);
  const [lineColor, setLineColor] = useState('black');
  const [backgroundColor, setBackgroundColor] = useState(DEFAULT_BACKGROUND_COLOR);
  const [lineOpacity, setLineOpacity] = useState(0.1);
  const [tool, setTool] = useState('pencil');

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.globalAlpha = lineOpacity;
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctxRef.current = ctx;
  }, [lineColor, lineOpacity, lineWidth,])

  useEffect(() => {
    const canvas = canvasBackgroundRef.current;
    const ctx = canvas.getContext('2d');
    ctx.globalAlpha = 1;
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.globalAlpha = lineOpacity;
    ctxBackgroundRef.current = ctx;
    // eslint-disable-next-line
  }, [backgroundColor]);

  const startDrawing = (e) => {
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY
    );
    setIsDrawing(true);
  };

  const endDrawing = () => {
    ctxRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = (e) => {
    if (!isDrawing) {
      return;
    }
    else {
      if (tool === 'pencil') {
        ctxRef.current.lineTo(
          e.nativeEvent.offsetX,
          e.nativeEvent.offsetY
        );
        ctxRef.current.stroke();
      }
      else if (tool === 'eraser') {
        ctxRef.current.clearRect(
          e.nativeEvent.offsetX,
          e.nativeEvent.offsetY,
          lineWidth * 2,
          lineWidth * 2
        );
      }
    }

  };

  const reset = () => {
    const canvas = canvasRef.current;
    ctxRef.current.clearRect(0, 0, canvas.width, canvas.height);
  }




  return (
    <div className="App">
      <h1>Paint App</h1>
      <div className='draw-area'>
        <Menu
          setLineColor={setLineColor}
          setLineWidth={setLineWidth}
          setLineOpacity={setLineOpacity}
          setBackgroundColor={setBackgroundColor}
          reset={reset}
          setTool={setTool}
          tool={tool}
        />
        <canvas
          ref={canvasBackgroundRef}
          width={'1280px'}
          height={'720px'}
        />
        <canvas
          ref={canvasGridRef}
          width={'1280px'}
          height={'720px'}
        />
        <canvas
          onMouseDown={startDrawing}
          onMouseUp={endDrawing}
          onMouseMove={draw}
          ref={canvasRef}
          width={'1280px'}
          height={'720px'}
        />
      </div>
      <h2>by Sotnas</h2>
    </div>
  );
}

export default App;
