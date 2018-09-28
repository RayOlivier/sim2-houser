import React from "react"
import "./houseLogo.png"
import "./Header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img src="./houseLogo.png" />
        <div>Houser</div>
      </div>
    </div>
  )
}
