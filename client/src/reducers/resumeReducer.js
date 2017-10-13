export default function reducer(state={
  res: null,
  fetching: false,
  fetched: false,
  error: false
}, action){
  switch (action.type) {
    case "FETCH_RESUME":
      return {...state, fetching: true}
      break;
    case "FETCHED_RESUME":
      return {...state, fetching: false, fetched: true, res: action.payload}
      break;
    default:

  }
  return state;
}
