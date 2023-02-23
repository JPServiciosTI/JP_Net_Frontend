import { BrowserRouter, Route } from 'react-router-dom';
import {Routes } from "react-router";
import './css/App.css'
import {PageLogin}  from './pages/login'
import Layout from './pages/layout';
import {Home} from './pages/Home/Home'
import { ListP } from './pages/list_personal/List_personal';
import { Newpersonal } from './pages/NewPersonal/Newpersonal';
import NewCandidate from './pages/NewCandidate/NewCandidate';
import { Tareo } from './pages/NewTareo/Tareo'
import { ExtraTime } from './pages/NewExtraTime/ExtraTime';


function App() {
  return (
   <div className='App'>
    <BrowserRouter>
    <Routes>
        <Route path='/login' element={ <PageLogin/>} exact />
    </Routes>
    <Routes>
        <Route path='/dashboard' element={ <Home/>} exact />
    </Routes>
    <Routes>
        <Route path='/home' element={ <Home/>} exact />
    </Routes>
    <Routes>
        <Route path='/listpersonal' element={ <ListP/>} exact />
    </Routes>
    <Routes>
        <Route path='/newpersonal' element={ <Newpersonal/>} exact />
    </Routes>
    <Routes>
        <Route path='/newcandidate' element={ <NewCandidate/>} exact />
    </Routes>
    <Routes>
        <Route path='/newtareo' element={ <Tareo/>} exact />
    </Routes>
    <Routes>
        <Route path='/newextratime' element={ <ExtraTime/>} exact />
    </Routes>
    </BrowserRouter>

   </div>
  );
}

export default App;
