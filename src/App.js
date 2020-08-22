import React from 'react'
import logo from './assets/img/logo.png'
import phone from './assets/img/phone.png'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  divLogo: {
    padding: '22px 0px'
  },
  divScreenOne: {
    width: '100vw',
    height: '100vh',
    textAlign: 'center',
    boxSizing: 'border-box'
  },
  divTextScrOne: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
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
  btnOne: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  }
}))

function App() {
  const classes = useStyles()

  return (
    <div className={classes.divScreenOne}>
      <div className={classes.divLogo}>
        <img src={logo} alt="Logo de Esplim" height="42px"></img>
      </div>
      <div className={classes.divContentScrOne}>
        <div className={classes.divTextScrOne}>
          <Typography variant="h1" component="h2" className={classes.h1Variant}>
            ¿Creando una sartup?
          </Typography>
          <Typography variant="h4" component="h3" className={classes.h2Variant}>
            Hacemos tu <b>App</b> simple y barata <span role="img" aria-label="Emoji feliz">😊</span>
          </Typography>
          <Button variant="contained" color="primary" className={classes.btnOne}>
            ¡Conoce más!
          </Button>
        </div>
        <img src={phone} alt="Foto de un celular" className={classes.phoneImg}></img>
      </div>
    </div>
  )
}

export default App
