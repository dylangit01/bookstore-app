import {combineReducers} from 'redux'
import books from './books-reducer'
import currentId from './getid-reducer'

export default combineReducers({
    books, currentId
})