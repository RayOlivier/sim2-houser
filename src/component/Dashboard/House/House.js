import React from "react"
import "./House.css"

export default function House(props) {
  return (
    <div className="whole-house">
      <div className="house-left">
        <img className="house-left2" src={props.img} alt={props.img} />
      </div>
      <div className="house-middle">
        <p>Name: {props.name}</p>
        <p>Address: {props.address}</p>
        <p>City: {props.city}</p>
        <p>State: {props.state}</p>
        <p>Zipcode: {props.zip}</p>
      </div>

      <div className="house-right">
        <button onClick={() => props.handleDelete(props.id)}>Delete</button>
        <p>Monthly Mortgage: {props.mortgage}</p>
        <p>Desired Rent: {props.rent}</p>
      </div>
    </div>
  )
}
