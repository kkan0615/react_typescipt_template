import React, { useState } from 'react'
import moment from 'moment'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'

const Clock: React.FC = () => {
  const [time] = useState(moment().format('MMMM Do YYYY, h:mm:ss a'))
  return (
    <div>
      <Card>
        <CardContent>
          hello clocks:
          {' '}
          {time}
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default Clock
