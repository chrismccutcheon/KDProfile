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
      console.log(action.payload);
      return update(state, {
        tempRes: {
          resume: {
            [action.payload.type]: {
              [action.payload.pos]:{
                [action.payload.input]: {$set: [action.payload.value]}
              }
            }
          }
        }
      });
      break;
    case "EDIT_TEMP_ROLES":
      return update(state, {
        tempRes: {
          resume: {
            [action.payload.type]: {
              [action.payload.pos]:{
                roles: {
                  [action.payload.roleIndex]: {$set: [action.payload.value]}
                }
              }
            }
          }
        }
      });
      break;
    case "ADD_TEMP_ROLE":
      return update(state, {
        tempRes: {
          resume: {
            [action.payload.type]: {
              [action.payload.pos]:{
                roles: {$push: [""]}
              }
            }
          }
        }
      });
      break;
    case "ADD_FORM":
      return update(state, {
        tempRes: {
          resume: {
            [action.payload.type]: {$push: [action.payload.values]}
          }
        }
      })
      break;
    default:
      return state;
  }
  return state;
}
