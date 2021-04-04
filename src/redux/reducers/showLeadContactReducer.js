export default (state = [], action) => {
  switch (action.type) {
    case "SHOW_LEAD_CONTACT":
      return action.leadContact
    default:
      return state
  }
}
