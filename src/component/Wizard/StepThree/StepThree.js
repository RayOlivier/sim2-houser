import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

class StepThree extends Component {
  render() {
    return (
      <div>
        <h3>StepThree</h3>
        <Link to="/wizard/step2">
          <button>Previous</button>
        </Link>
      </div>
    )
  }
}

export default StepThree
