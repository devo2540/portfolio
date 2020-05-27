import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { 
  AppBar,
  Toolbar,
  Typography,
  Button,
} from '@material-ui/core'

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
    opacity: '0.5',
  }
}));

const HeaderNav = ({ disabled }) => {
  const classes = useStyles()

  useEffect(() => {
    console.log(disabled)
  })

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">the.devin.carter</Link>
          </Typography>

          <Link to="/story">
            <Button color="inherit">Story</Button>
          </Link>
          <Link to="/work">
            <Button color="inherit">Work</Button>
          </Link>
          <Link to="/skills">
            <Button color="inherit">Skills</Button>
          </Link>
          <Link to="/blog">
            <Button color="inherit">Blog</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
 
export default HeaderNav;