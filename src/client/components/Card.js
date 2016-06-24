import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ListTask from './ListTask'

const CardTime = () => (
  <Card>
    <CardHeader
      title="User"
      // subtitle="Subtitle"
      avatar="http://lorempixel.com/100/100/nature/"
    />
    <CardMedia
      overlay={<CardTitle title="Project" subtitle="Project description" />}
    >
      <img src="http://lorempixel.com/600/337/nature/" />
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      <ListTask />
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
);

export default CardTime;