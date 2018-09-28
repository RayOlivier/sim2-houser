import React, { Component } from "react"
import House from "./House/House"
import { Link } from "react-router-dom"

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Link to="/wizard/step1">
          <button>Add New Property</button>
        </Link>
      </div>
    )
  }
}

export default Dashboard
