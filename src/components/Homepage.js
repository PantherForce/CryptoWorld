import react from 'react'
import { AppBar, Container, MenuItem, Toolbar, Typography , Select, makeStyles, ThemeProvider, createTheme} from '@material-ui/core';
// import { useHistory} from 'react-router-dom';
 

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  
  
  const useStyles = makeStyles(()=> ({

    title: {
        flex : 1 ,
        fontFamily : "Montserrat" ,
        color : "gold",
        fontWeight : "bold" ,
        cursor : "pointer" , 
    }

 }));
 
const Homepage = ()=>{
   
    const classes = useStyles() ;
    const theme = createTheme () ; 
    // const history = useHistory();
    return(
        <ThemeProvider theme={darkTheme}>
        <div >
            <AppBar color='transparent' position='static'>
             <Container>
                <Toolbar>
                    <Typography  className = {classes.title} variant='h6'>
                        Crypto World 
                    </Typography>
                   <Select variant='outlined' style={{
                     color : 'red',
                    width : 100 , 
                    height : 40 , 
                    marginRight : 15 ,
                     
                   }} > 
                    <MenuItem value ={'INR' } >INR</MenuItem>
                    <MenuItem value ={'USD' } >USD</MenuItem>
                   </Select>
                </Toolbar>
             </Container>
            </AppBar>
        </div>
        </ThemeProvider>
    )
}

export default Homepage ;