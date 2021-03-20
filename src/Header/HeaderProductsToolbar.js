import React from 'react'
import './HeaderProductsToolbar.css'

export default function HeaderProductsToolbar() {
    return (
        <div>
            <nav className="navbar navbar-default">
     <div className="container-fluid">
      <ul className="nav navbar-nav">
        <li className="dropdown">
        
          <span><a href="#home" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">BIRTHDAY <span className="caret"></span></a>
          <a href="#next" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">ANNIVERSARY <span className="caret"></span></a>
          <a href="#home" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">CAKES<span className="caret"></span></a>
          <a href="#home" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">FLOWERS <span className="caret"></span></a>
          </span>
          <ul className="dropdown-menu">
            <li>Action</li>
            <li>Another action</li>
            <li>Something else here</li>
            <li role="separator" className="divider"></li>
            <li>Separated link</li>
            <li role="separator" className="divider"></li>
            <li>One more separated link</li>
          </ul>
        </li>
      </ul>
  </div>
</nav>
</div>
    
    )
}
