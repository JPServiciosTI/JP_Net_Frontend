import { BrowserRouter, Route } from 'react-router-dom';
import {Routes } from "react-router";
import './css/App.css'
import {PageLogin}  from './pages/login'
import Layout from './pages/layout';
import {Home} from './pages/Home/Home'
import { ListP } from './pages/list_personal/List_personal';
import { Newpersonal } from './pages/NewPersonal/Newpersonal';
import NewCandidate from './pages/NewCandidate/NewCandidate';
import {ListTareo} from './pages/list_tareo/ListTareo';


function App() {
  return (
   <div className='App'>
    <BrowserRouter>
    <Routes>
        <Route path='/login' element={ <PageLogin/>} exact />
    </Routes>
    <Routes>
        <Route path='/dashboard' element={ <Layout/>} exact />
    </Routes>
    <Routes>
        <Route path='/home' element={ <Home/>} exact />
    </Routes>
    <Routes>
        <Route path='/listPersonal' element={ <ListP/>} exact />
    </Routes>
    <Routes>
        <Route path='/NewPersonal' element={ <Newpersonal/>} exact />
    </Routes>
    <Routes>
        <Route path='/NewCandidate' element={ <NewCandidate/>} exact />
    </Routes>
    <Routes>
        <Route path='/ListTareo' element={ <ListTareo/>} exact />
    </Routes>
    </BrowserRouter>

   </div>
  );
}

export default App;
