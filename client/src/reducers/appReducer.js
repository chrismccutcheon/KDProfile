export default function reducer(state={
  test: "",
  fetching: false,
  fetched: false
  error: false
}, action){
  switch (action.type) {
    case "GET_RESUME":
      return {...state, fetching: true}
      break;
    default:

  }
  return state;
}
