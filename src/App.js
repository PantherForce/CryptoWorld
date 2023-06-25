
import { BrowserRouter, Route  } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Coin from './components/Coin'
import Homepage from './components/Homepage';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(()=>({
     
  App : {

  },

}));

const Classes = useStyles ; 


function App() {
  return (

    <div className=" Classes.App">

     <Header/>
     <Coin/>
    <Homepage/> 

     <BrowserRouter>
     {/* <Route path='./Coin:id' Component={Coin}/>
     <Route path='' Component={Homepage}/> */}


     
     </BrowserRouter>

    </div>
    

  );
}

export default App;
