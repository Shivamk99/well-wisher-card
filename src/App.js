import React from 'react';
import './App.css';
import sketch from './sketch';
import p5 from 'p5';
//p5 is a JavaScript library used for creativity
//your text to wish your friend  
const TEXT = 'Hey, trunali!!';// it should be 4 letters not more not less,
//eg: 1. Happy birthday Virat Kholi, 2. Happy Married Life Virat, 3. Happy Born Day Virat... 

const App = () => {
  const canvasRef = React.useRef(null)

  React.useEffect(() => {
    const canvasDivElement = canvasRef.current;
    new p5(sketch(canvasDivElement, TEXT), canvasDivElement);
  })

  return (
  <div>
    
    <div className='From' >
      <h4>From: You'r Well Wisher</h4>
    </div>
  
      <div>
          
          <div className="main" >
          
            <ul>
                <li className="nav-item d-inline-block p-2">
                  <i className="far fa-smile-beam fa-spin fa-6x" id="smiley-logo"/>
                </li>

                <li className="nav">
                  <i class="fa fa-angellist fa-2x  "></i>
                </li>
            </ul>

          <div ref={canvasRef} />  
      </div >
  </div>
 </div>
    
  )
}

export default App;
