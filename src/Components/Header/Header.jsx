import React from 'react'
import './header.css'
import icon from '/bars.png'

const Header = ({heading}) => {
  return (
    <div className="header">
      <div className="headerContainer">
        <h1 className="heading">
          {heading}
        </h1>
        <img src={icon} alt="navigation bar" className="icon" />
      </div>
    </div>
  )
}

export default Header
