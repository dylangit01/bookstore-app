import React, {useState, useEffect} from 'react'
import {Container, AppBar, Typography, Grow, Grid,} from '@material-ui/core'
import bookstore from './images/book_store.png'
import Form from './components/Form/Form-component'
import Books from './components/Books/Books-component'
import useStyles from './App-styles'
import {useDispatch} from 'react-redux'
import {getBooks } from './react-redux/actions/books-actions'

const App = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getBooks())
    }, [dispatch])

    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align='center'>BookStore</Typography>
                <img className={classes.image} src={bookstore} alt="bookstore" height='60'/>
            </AppBar>
            <Grow in>
                <Container>
                  <Grid container justify='space-between' alignItems='stretch' spacing={1}>
                    <Grid item xs={12} sm={4}>
                      <Form></Form>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                      <Books></Books>
                    </Grid>
                  </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App
