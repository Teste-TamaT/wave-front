import { useState } from 'react'
import { useHistory } from 'react-router-dom'
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
  makeStyles,
} from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import MenuIcon from '@material-ui/icons/Menu'
import PieChartIcon from '@material-ui/icons/PieChart'

const useStyles = makeStyles(() => ({
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
    marginLeft: 24,
  },
}))

export default function NavBar() {
  const [useDrawerState, setDrawerState] = useState(false)
  const history = useHistory()
  const classes = useStyles()

  const handleItemsClick = (path: string) => {
    history.push(path)
    setDrawerState(false)
  }

  const menuItems = [
    {
      text: 'Portfólio',
      icon: <PieChartIcon />,
      path: '/portfolio',
      isDisabled: true
    },
  ]

  const itemsList = () => (
    <List>
      {menuItems.map(({ path, icon, text, isDisabled }) => (
        <ListItem key={path} button onClick={() => handleItemsClick(path)} disabled={ isDisabled }>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  )

  return (
    <AppBar>
      <Toolbar>
        <Container className={classes.menuContainer}>
          <IconButton>
            <MenuIcon color="secondary" onClick={() => setDrawerState(true)} />
          </IconButton>
          <Typography className={classes.title} variant="inherit">
            WAVE
          </Typography>
        </Container>
        <Drawer
          anchor={'left'}
          open={useDrawerState}
          onClose={() => setDrawerState(false)}
        >
          { itemsList() }
        </Drawer>
        <IconButton className={classes.profileButton}>
          <AccountCircleIcon color="secondary" />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
