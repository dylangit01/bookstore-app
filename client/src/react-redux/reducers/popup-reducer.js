import { POPUP_OFF, POPUP_ON } from '../constants/actionsTypes'

const popupReducer = (popup = false, action) => {
  switch (action.type) {
    case POPUP_ON:
      return (popup = action.payload)
    case POPUP_OFF:
      return (popup = action.payload)
    default:
      return popup
  }
}

export default popupReducer
