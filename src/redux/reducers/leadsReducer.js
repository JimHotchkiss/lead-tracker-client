export default (state = [], action) => {
  switch (action.type) {
    case "SET_LEADS":
      return action.leads
    case "CLEAR_LEADS":
      return []
    default:
      return state
  }
}
