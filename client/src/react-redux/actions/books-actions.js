import * as api from '../../api/bookAPI'
import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionsTypes'

export const getBooks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBooks()
    const action = { type: FETCH_ALL, payload: data }
    dispatch(action)
  } catch (error) {
    console.log(error)
  }
}

export const createBook = (newBook) => async(dispatch) => {
    try {
        const {data} = await api.createBook(newBook)
        const action = {type: CREATE, payload: data}
        dispatch(action)
    } catch(error) {
        console.log(error);
    }
}