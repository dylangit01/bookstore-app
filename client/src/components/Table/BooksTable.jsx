import React, { useState } from 'react'
import useTable from './useTable'
import { Paper, TableBody, TableRow, TableCell, Toolbar, InputBase, Button, } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import SearchIcon from '@material-ui/icons/Search'
import AddIcon from '@material-ui/icons/Add'
import { setPopupOn, getCurrentId, deleteBook, } from '../../react-redux/actions/books-actions'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import useStyles from './BooksTable-styles'

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
          >
            Add New
          </Button>
        </Toolbar>

        <TblContainer>
          <TblHead />

          <TableBody>
            {recordsAfterPagingAndSorting().map((book) => (
              <TableRow className={classes.tMobile} key={book._id}>
                <TableCell className={classes.tMobile}> {book.bookName} </TableCell>
                <TableCell className={classes.tMobile}> $ {book.price} </TableCell>
                <TableCell className={classes.tMobile}> {book.category} </TableCell>
                <TableCell className={classes.tMobile}> {book.description} </TableCell>
                <TableCell className={classes.actionMobile}>
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
