import {makeStyles} from '@material-ui/core/styles'

export default makeStyles(()=> ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        color: 'rgba(0,183,255, 1)',
        '@media (max-width: 900px)': {
          fontSize: '50px'
        }
      },
      image: {
        marginLeft: '20px',
        '@media (max-width: 900px)': {
          height: '35px'
        }
      },
      eventBtn: {
        marginBottom: '20px'
      }
}))