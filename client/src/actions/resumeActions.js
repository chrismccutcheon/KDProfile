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
