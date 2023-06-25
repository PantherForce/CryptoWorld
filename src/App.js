
import { BrowserRouter, Route  } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Coin from './components/Coin'
import Homepage from './components/Homepage';


function App() {
  return (

    <div className="App">

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
