import React from 'react'

function Button() {
  return (
    <div>
      <h2>Buttons</h2>
      <div className='overalflex'>
      <div id='bor'>
      <h3>Split Button With Icons</h3>
        <p>
        Works with any button colors, just use the .btn-icon-split class and the markup in the examples below.<br></br>
         The examples below also use the .text-white-50 helper class on the icons for additional styling, but it is not required.
        </p>
        <div id='flex'>
        <button className='wid'>Split Button Primary</button><br></br>
        <button className='wid' >Split Button Summary</button><br/>
        <button className='wid' >Split Button Sucess</button><br/>
        <button className='wid' >Split Button Danger</button><br/>
        <button className='wid' >Split Button warning</button><br/>
        <button className='wid' >Split Button Light</button>
      </div>
        </div>
        <div id='bor6'>
        <h3>Brand Buttons</h3>
        <p>
        Google and Facebook buttons are available featuring each company's respective brand color.<br></br>
         They are used on the user login and registration pages.<br></br>
         You can create more custom buttons by adding a new color variable in the _variables.scss file .<br></br>
         And then using the Bootstrap button variant mixin to create a new style, as demonstrated in the _buttons.scss file.<br></br>
        </p>
        <div id='wid1'>
          <button className='wid'>Facebook</button>
          <button className='wid'>Google</button>
          <button className='wid'>E-Mail</button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Button;