const UPDATE_NAME = "UPDATE_NAME"
const UPDATE_ADDRESS = "UPDATE_ADDRESS"
const UPDATE_CITY = "UPDATE_CITY"
const UPDATE_STATE = "UPDATE_STATE"
const UPDATE_ZIP = "UPDATE_ZIP"
const UPDATE_RENT = "UPDATE_RENT"
const UPDATE_MORTGAGE = "UPDATE_MORTGAGE"
const UPDATE_IMG = "UPDATE_IMG"
const CLEAR = "CLEAR"

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
export function updateImg(input) {
  return {
    type: UPDATE_IMG,
    payload: input
  }
}
export function updateMortgage(input) {
  return {
    type: UPDATE_MORTGAGE,
    payload: input
  }
}
export function updateRent(input) {
  return {
    type: UPDATE_RENT,
    payload: input
  }
}

export function clear() {
  return { type: CLEAR }
}

const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zip: 0,
  img: "",
  mortgage: 0,
  rent: 0
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
    case UPDATE_MORTGAGE:
      return {
        ...state,
        mortgage: action.payload
      }
    case UPDATE_RENT:
      return {
        ...state,
        rent: action.payload
      }
    case UPDATE_IMG:
      return {
        ...state,
        img: action.payload
      }

    case CLEAR:
      return {
        ...state,
        ...initialState
      }
    default:
      return state
  }
}
