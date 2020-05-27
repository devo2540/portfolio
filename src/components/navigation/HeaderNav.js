import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { 
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#000',
    opacity: '0.6',
  }
}));

const HeaderNav = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}

          <Typography variant="h6" className={classes.title}>
            <Link to="/">the.devin.carter</Link>
          </Typography>

          <Link to="/story">
            <Button color="inherit">My Story</Button>
          </Link>
          <Link to="/work">
            <Button color="inherit">My Work</Button>
          </Link>
          <Link to="/skills">
            <Button color="inherit">My Skills</Button>
          </Link>
          <Link to="/blog">
            <Button color="inherit">My Blog</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
 
export default HeaderNav;