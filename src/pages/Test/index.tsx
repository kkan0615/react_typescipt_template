import React, { useState } from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Test: React.FC = () => {
  const [title] = useState('Hello world')

  return (
    <div>
      <Card>
        <CardContent>
          <Typography color="secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography color="secondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            a benevolent smile
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default Test
