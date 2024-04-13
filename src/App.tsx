import {useCallback, useRef, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Webcam from 'react-webcam';

function App() {
  const webcamRef = useRef(null)
  const [capturing, setCapturing] = useState(false)
  // eslint-disable
  const captureFrame = useCallback(
    () => {
      if (webcamRef.current != null) {
        // eslint-disable-next-line
        const imgSrc = webcamRef.current.getScreenshot()
        console.log(imgSrc)
      }
    },
    [webcamRef]
  )
  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          audio={false}
          width={640}
          height={480}
        />
        <button
          onClick={()=>{
            setCapturing(true)
          }}
        >
          Start Capture
        </button>
        {
          capturing && 
          <button onClick={captureFrame}>Capture</button>
        }
      </header>
    </div>
  );
}

export default App;
