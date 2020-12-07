import React, { useContext } from 'react'
import { Button } from '@material-ui/core'
import './style/index.scss'
import { ThemeContext } from '../../themes/ThemeProvider'

const Home: React.FC = () => {
  const setThemeName = useContext(ThemeContext)

  return (
    <div className="home">
      <div className="rotate" />
      <Button
        variant="contained"
        color="primary"
        onClick={() => setThemeName('lightTheme')}
      >
        Set Light Theme
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setThemeName('darkTheme')}
      >
        Set Dark Theme
      </Button>

      <Button
        variant="contained"
      >
        test
      </Button>
    </div>
  )
}

export default Home
