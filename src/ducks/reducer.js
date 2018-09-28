const UPDATE_NAME = "UPDATE_NAME"
const UPDATE_ADDRESS = "UPDATE_ADDRESS"
const UPDATE_CITY = "UPDATE_CITY"
const UPDATE_STATE = "UPDATE_STATE"
const UPDATE_ZIP = "UPDATE_ZIP"

export function updateName(input) {
  return {
    type: UPDATE_NAME,
    payload: input
  }
}
export function updateAddress(input) {
  return {
    type: UPDATE_ADDRESS,
    payload: input
  }
}
export function updateCity(input) {
  return {
    type: UPDATE_CITY,
    payload: input
  }
}
export function updateState(input) {
  return {
    type: UPDATE_STATE,
    payload: input
  }
}
export function updateZip(input) {
  return {
    type: UPDATE_ZIP,
    payload: input
  }
}

const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zip: 0
}

export default function reducer(state = initialState, action) {
  console.log(state, action)
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload
      }
    case UPDATE_ADDRESS:
      return {
        ...state,
        address: action.payload
      }
    case UPDATE_CITY:
      return {
        ...state,
        city: action.payload
      }
    case UPDATE_STATE:
      return {
        ...state,
        state: action.payload
      }
    case UPDATE_ZIP:
      return {
        ...state,
        zip: action.payload
      }
    default:
      return state
  }
}
