import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { updateImg } from "../../../ducks/reducer"

class StepTwo extends Component {
  render() {
    return (
      <div>
        <h3>Step Two: Add Img</h3>
        <div>
          Image URL:
          <input
            placeholder="Image URL..."
            onChange={(e) => this.props.updateImg(e.target.value)}
          />
        </div>

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

const mapStateToProps = (state) => state

export default connect(
  mapStateToProps,
  { updateImg }
)(StepTwo)
