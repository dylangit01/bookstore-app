import Book from '../Book/Book-component'
import useStyles from './Books-styles'
import {useSelector} from 'react-redux'


const Books = () => {
    const classes = useStyles()
    const books = useSelector((state) => state.books ) 
    console.log(books);
    return (
        <>
            <h1>Books</h1>
            <Book />
            <Book />
        </>
    )
}

export default Books
