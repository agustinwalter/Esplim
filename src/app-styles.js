import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  divLogo: {
    padding: '22px 0px'
  },
  divLogoWhite: {
    position: 'absolute',
    bottom: '20px',
    [theme.breakpoints.down('xs')]: {
      position: 'relative',
    }
  },
  divScreenOne: {
    height: '100vh',
    textAlign: 'center',
    boxSizing: 'border-box'
  },
  divTextScrOne: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '40px'
  },
  phoneImg: {
    objectFit: 'contain',
    height: '90%'
  },
  divContentScrOne: {
    height: 'calc(100vh - 90px)',
    display: 'flex',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      height: 'auto',
      padding: '0 10px'
    }
  },
  h1Variant: {
    fontSize: '60px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '48px'
    }
  },
  h2Variant: {
    fontSize: '30px',
    marginTop: '14px',
    marginBottom: '50px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '22px',
      marginBottom: '16px'
    }
  },
  h2Variant2: {
    color: 'white',
    width: '55vw',
    fontSize: '28px',
    textAlign: 'center',
    marginBottom: '50px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '22px',
      width: '95%',
      marginTop: '40px',
      textAlign: 'justify',
      marginBottom: '18px',
    }
  },
  btnOne: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  btnOne2: {
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      margin: '0',
      marginBottom: '40px',
    }
  },
  cardPhoto: {
    height: 0,
    paddingTop: '66%',
  },
  divCardPhoto: {
    width: '35%',
    transform: 'rotate(-10deg)',
    [theme.breakpoints.down('sm')]: {
      width: '40%',
    },
    [theme.breakpoints.down('xs')]: {
      transform: 'none',
      marginTop: '30px',
      width: '100%',
    }
  },
  divCardPhoto2: {
    transform: 'rotate(10deg)',
    [theme.breakpoints.down('xs')]: {
      transform: 'none',
    }
  },
  divScrTwo: {
    display: 'flex',
    alignItems: 'center',
    height: '100vh',
    justifyContent: 'space-evenly',
    position: 'relative',
    paddingBottom: '60px',
    boxSizing: 'border-box',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
      height: 'auto',
      marginTop: '60px',
      padding: '0 20px',
    }
  },
  divScrTwo2: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    }
  },
  divTextScrTwo: {
    width: '35%',
    textAlign: 'justify',
    [theme.breakpoints.down('sm')]: {
      width: '40%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  h5Variant: {
    fontSize: '20px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
    }
  },
  fab: {
    position: 'absolute',
    bottom: '20px',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  divFaq: {
    flexDirection: 'column',
    backgroundColor: '#f5f5f5',
    justifyContent : 'center'
  },
  divEnd: {
    backgroundColor: 'black',
  }
}))

export default useStyles