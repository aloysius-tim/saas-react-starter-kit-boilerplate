export const SET_ALERT = (state, {
  type,
  message,
  icon = null,
  translate = false
}) => {
  state.alert = {
    type: type,
    message: message,
    icon: icon,
    translate: translate
  }
}
