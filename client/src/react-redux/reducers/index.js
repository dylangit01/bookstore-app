import {combineReducers} from 'redux'
import books from './books-reducer'
import currentId from './getid-reducer'
import popup from './popup-reducer'
import formValue from './form-reducer'

export default combineReducers({
    books, currentId, popup, formValue
})