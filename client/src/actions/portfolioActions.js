export function fetchPortfolio(){
  return {
    type: "FETCH_PORFOLIO"
  }
}

export function fetchedPortfolio(_porfolio){
  return {
    type: "FETCHED_PORFOLIO",
    payload: _porfolio
  }
}
