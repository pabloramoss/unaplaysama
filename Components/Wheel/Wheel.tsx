import React from 'react';

const Wheel: React.FC = ()=> {

  return(
    <div id="wrapper">
      <div id="wheel">
        <div id="inner-wheel">
          <div className='sec'>
            <span className='fa fa-bell-o'></span>
          </div>
          <div className='sec'>
            <span className='fa fa-comment-o'></span>
          </div>
          <div className='sec'>
            <span className='fa fa-smile-o'></span>
          </div>
          <div className='sec'>
            <span className='fa fa-heart-o'></span>
          </div>
          <div className='sec'>
            <span className='fa fa-lightbulb-o'></span>
          </div>
          <div className='sec'>
            <span className='fa fa-bell-o'></span>
          </div>
        </div>
        <div id='spin'>
          <div id='inner-spin'></div>
        </div>
        <div id='shine'></div>
      </div>
      <div id='text'></div>
    </div>
  )
}
export default Wheel