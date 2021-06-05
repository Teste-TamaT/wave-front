import React, { useState } from "react";
import { MenuIcon, AccountCircleIcon, PieChartIcon } from "@material-ui/icons";
import {
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  Typography,
  IconButton,
  Container,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";


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

  title: {
    marginLeft: 24
  }
}))

export default function NavBar() {
  const [useDrawerState, setDrawerState] = useState(false)
  const classes = useStyles()

  const list = () => (
    <List>
      <ListItem button key='Portfolio' disabled>
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
          <Typography className={ classes.title } variant="inherit">WAVE</Typography>
        </Container>
        <Drawer
          anchor={'left'}
          open={useDrawerState}
          onClose={() => setDrawerState(false)}
        >
          {list()}
        </Drawer>
        <IconButton className={classes.profileButton}>
          <AccountCircleIcon color="secondary" />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
