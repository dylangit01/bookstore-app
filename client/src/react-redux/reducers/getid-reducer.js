import { GET_ID } from '../constants/actionsTypes'

const getIdReducer = (id='', action) => {
    switch (action.type) {
        case GET_ID:
            console.log(action.payload);
            return action.payload
        default:
            return id
    }
}

export default getIdReducer