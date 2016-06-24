import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

const ListTask = () => (
  <div>
    <List>
      <ListItem primaryText="Inbox"/>
      <ListItem primaryText="Starred"/>
      <ListItem primaryText="Sent mail"/>
      <ListItem primaryText="Drafts"/>
      <ListItem primaryText="Inbox"/>
    </List>
    <Divider />
    <List>
      <ListItem primaryText="All mail"/>
      <ListItem primaryText="Trash"/>
      <ListItem primaryText="Spam"/>
      <ListItem primaryText="Follow up"/>
    </List>
  </div>
);

export default ListTask;