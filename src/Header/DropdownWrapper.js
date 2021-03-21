import React from 'react'
import './DropdownWrapper.css'

export default function DropdownWrapper() {
    return (
        <div>
           <div className="dropdown">
  <button className="dropbtn">Dropdown</button>
  <div className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
        </div>
    )
}
