import React from 'react'

function Card() {
  return (
    <div>
        <h2>Cards</h2>
        <div className='overalflex'>
        <div id='bor1'>
        <h3>Sample Card</h3>
        <p>
        The styling for this basic card example is created by using default Bootstrap utility classes. 
        By using utility classes, the style of the card component can be easily modified with no need for any custom CSS!
        </p>
        </div>
        <div id='border'>
            <h3>Drop Down Card Example</h3>
            <p>
            Dropdown menus can be placed in the card header in order to extend the functionality of a basic card. <br/>
            In this dropdown card example the Font Awesome vertical ellipsis icon .<br/>
            In the card header can be clicked on in order to toggle a dropdown menu.<br/>
            </p>
        </div>
        <div id='bor2'>
            <h3>Default Card</h3>
            <p>
            This card uses Bootstrap's default styling with no utility classes added. 
            Global styles are the only things modifying the look and feel of this default card example.
            </p>
        </div>
        </div>
    </div>
  )
}

export default Card;