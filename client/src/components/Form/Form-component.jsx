import {useState} from 'react'
import useStyles from './Form-styles'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import CurrencyTextField from '@unicef/material-ui-currency-textfield'
import { useDispatch } from 'react-redux'
import { createBook } from '../../react-redux/actions/books-actions'

const Form = ({currentId}) => {
    const classes = useStyles()
    const [bookData, setBookData] = useState({ bookName: '', price: '', category: '', description: '' })
    const [priceError, setPriceError] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(createBook(bookData))
    }

    const clear = () => {
    }

    const onChange = event => {
        let valid;
        switch (event.target.id) {
            case 'price':
                setBookData({ ...bookData, price: event.target.value })
                
                valid = /^(?:0|[1-9]\d*)(?:\.(?!.*000)\d+)?$/.test(event.target.value)
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
                >Create</Button>
                <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
        
            </form>
        </Paper>
    )
}

export default Form
