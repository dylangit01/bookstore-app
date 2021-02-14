import React, { useState } from 'react'
import useTable from './useTable'
import { makeStyles, Paper, TableBody, TableRow, TableCell,Toolbar,InputBase } from '@material-ui/core'
import { useSelector } from 'react-redux'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(3),
    padding: theme.spacing(3),
  },
  searchInput: {
    opacity: '.6',
    padding: `0 ${theme.spacing(1)}px`,
    fontSize: '1rem',
    '&:hover': {
        backgroundColor: '#e7e6e1',
        borderRadius: '3px'
    },
    '& .MuiSvgIcon-root': {
        marginRight: theme.spacing(1)
    },
    width: '50%',
    height: '50px',
    border: '1px solid #ddd',
    borderRadius: '3px'
}
}))

const headCells = [
  { id: 'bookName', label: 'Book Name' },
  { id: 'price', label: 'Book Price' },
  { id: 'category', label: 'Book Category' },
  { id: 'description', label: 'Book Description' },
]

const BooksTable = () => {
  const classes = useStyles()
  const books = useSelector((state) => state.books)

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } = useTable(books, headCells)

  const handleSearch = e => {
    
  }
  return (
    <>
      <Paper className={classes.pageContent}>
        <Toolbar>
        <InputBase
              className={classes.searchInput}
              placeholder='Search book'
            startAdornment={<SearchIcon fontSize='small' />}
            onChange={handleSearch}
            />
        </Toolbar>
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().reverse().map((book) => (
              <TableRow key={book._id}>
                <TableCell>{book.bookName}</TableCell>
                <TableCell>$ {book.price}</TableCell>
                <TableCell>{book.category}</TableCell>
                <TableCell>{book.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination/>
      </Paper>
    </>
  )
}

export default BooksTable
