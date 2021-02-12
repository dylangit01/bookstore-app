import { FETCH_ALL, UPDATE, DELETE, CREATE } from '../constants/actionsTypes'

const booksReducer = (books = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload

    case CREATE:
      return [...books, action.payload]

    case UPDATE:
      return books

    case DELETE:
      return books

    default:
      return books
  }
}

export default booksReducer