export default function reducer(state={
  page: "Home",
  selected: "0",
  fetching: false,
  fetched: false,
  error: false
}, action){
  switch (action.type) {
    case "SET_PAGE":
      return {...state, page: action.payload}
      break;
    case "SET_SELECTED":
      return {...state, selected: action.payload}
      break;
    default:
      return state;
  }
  return state;
}
