import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import './styles/index.scss'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    margin: theme.spacing(1),
    width: '100%',
  },
}))

const NotFound: React.FC = () => {
  // const {  } = props
  const history = useHistory()
  const classes = useStyles()

  function backToHome() {
    history.push('/Clocks')
  }

  function goBack() {
    history.go(-1)
  }

  return (
    <div
      className={classes.paper}
    >
      <Typography variant="h1" component="h2" gutterBottom>
        404
      </Typography>
      <div className="rocket">
        <div className="rocket-body">
          <div className="body" />
          <div className="fin fin-left" />
          <div className="fin fin-right" />
          <div className="window" />
        </div>
        <div className="exhaust-flame" />
        <ul className="exhaust-fumes">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
        <ul className="star">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
      <Grid
        container
        spacing={2}
        justify="center"
      >
        <Grid
          item
        >
          <Button className={classes.button} variant="contained" color="primary" onClick={backToHome}>
            HOME
          </Button>
        </Grid>
        <Grid
          item
        >
          <Button className={classes.button} variant="outlined" onClick={goBack}>
            Back
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}
export default NotFound
