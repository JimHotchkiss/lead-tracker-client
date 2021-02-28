export default (state = [], action) => {
  switch (action.type) {
    case "SET_CONTACTS":
      return action.contacts
    case "CLEAR_CONTACTS":
      return []
    default:
      return state
  }
}
