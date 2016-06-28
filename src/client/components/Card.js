import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ListTask from './ListTask'

const CardTime = () => (
  <Card>
    <CardMedia>
      <img src="http://lorempixel.com/600/337/nature/" />
    </CardMedia>
    <CardText>
      <ListTask />
    </CardText>
  </Card>
);

export default CardTime;