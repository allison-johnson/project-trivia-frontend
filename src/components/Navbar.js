import React from 'react';
import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase'
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
//import Link from '@material-ui/core/Link'
import TriviaQuestion from './QuestionList'
import Home from './Home'
import { Link } from 'react-router-dom'
import { MemoryRouter as Router } from 'react-router'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
}));

export default function Navbar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null); //What is this?
    const preventDefault = (event) => event.preventDefault();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                aria-haspopup="true"
                
              >
              <MenuIcon onClick={handleClick} />
              </IconButton>
              <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
              >
                <MenuItem><Link to="/user/signup">Sign Up</Link></MenuItem>
                <MenuItem><Link to="/user/login">Log In</Link></MenuItem>
                <MenuItem><Link to="/user/logout">Log Out</Link></MenuItem>
              </Menu>

              <Typography className={classes.title} id="navItemOne" variant="h6" noWrap>
                <Link to="/triviaQuestion">Question Index</Link>
              </Typography>

              <Typography className={classes.title} id="navItemThree" variant="h6" noWrap>
                Filter By Category
              </Typography>

              <Typography className={classes.title} id="navItemFour" variant="h6" noWrap>
                Add a Question
              </Typography>
{/* {              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>} */}
            </Toolbar>
          </AppBar>
        </div>
      );
}//Navbar