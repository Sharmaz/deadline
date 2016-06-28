import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import ListTask from './ListTask'
import Clock from './clock'
import moment from 'moment'

const CardTime = () => (
  <Card>
    <CardMedia>
      <Clock />
      <img src="http://lorempixel.com/600/337/nature/" />
    </CardMedia>
    <CardText>
      <ListTask />
    </CardText>
  </Card>
)

export default CardTime