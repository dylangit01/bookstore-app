import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    },
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))