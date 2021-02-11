import React from 'react'
import {Container, Paper, AppBar, Typography, Grow, Grid, Toolbar} from '@material-ui/core'
import bookstore from './images/book_store.png'
import Form from './components/Form/Form-component'
import Books from './components/Books/Books-component'
import useStyles from './App-styles'

const App = () => {
    const classes = useStyles()
    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align='center'>BookStore</Typography>
                <img className={classes.image} src={bookstore} alt="bookstore" height='60'/>
            </AppBar>
            <Grow in>
                <Container>
                  <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                    <Grid item xs={12} sm={7}>
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
