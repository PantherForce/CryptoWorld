
import { BrowserRouter, Route  } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Coin from './components/Coin'
import Homepage from './components/Homepage';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(()=>({
     
  App : { 
    
    backgroundColor : "black" ,
    color : "white" , 
    minHeight : '100vh ' , 
    Width : '100%'

  },

}));




function App() {
  const Classes = useStyles() ; 
 

  return (

    <div className={Classes.App}>

     <Header/>
     <Coin/>
    <Homepage/> 

    
   

    </div>
    

  );
}

export default App;
