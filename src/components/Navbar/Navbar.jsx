import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

function Navbar() {

  return (
    <div id="Navbar-container" >
        <ul id="Navbar-menu">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <CartWidget cantidad= "2" />
        </ul>
    </div>
  )
}

export default Navbar