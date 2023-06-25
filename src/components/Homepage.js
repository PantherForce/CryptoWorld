import react from 'react'
import { AppBar, Container, MenuItem, Toolbar, Typography , Select} from '@material-ui/core';
import SelectInput from '@material-ui/core/Select/SelectInput';


const Homepage = ()=>{
    return(
        <div>
            <AppBar color='transparent' position='static'>
             <Container>
                <Toolbar>
                    <Typography variant='h5'>
                        Crypto World 
                    </Typography>
                   <Select variant='outlined' style={{
                    width : 100 , 
                    height : 40 , 
                    marginLeft : 15 , 
                   }}>
                    <MenuItem>INR</MenuItem>
                    <MenuItem>USD</MenuItem>
                   </Select>
                </Toolbar>
             </Container>
            </AppBar>
        </div>
    )
}

export default Homepage ;