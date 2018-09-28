import React, { Component } from "react"
import { Link } from "react-router-dom"
import StepOne from "./StepOne/StepOne"
import { Route } from "react-router-dom"
import StepTwo from "./StepTwo/StepTwo"
import StepThree from "./StepThree/StepThree"

class Wizard extends Component {
  render() {
    return (
      <div>
        <h1>Wizard</h1>
        <Link to="/">
          <button>Cancel</button>
        </Link>

        <Route path="/wizard/step1" component={StepOne} />
        <Route path="/wizard/step2" component={StepTwo} />
        <Route path="/wizard/step3" component={StepThree} />
      </div>
    )
  }
}

export default Wizard
