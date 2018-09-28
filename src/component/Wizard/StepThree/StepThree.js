import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { updateRent, updateMortgage, clear } from "../../../ducks/reducer"
import axios from "axios"

class StepThree extends Component {
  constructor(props) {
    super(props)

    this.postHouse = this.postHouse.bind(this)
  }

  postHouse() {
    axios
      .post("/api/house", {
        name: this.props.name,
        address: this.props.address,
        city: this.props.city,
        state: this.props.state,
        zip: this.props.zip,
        mortgage: this.props.mortgage,
        rent: this.props.rent,
        img: this.props.img
      })
      .then(this.props.clear())
  }

  render() {
    return (
      <div>
        <h3>StepThree</h3>
        <Link to="/wizard/step2">
          <button>Previous</button>
        </Link>
        <div>
          Monthly Mortgage:
          <input
            placeholder="Mortgage..."
            onChange={(e) =>
              this.props.updateMortgage(parseFloat(e.target.value))
            }
          />
        </div>
        <div>
          Desired Rent:
          <input
            placeholder="Rent..."
            onChange={(e) => this.props.updateRent(parseFloat(e.target.value))}
          />
        </div>

        <Link to="/">
          <button onClick={this.postHouse}>Complete</button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => state

export default connect(
  mapStateToProps,
  { updateMortgage, updateRent, clear }
)(StepThree)
