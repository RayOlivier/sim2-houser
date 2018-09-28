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
import "../Wizard.css"

class StepOne extends Component {
  render() {
    console.log("this.props", this.props)
    return (
      <div className="step-one">
        {/* <h3></h3> */}
        <div className="input">
          Property Name:
          <input
            placeholder="Property Name..."
            onChange={(e) => this.props.updateName(e.target.value)}
            value={this.props.name}
          />
        </div>
        <div className="input">
          <div>Address:</div>
          <input
            placeholder="Address..."
            onChange={(e) => this.props.updateAddress(e.target.value)}
            value={this.props.address}
          />
        </div>
        <div className="last-inputs">
          <div className="input">
            City:
            <input
              placeholder="City..."
              onChange={(e) => this.props.updateCity(e.target.value)}
              value={this.props.city}
            />
          </div>
          <div className="input">
            State:
            <input
              placeholder="State..."
              onChange={(e) => this.props.updateState(e.target.value)}
              value={this.props.state}
            />
          </div>
          <div className="input">
            <div>Zip:</div>
            <input
              placeholder="Zip..."
              onChange={(e) => this.props.updateZip(parseInt(e.target.value))}
              value={this.props.zip}
            />
          </div>
        </div>
        <div className="next">
          <Link to="/wizard/step2">
            <button>Next</button>
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => state

export default connect(
  mapStateToProps,
  { updateName, updateAddress, updateCity, updateState, updateZip }
)(StepOne)
