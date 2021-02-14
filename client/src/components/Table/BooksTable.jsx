import React, { useState } from 'react'
import useTable from './useTable'
import { makeStyles, Paper, TableBody, TableRow, TableCell, Toolbar, InputBase, Button, } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import SearchIcon from '@material-ui/icons/Search'
import AddIcon from '@material-ui/icons/Add'
import { setPopupOn, getCurrentId, deleteBook, } from '../../react-redux/actions/books-actions'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'

const useStyles = makeStyles((theme) => ({
  pageContent: {
    overflowX: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto',
    margin: theme.spacing(3),
    padding: theme.spacing(3),
  },
  searchInput: {
    opacity: '.6',
    padding: `0 ${theme.spacing(1)}px`,
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: '#e7e6e1',
      borderRadius: '3px',
    },
    '& .MuiSvgIcon-root': {
      marginRight: theme.spacing(1),
    },
    width: '50%',
    height: '50px',
    border: '1px solid #ddd',
    borderRadius: '3px',
    '@media (max-width: 900px)': {
      width: '45%'
    }
  },
  newBtn: {
    position: 'absolute',
    right: '30px',
    '@media (max-width: 900px)': {
      padding: '7px 10px',
      right: '70px'
    },
    '@media (max-height: 400px)': {
      right: '200px'
    },

  },
  toolbarMb: {
    paddingLeft: '0',
    '@media (max-width: 900px)': {
      width: '130%',
      display: 'flex',
      justifyContent: 'space-between'
    },
    // '@media (max-height: 350px)': {
    //   // width: '100%',
    //   display: 'flex',
    //   justifyContent: 'space-between'
    // },
  },
  tMobile: {
    maxWidth: '125px',
    minWidth: '125px',
    padding: '0 !important',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    textAlign: 'center !important',
  }

}))

const headCells = [
  { id: 'bookName', label: 'Book Name' },
  { id: 'price', label: 'Book Price' },
  { id: 'category', label: 'Book Category' },
  { id: 'description', label: 'Book Description' },
  { id: 'actions', label: 'Actions' },
]

const BooksTable = () => {
  const classes = useStyles()
  const books = useSelector((state) => state.books)
  const dispatch = useDispatch()

  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items
    },
  })

  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  } = useTable(books, headCells, filterFn)

  const handleSearch = (e) => {
    let target = e.target
    setFilterFn({
      fn: (items) => {
        if (target.value === '') return items
        else
          return items.filter((x) =>
            x.bookName.toLowerCase().includes(target.value)
          )
      },
    })
  }

  return (
    <>
      <Paper className={classes.pageContent}>
        <Toolbar className={classes.toolbarMb}>
          <InputBase
            className={classes.searchInput}
            placeholder='Search book'
            startAdornment={<SearchIcon fontSize='small' />}
            onChange={handleSearch}
          />

          <Button
            className={classes.newBtn}
            variant='outlined'
            color='primary'
            size='large'
            type='submit'
            startIcon={<AddIcon />}
            onClick={() => dispatch(setPopupOn(true))}
          >Add New
          </Button>
        </Toolbar>

        <TblContainer >
          <TblHead />

          <TableBody>
            {recordsAfterPagingAndSorting().map((book) => (
              <TableRow className={classes.tMobile} key={book._id}>
                <TableCell>{book.bookName}</TableCell>
                <TableCell>$ {book.price}</TableCell>
                <TableCell>{book.category}</TableCell>
                <TableCell className={classes.tMobile} >{book.description}</TableCell>
                <TableCell>
                  <Button
                    color='primary'
                    onClick={() => {
                      dispatch(getCurrentId(book._id))
                      dispatch(setPopupOn(true))
                    }}
                  >
                    <EditOutlinedIcon fontSize='small' />
                  </Button>
                  <Button
                    color='secondary'
                    onClick={() => dispatch(deleteBook(book._id))}
                  >
                    <DeleteOutlineIcon fontSize='small' />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
    </>
  )
}

export default BooksTable
