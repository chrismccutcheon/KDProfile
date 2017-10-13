export function setPage(_page){
  return{
    type: "SET_PAGE",
    payload: _page
  }
}

export function setSelected(_selected){
  return {
    type: "SET_SELECTED",
    payload: _selected
  }
}
