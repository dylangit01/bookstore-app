import React, { useState, useEffect } from 'react'
import useStyles from './Form-styles'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { createBook, updateBook, getCurrentId, } from '../../react-redux/actions/books-actions'
import Popup from '../../components/Popup/Popup'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const initialValue = { bookName: '', price: '', category: '', description: '' }
const validateOnChange = true

const BookForm = () => {
  const classes = useStyles()
  const [values, setValues] = useState(initialValue)
  const [errors, setErrors] = useState({})
  const dispatch = useDispatch()
  const currentId = useSelector((state) => state.currentId)
  const popup = useSelector((state) => state.popup)

  const book = useSelector(
    (state) => currentId && state.books.find((b) => b._id === currentId)
  )

  useEffect(() => {
    if (book) setValues(book)
  }, [book])

  const validate = (fieldValues = values) => {
    let temp = { ...errors }

    if ('bookName' in fieldValues)
      temp.bookName = fieldValues.bookName ? '' : 'This field is required.'
    if ('price' in fieldValues)
      temp.price = /^(?:0|[1-9]\d*)(?:\.(?!.*000)\d+)?$/.test(fieldValues.price)
        ? ''
        : 'Price is incorrect format'
    if ('category' in fieldValues)
      temp.category = fieldValues.category ? '' : 'This field is required'

    setErrors({ ...temp })

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === '')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
    if (validateOnChange) {
      validate({ [name]: value })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validate()) {
      if (currentId) {
        dispatch(updateBook(currentId, values))
      } else {
        dispatch(createBook(values))
      }
      clear()
    } else {
      alert('Please fix below error input')
    }
  }

  const clear = () => {
    dispatch(getCurrentId(null))
    setValues(initialValue)
    setErrors({})
  }

  return (
    <>
      <Popup title={currentId ? 'Updating' : 'Creating'} openPopup={popup}>
        <Paper className={classes.paper}>
          <form
            autoComplete='off'
            noValidate
            className={`${classes.root} ${classes.form}`}
            onSubmit={handleSubmit}
          >
            <Typography variant='h6'></Typography>

            <TextField
              name='bookName'
              variant='outlined'
              label='Book Name'
              fullWidth
              value={values.bookName}
              onChange={handleChange}
              {...(errors.bookName && {
                error: true,
                helperText: errors.bookName,
              })}
            />

            <TextField
              InputProps={{
                startAdornment: <AttachMoneyIcon />,
              }}
              name='price'
              variant='outlined'
              label='Price'
              fullWidth
              value={values.price}
              onChange={handleChange}
              {...(errors.price && { error: true, helperText: errors.price })}
            />

            <TextField
              name='category'
              variant='outlined'
              label='Category'
              fullWidth
              value={values.category}
              onChange={handleChange}
              {...(errors.category && {
                error: true,
                helperText: errors.category,
              })}
            />
            <TextField
              name='description'
              variant='outlined'
              label='Description'
              fullWidth
              multiline
              rows={4}
              helperText='Please add discription for this book'
              value={values.description}
              onChange={handleChange}
            />
            <Button
              className={classes.buttonSubmit}
              variant='contained'
              color='primary'
              size='large'
              type='submit'
              fullWidth
            >
              Submit
            </Button>
            <Button
              variant='contained'
              color='secondary'
              size='small'
              onClick={clear}
              fullWidth
            >
              Reset
            </Button>
          </form>
        </Paper>
      </Popup>
    </>
  )
}

export default BookForm
