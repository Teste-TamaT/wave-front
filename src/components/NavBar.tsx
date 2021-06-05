import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Container from '@material-ui/core/Container'
import PieChartIcon from '@material-ui/icons/PieChart'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

const useStyles = makeStyles((theme) => ({
  menuContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    paddingLeft: 0,
    alignItems: 'center',
  },

  profileButton: {
    marginRight: 0,
  },
}))

export default function NavBar() {
  const [useDrawerState, setDrawerState] = useState(false)
  const classes = useStyles()

  const list = () => (
    <List>
      <ListItem button key='Portfolio'>
        <ListItemIcon>
          <PieChartIcon />
        </ListItemIcon>
        <ListItemText>
          Portfólio
        </ListItemText>
      </ListItem>
    </List>
  )

  return (
    <AppBar>
      <Toolbar>
        <Container className={classes.menuContainer}>
          <IconButton>
            <MenuIcon color="secondary" onClick={() => setDrawerState(true)} />
          </IconButton>
          <Typography variant="inherit">WAVE</Typography>
        </Container>
        <Drawer
          anchor={'left'}
          open={useDrawerState}
          onClose={() => setDrawerState(false)}
        >
          {list()}
        </Drawer>
        <IconButton className={classes.profileButton} disabled>
          <AccountCircleIcon color="secondary" />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
