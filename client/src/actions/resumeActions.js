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
  if(_input === "roles"){
    return {
      type: "EDIT_TEMP_ROLES",
      payload: {
        type: _type,
        pos: _pos,
        value: _value,
        roleIndex: _roleIndex
      }
    }
  }
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

export function addTempRole(_type, _pos){
  return {
    type: "ADD_TEMP_ROLE",
    payload: {
      type: _type,
      pos: _pos
    }
  }
}

export function addForm(_type){
  var payload = {};
  switch (_type) {
    case "education":
      payload = {
        type: _type,
        values: {
          title: "",
          school: "",
          location: "",
          degree: "",
          gradDate: ""
        }
      }
      break;
    case "experience":
      payload = {
        type: _type,
        values: {
          employer: "",
          title: "",
          roles: [],
          duration: ""
        }
      }
      break;
    case "volunteering":
      payload = {
        type: _type,
        values: {
          duration: "",
          organization: "",
          roles: []
        }
      }
      break;
    case "other":
      payload = {
        type: _type,
        values: {
          organization: "",
          title: "",
          duration: "",
          roles: []
        }
      }
      break;
    default:
  }
  return {
    type: "ADD_FORM",
    payload: payload
  }
}
