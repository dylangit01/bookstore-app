import {useState, useEffect} from 'react'
import useStyles from './Form-styles'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import CurrencyTextField from '@unicef/material-ui-currency-textfield'
import { useDispatch, useSelector } from 'react-redux'
import { createBook, updateBook } from '../../react-redux/actions/books-actions'
import { getCurrentId } from '../../react-redux/actions/books-actions'

const Form = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const initialState = {bookName: '', price: '', category: '', description: ''}
    const [bookData, setBookData] = useState(initialState)
    const [priceError, setPriceError] = useState('')

    const currentId = useSelector((state) => state.currentId)

    const book = useSelector(state => currentId && state.books.find(b => b._id === currentId) )

    useEffect(() => {
        if(book) setBookData(book)
    }, [book])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (currentId) {
            dispatch(updateBook(currentId, bookData))
        } else {
            dispatch(createBook(bookData))
        }
        clear()
    }

    const clear = () => {
        dispatch(getCurrentId(null))
        setBookData(initialState)
    }

    const onChange = event => {
        let valid;
        switch (event.target.id) {
            case 'price':
                setBookData({ ...bookData, price: event.target.value })
                
                valid = /^[0-9]+\.[0-9]+$/.test(event.target.value)
                if (!valid) {
                    setPriceError('Price is invalid')
                } else {setPriceError('')}
                break
            default:
                break
        }
    
    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete ="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={ handleSubmit }>
                <Typography variant='h6'>{currentId ? 'Updating' : 'Creating'} a Book</Typography>
                
                <TextField name='bookName' id='bookName' variant='outlined' label='Book Name' fullWidth 
                    value={bookData.bookName}
                    onChange={event => setBookData({...bookData, bookName: event.target.value})} />
 
                <CurrencyTextField name='price' id='price' variant='outlined' label='Price' fullWidth required 
                    currencySymbol="$"
                    minimumValue="0"
                    outputFormat="string"
                    decimalCharacter="."
		            digitGroupSeparator=","
                    error={priceError.length !== 0}
                    helperText={priceError}
                    value= {bookData.price}
                    onChange={onChange} />
                
                <TextField name='category' id='category' variant='outlined' label='Category' fullWidth required
                    value={bookData.category}
                    onChange={event => setBookData({ ...bookData, category: event.target.value })} />
                
                <TextField name='description' variant='outlined' label='Description' fullWidth multiline rows={4} helperText='Please add discription for this book'
                    value={bookData.description}
                    onChange={event => setBookData({ ...bookData, description: event.target.value })} />
                
                <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth
                    disabled={bookData.bookName.length === 0 || bookData.price.length === 0 || bookData.category.length === 0 || priceError.length !== 0}
                >Submit</Button>
                <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
        
            </form>
        </Paper>
    )
}

export default Form
