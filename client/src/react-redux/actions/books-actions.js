import * as api from '../../api/bookAPI'
import { FETCH_ALL, CREATE, UPDATE, DELETE, GET_ID, POPUP_ON, POPUP_OFF, CLEAR_ID, FORM_CLEANUP } from '../constants/actionsTypes'

export const getBooks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBooks()
    dispatch({ type: FETCH_ALL, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const createBook = (newBook) => async (dispatch) => {
  try {
    const { data } = await api.createBook(newBook)
    dispatch({ type: CREATE, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const updateBook = (id, book) => async (dispatch) => {
  try {
    const { data } = await api.updateBook(id, book)
    dispatch({ type: UPDATE, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const deleteBook = id => async (dispatch) => {
  try {
    await api.deleteBook(id)
    dispatch({type: DELETE, payload: id})
  } catch (error) {
    console.log(error);
  }
}

export const getCurrentId = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_ID, payload: id })
  } catch (error) {
    console.log(error)
  }
}

export const clearCurrentId = () => dispatch => {
  dispatch({type: CLEAR_ID})
}

export const setPopupOn = (bl) => dispatch => {
  dispatch({type: POPUP_ON, payload:bl})
}

export const setPopupOff = (bl) => dispatch => {
  dispatch({type: POPUP_OFF, payload:bl})
}


// export const searchBook = (searchInput) => async(dispatch) => {
//   try {
//     dispatch({type: SEARCH_BOOK, payload: searchInput})
//   } catch (error) {
//     console.log(error);
//   }
// }