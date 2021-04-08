export default (state = { user: "", loading: false }, action) => {
  switch (action.type) {
    case "LOADING_USER":
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
      return {
        ...state,
        user: "",
      }
    default:
      return state
  }
}
