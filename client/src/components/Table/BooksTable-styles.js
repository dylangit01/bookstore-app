import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({
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
      width: '45%',
    },
  },
  newBtn: {
    position: 'absolute',
    right: '30px',
    '@media (max-width: 900px)': {
      padding: '7px 10px',
      right: '70px',
    },
    '@media (max-height: 400px)': {
      right: '200px',
    },
  },
  toolbarMb: {
    paddingLeft: '0',
    '@media (max-width: 900px)': {
      width: '130%',
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
  tMobile: {
    maxWidth: '125px',
    minWidth: '125px',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    textAlign: 'center',
  },
  actionMobile: {
    maxWidth: '125px',
    minWidth: '125px',
    whiteSpace: 'nowrap',
    textAlign: 'center',
  },
}))