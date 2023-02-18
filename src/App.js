import { BrowserRouter, Route } from 'react-router-dom';
import {Routes } from "react-router";
import './css/App.css'
import {PageLogin}  from './pages/login'
import Layout from './pages/layout';


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
    </BrowserRouter>

   </div>
  );
}

export default App;
