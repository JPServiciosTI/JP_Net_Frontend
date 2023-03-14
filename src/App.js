import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import "./css/App.css";
import { PageLogin } from "./pages/login";
import { Home } from "./pages/Home/Home";
import { ListP } from "./pages/list_personal/List_personal";
import { Newpersonal } from "./pages/NewPersonal/Newpersonal";
import NewCandidate from "./pages/NewCandidate/NewCandidate";
import { ListTareo } from "./pages/list_tareo/ListTareo";
import { Calendario } from "./components/Modals/modal_Calendario/Calendario";
import Planilla from "./components/Planilla/Planilla";
import { MainPlanilla } from "./pages/Planilla/MainPlanilla";
import Descuentos from "./pages/Descuentos/Descuentos";
import { PrePlanilla } from "./pages/PrePlanilla/PrePlanilla";
import { Export_Planilla } from "./components/Export_Planilla/Export_Planilla";
import { PreboletaJP } from "./components/Preboleta/PreboletaJP";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<PageLogin />} exact />
        </Routes>
        <Routes>
          <Route path="/" element={<PageLogin />} exact />
        </Routes>
        <Routes>
          <Route path="/home" element={<Home />} exact />
        </Routes>
        <Routes>
          <Route path="/listpersonal" element={<ListP />} exact />
        </Routes>
        <Routes>
          <Route path="/newpersonal" element={<Newpersonal />} exact />
        </Routes>
        <Routes>
          <Route path="/newcandidate" element={<NewCandidate />} exact />
        </Routes>
        <Routes>
          <Route path="/ListTareo" element={<ListTareo />} exact />
        </Routes>
        <Routes>
          <Route
            path="/verTareoHistorico/:idEmpleado"
            element={<ListTareo />}
            exact
          />
        </Routes>
        <Routes>
          <Route path="/Calendario" element={<Calendario />} exact />
        </Routes>
        <Routes>
          <Route path="/Planilla" element={<Planilla />} exact />
        </Routes>
        <Routes>
          <Route path="/MainPlanilla" element={<MainPlanilla />} exact />
        </Routes>
        <Routes>
          <Route path="/Descuentos" element={<Descuentos />} exact />
        </Routes>
        <Routes>
          <Route path="/PrePlanilla" element={<PrePlanilla />} exact />
        </Routes>
        <Routes>
          <Route path="/export" element={<Export_Planilla />} exact />
        </Routes>
        <Routes>
          <Route path="/preboleta" element={<PreboletaJP />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
