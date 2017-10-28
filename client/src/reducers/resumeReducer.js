import update from 'immutability-helper';

export default function reducer(state={
  res: null,
  tempRes: null,
  fetching: false,
  fetched: false,
  error: false
}, action){
  switch (action.type) {
    case "FETCH_RESUME":
      return {...state, fetching: true}
      break;
    case "FETCHED_RESUME":
      return {...state, fetching: false, fetched: true, res: action.payload, tempRes: action.payload}
      break;
    case "EDIT_TEMP":
      return update(state, {
        tempRes: {
          [action.payload.type]: {
            [action.payload.position]:{
              [action.payload.input]: {$set: [action.payload.value]}
            }
          }
        }
      });
      break;
    default:
      return state;

  }
  return state;
}
