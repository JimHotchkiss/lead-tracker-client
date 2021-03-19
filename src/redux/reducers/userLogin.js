export default (state = { user: "", loading: false }, action) => {
  switch (action.type) {
    case "LOADING_USER":
      console.log("loading")
      return {
        ...state,
        user: "",
        loading: true,
      }
    case "USER_LOGIN":
      return {
        ...state,
        user: action.user,
        loading: false,
      }
    case "USER_LOGOUT":
      return null
    default:
      return state
  }
}
