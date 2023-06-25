import { Container, Typography, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(()=>({

    banner : {
       backgroundImage : "url(./banner2.jpg)"


    },

    bannercontent : {
       height : 400,
       display : 'flex' ,
       flexDirection : 'column' , 
       paddingTop : 25 ,
       justifyContent : 'space-around'
    } ,
   

     tagline : {

        display : 'flex',
        height : '40%' ,
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'column '



     },
    

}));


const  Banner =() => {
  
    const classes = useStyles();
  return (

    <div className= {classes.banner}>
        <Container className = {classes.bannercontent}>
            <div className= {classes.tagline}>

                <Typography className='' variant='h2' style={{
                    fontFamily : 'Montserrat' ,
                    fontWeight : 'bold' ,
                    marginBottom : 15 , 
                    
                }}>
                    Crypto World
                </Typography>

                <Typography className='' variant='h6' style={{
                    fontFamily : 'Montserrat' ,
                    color : 'darkgrey' , 
                    fontWeight : 'light' ,
                    marginBottom : 15 , 
                }}>
                    Welcome to the world of crypto where you can trade across 100+ crypto coins
                </Typography>

            </div>
            
        </Container>


    </div>
  )
}

export default Banner