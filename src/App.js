import React, { Component } from "react"
import "./App.css"
import Dashboard from "./component/Dashboard/Dashboard"
import Wizard from "./component/Wizard/Wizard"
import Header from "./component/Header/Header"

import { BrowserRouter } from "react-router-dom"
import routes from "./routes"
import { Provider } from "react-redux"
import store from "./ducks/store"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
            {routes}
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
