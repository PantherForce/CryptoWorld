import { AppBar, Link, Toolbar, Typography, makeStyles } from '@mui/material'
import React from 'react'


const useStyles = makeStyles((theme) => ({
    navlinks: {
      marginLeft: theme.spacing(10),
      display: "flex",
    },
   logo: {
      flexGrow: "1",
      cursor: "pointer",
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "20px",
      marginLeft: theme.spacing(20),
      "&:hover": {
        color: "yellow",
        borderBottom: "1px solid white",
      },
    },
  }));


const Header = ()=>{

    const classes =  useStyles() ; 

    return(
        
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6' className = {classes.logo}>
                    Dev Dens
                </Typography>

                <div className= {classes.navlinks}>
                    <Typography>
                      <Link to = './' className = {classes.links}>
                        Home
                      </Link>

                      <Link to = './' className = {classes.links}>
                        Swags
                      </Link>

                      <Link to = './' className = {classes.links}>
                        Contribution
                      </Link>

                      <Link to = './' className = {classes.links}>
                        Leaderboard 
                      </Link>

                    </Typography>
                </div>
            </Toolbar>
        </AppBar>
    )
}


export default Header 