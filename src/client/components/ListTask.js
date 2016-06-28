import React from 'react'
import {List, ListItem} from 'material-ui/List'
import ContentInbox from 'material-ui/svg-icons/content/inbox'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import ContentSend from 'material-ui/svg-icons/content/send'
import ContentDrafts from 'material-ui/svg-icons/content/drafts'
import Divider from 'material-ui/Divider'
import ActionInfo from 'material-ui/svg-icons/action/info'

const ListTask = () => (
  <div>
    <List>
      <Divider />
      <ListItem primaryText="Winter is comming"/>
      <Divider />
      <ListItem primaryText="Conquest Westeros"/>
      <Divider />
      <ListItem primaryText="Fly with dragons"/>
      <Divider />
      <ListItem primaryText="Run with wolfs"/>
      <Divider />
      <ListItem primaryText="Slay the mad king"/>
    </List>
  </div>
)

export default ListTask