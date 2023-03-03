import { BrowserRouter, Route } from 'react-router-dom';
import {Routes } from "react-router";
import './css/App.css'
import {PageLogin}  from './pages/login'
import {Home} from './pages/Home/Home'
import { ListPersonalMain } from './pages/list_personal/List_personal';
import {ListTareo} from './pages/list_tareo/ListTareo';
import Tareo_List from './components/table_tareo/Tareo_List';
import { ListCandidatosMain } from './pages/list_candidatos/list_candidatos';
import "./css/App.css"

function App() {
  return (
   <div className='App'>
    <BrowserRouter>
    <Routes>
        <Route path='/login' element={ <PageLogin/>} exact />
    </Routes>
    <Routes>
        <Route path='/' element={ <PageLogin/>} exact />
    </Routes>
    <Routes>
        <Route path='/home' element={ <Home/>} exact />
    </Routes>
    <Routes>
        <Route path='/listpersonal' element={ <ListPersonalMain/>} exact />
    </Routes>
    <Routes>
        <Route path='/listatareo' element={ <ListTareo/>} exact />
    </Routes>
    <Routes>
        <Route path='/listacandidatos' element={ <ListCandidatosMain/>} exact />
    </Routes>
    <Routes>
        <Route path='/newpersonal' element={ <ListCandidatosMain/>} exact />
    </Routes>
    <Routes>
        <Route path='/newcandidate' element={ <ListCandidatosMain/>} exact />
    </Routes>

    <Routes>
        <Route path='/verTareoHistorico/:idEmpleado' element={ <Tareo_List/>} exact />
    </Routes>
    </BrowserRouter>

   </div>
  );
}

export default App;
