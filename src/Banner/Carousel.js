import { makeStyles } from '@material-ui/core';
import react from 'react'

const useStyles = makeStyles (()=>({
      
    Carousel: {

        height : '50 %' ,
        display : flex , 
        alignItems : 'center' , 


    }

}));

const classes = useStyles ();

const Carousel = () =>{
    return (
        <div className={classes.Carousel}>


        </div>
    )
}

export default Carousel ;