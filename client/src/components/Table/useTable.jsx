import React, { useState } from 'react'
import { makeStyles, Table, TableCell, TableHead, TablePagination, TableRow } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    table: {
        marginTop: theme.spacing(3),
        '& thead th': {
            fontWeight: '600',
            color: theme.palette.primary.main,
            backgroundColor: '#c9cbff',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            // textAlign: 'center !important',
        },
        '& tbody td': {
            fontWeight: '300',
        },
        '& tbody tr:hover': {
            backgroundColor: '#fffbf2',
        },
    },
    paginationMb: {
        '@media (max-width: 900px)': {
            width: '110vw'
        },
        '@media (max-height: 400px)': {
            width: '90vw'
          },
    }
    
}))

const useTable = (books, headCells, filterFn) => {
    const classes = useStyles()

    const pages = [5, 10, 25]
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(pages[page])
    
    const TblContainer = ({children}) => (
        <Table className={classes.table} >
            {children}
       </Table>
    )
    
    const TblHead = () => {
        return (
            <TableHead >
                <TableRow>
                    {
                        headCells.map(headcell => (
                            <TableCell key={headcell.id}>
                                {headcell.label}
                            </TableCell>
                        ))
                    }
                </TableRow>
            </TableHead>
    )}

    const handleChangePage = (e, newPage) => {
        setPage(newPage)
    }
    const handleChangeRowsPerPage = e => {
        setRowsPerPage(parseInt(e.target.value, 10))
        setPage(0)
    }

    const TblPagination = () => (
        <TablePagination
            className={classes.paginationMb}
            component='div'
            page = {page}
            rowsPerPageOptions={pages}
            rowsPerPage={rowsPerPage}
            count={books.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    )

    const recordsAfterPagingAndSorting = () => {
        return filterFn.fn(books).slice(page * rowsPerPage, (page + 1) * rowsPerPage)
    }

    return { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting }
}

export default useTable
