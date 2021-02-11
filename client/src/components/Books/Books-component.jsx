import Book from '../Book/Book-component'
import useStyles from './Books-styles'

const Books = () => {
    const classes = useStyles()
    return (
        <>
            <h1>Books</h1>
            <Book />
            <Book />
        </>
    )
}

export default Books
