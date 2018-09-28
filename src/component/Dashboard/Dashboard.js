import React, { Component } from "react"
import House from "./House/House"
import { Link } from "react-router-dom"
import axios from "axios"
import "./Dashboard.css"

class Dashboard extends Component {
  constructor() {
    super()

    this.state = {
      houses: []
    }

    this.getHouses = this.getHouses.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    axios.get("/api/houses").then((res) => {
      console.log(res)
      this.setState({ houses: res.data })
      console.log(this.state)
    })
  }

  //   componentDidUpdate(prevProps, prevState) {
  //     if (this.state !== prevState) {
  //       this.getHouses()
  //     }
  //   }

  getHouses() {
    axios.get("/api/houses").then((res) => {
      console.log(res)
      this.setState({ houses: res.data })
      console.log(this.state)
    })
  }

  handleDelete(id) {
    axios.delete(`/api/house/${id}`).then((res) => {
      this.getHouses()
    })
  }

  render() {
    let list = this.state.houses.map((e, i, arr) => {
      return (
        <House
          key={i}
          name={e.name}
          zip={e.zip}
          address={e.address}
          city={e.city}
          state={e.state}
          mortgage={e.mortgage}
          rent={e.rent}
          img={e.img}
          id={e.id}
          handleDelete={this.handleDelete}
        />
      )
    })
    return (
      <div className="whole-dash">
        <div className="dash-top">
          <div>Dashboard</div>
          <Link to="/wizard/step1">
            <button>Add New Property</button>
          </Link>
        </div>
        {list}
      </div>
    )
  }
}

export default Dashboard
