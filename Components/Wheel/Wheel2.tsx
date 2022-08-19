import React, { useState } from 'react';

const Wheel2: React.FC = ()=> {
  const [state, setState] = useState("circle")
  const spin = () => {
    setState("circle start-rotate")
    setTimeout(() => {
      setState("circle start-rotate stop-rotate")
    }, Math.floor(Math.random() * 10000) + 1)
  }

  return(
    <div style={{position: "relative"}}>
      <div className='arrow'></div>
      <ul className={state}>
        <li>
          <div className='text'>
            1
          </div>
        </li>
        <li>
          <div className='text'>
            2
          </div>
        </li>
        <li>
          <div className='text'>
            3
          </div>
        </li>
        <li>
          <div className='text'>
            4
          </div>
        </li>
        <li>
          <div className='text'>
            5
          </div>
        </li>
        <li>
          <div className='text'>
            6
          </div>
        </li>
        <li>
          <div className='text'>
            7
          </div>
        </li>
        <li>
          <div className='text'>
            8
          </div>
        </li>
        <li>
          <div className='text'>
            9
          </div>
        </li>
        <li>
          <div className='text'>
            10
          </div>
        </li>
        <li>
          <div className='text'>
            11
          </div>
        </li>
        <li>
          <div className='text'>
            12
          </div>
        </li>
      </ul>
      <button onClick={spin}>Spin</button>
    </div>
  )
}
export default Wheel2