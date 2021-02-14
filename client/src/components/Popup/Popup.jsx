import { Dialog, DialogTitle, DialogContent, makeStyles, Typography, Button, } from '@material-ui/core'
import React from 'react'
import CloseIcon from '@material-ui/icons/Close'
import { setPopupOff, clearCurrentId } from '../../react-redux/actions/books-actions'
import { useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: 'absolute',
    top: theme.spacing(5),
    '@media (max-width: 900px)': {
      padding: theme.spacing(1),
  }
  },
  dialogTitle: {
    paddingRight: '0px',
  },
  popContent: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '96%'
  }
}))

const Popup = ({ title, children, openPopup }) => {
  const classes = useStyles()
  const dispatch= useDispatch()
  return (
    <Dialog open={openPopup} className={classes.dialogWrapper}>
      <DialogTitle className={classes.dialogTitle}>
        <div className={classes.popContent}>
          <Typography variant='h6' component='div'>
            {title} A Book
          </Typography>
          <Button color='secondary' onClick={() => { dispatch(clearCurrentId()); dispatch(setPopupOff(false))}} >
            <CloseIcon />
          </Button>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  )
}

export default Popup
