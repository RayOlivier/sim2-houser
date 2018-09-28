import React from "react"

export default function House(props) {
  return (
    <div>
      <h4>Name: {props.name}</h4>
      <p>Address: {props.address}</p>
      <p>City: {props.city}</p>
      <p>State: {props.state}</p>
      <p>Zipcode: {props.zip}</p>

      <p>Monthly Mortgage: {props.mortgage}</p>
      <p>Desired Rent: {props.rent}</p>

      <button onClick={() => props.handleDelete(props.id)}>Delete</button>

      {/* <img src={props.img}/> */}
    </div>
  )
}
