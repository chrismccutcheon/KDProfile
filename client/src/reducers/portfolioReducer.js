export default function reducer(state={
  portfolio: null,
  fetching: false,
  fetched: false,
  error: false
}, action){
  switch (action.type) {
    case "FETCH_PORFOLIO":
      return {...state, fetching: true}
      break;
    case "FETCHED_PORFOLIO":
      return {...state, fetching: false, fetched: true, portfolio: action.payload}
      break;
    default:
      return state;

  }
  return state;
}
