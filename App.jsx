import {useState} from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Register from './Components/Register/Register';
import Check from './Components/Check/Check';
import Admin from './Components/Admin/Admin';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App() {
  const [state, setState] = useState({
    web3:null,
    contract:null
  })
  const [acc, setacc] = useState("");
  const saveState = (state, account) => {
    console.log(state);
    setState(state);
    setacc(account);
    console.log(account);
  }
  return (
    <>
    <Router>
        <Navbar saveState={saveState}></Navbar>
           <Routes>
                <Route exact path='/' element={< Hero />}></Route>
                <Route exact path='/register' element={< Register state={state} acc={acc} />}></Route>
                <Route exact path='/check' element={< Check state={state} />}></Route>
                <Route exact path='/admin' element={< Admin state={state} />}></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
