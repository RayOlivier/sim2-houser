import React from "react"
import "./houseLogo.png"
import "./Header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img
          className="header-img"
          src="https://ubisafe.org/images/house-transparent-logo-1.png"
          //   src="./houseLogo.png"
        />
        <div>Houser</div>
      </div>
    </div>
  )
}
