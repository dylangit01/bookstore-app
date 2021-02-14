import Book from '../Book/Book-component'
import useStyles from './Books-styles'
import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@material-ui/core'

const Books = () => {
  const classes = useStyles()
  const books = useSelector((state) => state.books)
    console.log(books)

  return !books.length ? <div className={classes.circularProcess}><CircularProgress/></div> : (
        <Grid className={classes.container} container alignItems='stretch' spacing={3} >
              {
              [...books].reverse().map(book => (
                  <Grid item key={book._id} xs={12} xm={6} md={6}>
                      <Book book={book} />
                  </Grid>
                ))
              }
        </Grid>
     )
}

export default Books
