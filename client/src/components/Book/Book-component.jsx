import useStyles from './Book-styles'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete'
import readbook from '../../images/readbook.jpg'
import { getCurrentId, deleteBook } from '../../react-redux/actions/books-actions'
import {useDispatch} from 'react-redux'

const Book = ({book}) => {
    const classes = useStyles()

    const dispatch = useDispatch()

    return (
        <Card className={classes.card}>

            <CardMedia className={classes.media} image={readbook} />
            <div className={classes.overlay}>
                <Typography variant="h5">{book.bookName}</Typography>
                <div className={classes.details}>
                    <Typography variant='h6'>Category: {book.category}</Typography>
                    <Typography variant='h6'>Price: $ {book.price}</Typography>
                </div>
                
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: 'skyblue' }} size='small' onClick={() => dispatch(getCurrentId(book._id))}>
                    <EditIcon fontSize='default'/>
                </Button>
            </div>
            <CardContent >
                <Typography variant='body2' color='textPrimary' component='p' align='left' style={{wordWrap: 'break-word'}}>{book.description}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='secondary' onClick={() => dispatch(deleteBook(book._id))}>
                <DeleteIcon fontSize='small' />
                Delete
                </Button>
            </CardActions>
            
        </Card>
    )
}

export default Book
