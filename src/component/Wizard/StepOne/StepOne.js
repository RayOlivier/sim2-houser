import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import {
  updateAddress,
  updateCity,
  updateName,
  updateState,
  updateZip
} from "../../../ducks/reducer"

class StepOne extends Component {
  render() {
    return (
      <div>
        <h3>Step One: Add New Listing</h3>
        <div>
          Property Name:
          <input
            placeholder="Property Name..."
            onChange={(e) => this.props.updateName(e.target.value)}
          />
        </div>
        <div>
          Address:
          <input
            placeholder="Address..."
            onChange={(e) => this.props.updateAddress(e.target.value)}
          />
        </div>
        <div>
          City:
          <input
            placeholder="City..."
            onChange={(e) => this.props.updateCity(e.target.value)}
          />
        </div>
        <div>
          State:
          <input
            placeholder="State..."
            onChange={(e) => this.props.updateState(e.target.value)}
          />
        </div>
        <div>
          Zip:
          <input
            placeholder="Zip..."
            onChange={(e) => this.props.updateZip(parseInt(e.target.value))}
          />
        </div>

        {/* <Link to="/wizard/step2">
          <button>Next</button>
        </Link> */}

        <button>Complete</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => state

export default connect(
  mapStateToProps,
  { updateName, updateAddress, updateCity, updateState, updateZip }
)(StepOne)
