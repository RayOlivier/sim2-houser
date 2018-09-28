import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

class StepTwo extends Component {
  render() {
    return (
      <div>
        <h3>StepTwo</h3>
        <Link to="/wizard/step1">
          <button>Previous</button>
        </Link>
        <Link to="/wizard/step3">
          <button>Next</button>
        </Link>
      </div>
    )
  }
}

export default StepTwo
