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
    overFlow: 'hidden',
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
    history.push('/Home')
  }

  function goBack() {
    history.go(-1)
  }

  return (
    <div className="error-404-page">
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
      <div className="content">
        <div className="text-part">
          <Typography variant="h1" component="h2" gutterBottom>
            404
          </Typography>
          <br />
          <Typography variant="h6" component="h2" gutterBottom>
            Sorry there is no page you are looking for
          </Typography>
        </div>
        <Grid
          container
          spacing={2}
          justify="center"
          className="buttons"
        >
          <Grid
            item
          >
            <Button className={classes.button} variant="outlined" onClick={goBack}>
              Back
            </Button>
          </Grid>
          <Grid
            item
          >
            <Button className={classes.button} variant="contained" color="primary" onClick={backToHome}>
              HOME
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
export default NotFound
