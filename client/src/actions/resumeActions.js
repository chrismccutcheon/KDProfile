export function fetchResume(){
  return{
    type: "FETCH_RESUME"
  }
}

export function fetchedResume(_res){
  return {
    type: "FETCHED_RESUME",
    payload: _res
  }
}

export function changeTempRes(_type, _pos, _input, _value, _roleIndex){
  return {
    type: "EDIT_TEMP",
    payload: {
      type: _type,
      pos: _pos,
      input: _input,
      value: _value,
      roleIndex: _roleIndex
    }
  }
}
