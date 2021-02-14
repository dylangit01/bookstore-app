import React, { useState, useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid, Button, CssBaseline } from '@material-ui/core'
import bookstore from './images/book_store.png'
// import Form from './components/Form/Form-component'
// import Books from './components/Books/Books-component'
import useStyles from './App-styles'
import { useDispatch } from 'react-redux'
import { getBooks } from './react-redux/actions/books-actions'
import { useSelector } from 'react-redux'
import BookForm from './components/Form/BookForm'
import BooksTable from './components/Table/BooksTable'

const App = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const currentId = useSelector((state) => state.currentId)

  const [showAddBook, setShowAddBook] = useState(false)

  useEffect(() => {
    dispatch(getBooks())
  }, [dispatch])

  return (
    <>
      <Container maxWidth='lg'>
        <AppBar className={classes.appBar} position='static' color='inherit'>
          <Typography className={classes.heading} variant='h2' align='center'>
            BookStore
          </Typography>
          <img className={classes.image} src={bookstore} alt='bookstore' height='60' />
        </AppBar>
        <Grow in>
          {/* <Container> */}
            <Grid container justify='center' alignItems='stretch' spacing={1}>
              <Grid item xs={12} sm={7}>
                <Button
                  className={classes.eventBtn}
                  variant={showAddBook ? 'outlined' : 'contained'}
                  color={showAddBook ? 'secondary' : 'primary'}
                  size='large'
                  fullWidth
                  onClick={() => setShowAddBook(!showAddBook)}
                >
                  {showAddBook ? (
                    'Close'
                  ) : (
                    <>{currentId ? 'Updating' : 'Adding'} a Book</>
                  )}
                </Button>
                {showAddBook && <BookForm />}
              </Grid>
              <Grid item xs={12}>
                {/* <Books /> */}
                <BooksTable />
              </Grid>
            </Grid>
          {/* </Container> */}
        </Grow>
      </Container>
      <CssBaseline />
    </>
  )
}

export default App
