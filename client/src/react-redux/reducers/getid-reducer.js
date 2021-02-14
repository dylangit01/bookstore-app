import { GET_ID, CLEAR_ID } from '../constants/actionsTypes'

const getIdReducer = (id='', action) => {
    switch (action.type) {
        case GET_ID:
            return action.payload
        
        case CLEAR_ID:
            return id=''
        default:
            return id
    }
}

export default getIdReducer