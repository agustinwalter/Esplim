import React, { useRef } from 'react'
import logo from './assets/img/logo.png'
import logoWhite from './assets/img/logo-white.png'
import phone from './assets/img/phone.png'
import appDesign from './assets/img/app-design.jpg'
import money from './assets/img/money.jpg'
import calendar from './assets/img/calendar.jpg'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Paper from '@material-ui/core/Paper'
import Fab from '@material-ui/core/Fab'
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded'
import Link from '@material-ui/core/Link'
import useStyles from './app-styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const scrollTo = (ref) => window.scrollTo(0, ref.current.offsetTop)

function App() {
  const classes = useStyles()

  const sectionTwo = useRef(null)
  const sectionThree = useRef(null)
  const sectionFour = useRef(null)
  const sectionFive = useRef(null)
  const sectionSix = useRef(null)

  return (
    <React.Fragment>
      {/* Section one */}
      <div className={classes.divScreenOne}>
        <div className={classes.divLogo}>
          <img
            src={logo}
            alt="Logo de Esplim"
            height="42px">
          </img>
        </div>
        <div className={classes.divContentScrOne}>
          <div className={classes.divTextScrOne}>
            <Typography
              variant="h1"
              component="h2"
              className={classes.h1Variant}>
              ¿Creando una sartup?
            </Typography>
            <Typography
              variant="h4"
              component="h3"
              className={classes.h2Variant}>
              Desarrollamos tu <b>App</b> económica <span role="img" aria-label="Emoji feliz">😊</span>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.btnOne}
              onClick={() => scrollTo(sectionTwo)}>
              ¡Conoce más!
            </Button>
          </div>
          <img
            src={phone}
            alt="Foto de un celular"
            className={classes.phoneImg}>
          </img>
        </div>
      </div>

      {/* Section two */}
      <div
        className={classes.divScrTwo}
        ref={sectionTwo}>
        {/* Card photo */}
        <div className={classes.divCardPhoto}>
          <Paper elevation={20}>
            <Card>
              <CardMedia
                className={classes.cardPhoto}
                image={appDesign}
                title="Foto de una persona diseñando una app." />
            </Card>
          </Paper>
        </div>
        {/* Text */}
        <div className={classes.divTextScrTwo}>
          <Typography
            variant="h5"
            component="h4"
            className={classes.h5Variant} >
            Tienes la idea de una <b>App revolucionaria</b>, algo que cambiará el mundo. Has pensado cómo funcionará, cuantas pantallas tendrá e incluso el color del logo.
          </Typography>
          <br></br>
          <Typography
            variant="h5"
            component="h4"
            className={classes.h5Variant} >
            ¡Es momento de buscar programadores que hagan tu idea realidad! Así que abres <b>Google</b> y entras a la primer empresa de desarrollo que encuentras, pides un presupuesto y...
          </Typography>
          <br></br>
          <Typography
            variant="h5"
            component="h4"
            className={classes.h5Variant} >
            Si, <b>el costo es tan alto que no puedes pagarlo</b>. ¡No te preocupes! Estás es el lugar correcto, en <b>Esplim</b> desarrollamos Apps a medida, a un bajo coste y con facilidad de pago. <span role="img" aria-label="Emoji dinero">💰</span>
          </Typography>
        </div>
        <Fab
          color="primary"
          aria-label="scroll down"
          className={classes.fab}
          size="small"
          onClick={() => scrollTo(sectionThree)}>
          <ExpandMoreRoundedIcon />
        </Fab>
      </div>

      {/* Section three */}
      <div
        className={`${classes.divScrTwo} ${classes.divScrTwo2}`}
        ref={sectionThree}>
        {/* Text */}
        <div className={classes.divTextScrTwo}>
          <Typography
            variant="h5"
            component="h4"
            className={classes.h5Variant} >
            ¿Cómo? Pensamos en <b>MVP</b> (Producto Mínimo Viable)
          </Typography>
          <br></br>
          <Typography
            variant="h5"
            component="h4"
            className={classes.h5Variant} >
            Si conoces el mundo de las <b>startups</b>, estarás familiarizado con el término MVP. Es aquella versión de tu App que cumple las <b>necesidades básicas para salir al mercado</b>, puedes leer más sobre esto <Link href="https://www.inboundcycle.com/blog-de-inbound-marketing/bid/189238/qu-es-el-mvp-o-producto-m-nimo-viable" target='_blank'>aquí</Link>.
          </Typography>
          <br></br>
          <Typography
            variant="h5"
            component="h4"
            className={classes.h5Variant} >
            Al desarrollar esta versión mínima, omitiendo ciertas funcionalidades, podemos <b>reducir los tiempos de desarrollo</b> y obviamente, el <b>presupuesto final</b>.
          </Typography>
          <br></br>
          <Typography
            variant="h5"
            component="h4"
            className={classes.h5Variant} >
            Hablando de presupuesto, pagarás el monto que quieras, cuando quieras.
          </Typography>
        </div>
        {/* Card photo */}
        <div className={`${classes.divCardPhoto} ${classes.divCardPhoto2}`}>
          <Paper elevation={20}>
            <Card>
              <CardMedia
                className={classes.cardPhoto}
                image={money}
                title="Foto de monedas." />
            </Card>
          </Paper>
        </div>
        <Fab
          color="primary"
          aria-label="scroll down"
          className={classes.fab}
          size="small"
          onClick={() => scrollTo(sectionFour)}>
          <ExpandMoreRoundedIcon />
        </Fab>
      </div>

      {/* Section four */}
      <div
        className={classes.divScrTwo}
        ref={sectionFour}>
        {/* Card photo */}
        <div className={classes.divCardPhoto}>
          <Paper elevation={20}>
            <Card>
              <CardMedia
                className={classes.cardPhoto}
                image={calendar}
                title="Foto de un calendario." />
            </Card>
          </Paper>
        </div>
        {/* Text */}
        <div className={classes.divTextScrTwo}>
          <Typography
            variant="h5"
            component="h4"
            className={classes.h5Variant} >
            ¡Momento! ¿Seguro que así funciona la cosa? <span role="img" aria-label="Emoji pensando">🤔</span> Si, te lo explicaremos con <b>un ejemplo:</b>
          </Typography>
          <br></br>
          <Typography
            variant="h5"
            component="h4"
            className={classes.h5Variant} >
            Imagina que te pasamos un presupuesto de <b>$400</b> (dólares) y un tiempo de desarrollo de <b>40 días</b>. En este ejemplo, el precio por cada día de trabajo es de <b>$10</b>.
          </Typography>
          <br></br>
          <Typography
            variant="h5"
            component="h4"
            className={classes.h5Variant} >
            Este mes ahorraste <b>$100</b>, así que depositas ese monto y nuestros programadores comienzan a trabajar durante <b>10 días</b>. ($100 / $10 = 10)
          </Typography>
          <br></br>
          <Typography
            variant="h5"
            component="h4"
            className={classes.h5Variant} >
            Terminado ese periodo, el proyecto quedará en pausa hasta que decidas reanudarlo. Si el mes que viene consigues <b>$50</b> más, nuestros programadores trabajarán durante <b>5 días</b> más en tu proyecto. Así hasta finalizarlo ¿Comprendes?
          </Typography>
        </div>
        <Fab
          color="primary"
          aria-label="scroll down"
          className={classes.fab}
          size="small"
          onClick={() => scrollTo(sectionFive)}>
          <ExpandMoreRoundedIcon />
        </Fab>
      </div>

      {/* Section five */}
      <div
        className={`${classes.divScrTwo} ${classes.divFaq}`}
        ref={sectionFive}>
        <div></div>
        <Typography
          variant="h4"
          component="h3"
          className={classes.h2Variant}>
          Preguntas frecuentes
        </Typography>
        {/* Acordions */}
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
              <Typography>¿Cómo realizo los pagos?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Recibimos pagos por Mercado Pago, transferencia bancaria o PayPal.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
              <Typography>¿Cuándo realizo los pagos?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Los pagos deben realizarse antes de comenzar los días de trabajo.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header">
              <Typography>¿Cuándo me darán el código de mi App?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                El código que se desarrolle te pertenece en todo momento, puedes pedirlo cuando quieras.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header">
              <Typography>¿Subirán mi App a Play Store?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Si, te entregamos la App ya publicada y lista para que los usuarios la descarguen.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <Fab
          color="primary"
          aria-label="scroll down"
          className={classes.fab}
          size="small"
          onClick={() => scrollTo(sectionSix)}>
          <ExpandMoreRoundedIcon />
        </Fab>
      </div>

      {/* Section six */}
      <div
        className={`${classes.divScrTwo} ${classes.divFaq} ${classes.divEnd}`}
        ref={sectionSix}>
        <Typography
          variant="h4"
          component="h3"
          className={classes.h2Variant2}>
          Estás a pocos pasos de hacer realidad tu proyecto, envíanos un WhatsApp para charlar en más detalle y definir un presupuesto, ¡tranquil@, no robaremos tu idea! <span role="img" aria-label="Emoji feliz">😉</span>
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className={`${classes.btnOne} ${classes.btnOne2}`}
          href='https://wa.me/message/NFXV24XQVLBDD1'
          target='_blank'>
          ¡Contactar por WhatsApp!
        </Button>
        <div className={`${classes.divLogo} ${classes.divLogoWhite}`}>
          <img
            src={logoWhite}
            alt="Logo de Esplim blanco"
            height="42px">
          </img>
        </div>
      </div>

    </React.Fragment>
  )
}

export default App
