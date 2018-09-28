import React, { Component } from "react"
import { Link } from "react-router-dom"
import StepOne from "./StepOne/StepOne"
import { Route } from "react-router-dom"
import StepTwo from "./StepTwo/StepTwo"
import StepThree from "./StepThree/StepThree"
import "./Wizard.css"

class Wizard extends Component {
  render() {
    return (
      <div className="wiz">
        <div className="wiz-top">
          <div>Add New Listing</div>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>

        <Route path="/wizard/step1" component={StepOne} />
        <Route path="/wizard/step2" component={StepTwo} />
        <Route path="/wizard/step3" component={StepThree} />
      </div>
    )
  }
}

export default Wizard
