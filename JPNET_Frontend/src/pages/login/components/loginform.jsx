import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { post } from "../../../services/api/api.service";
import './formlogin.css'
import { useNavigate } from "react-router-dom";
function LoginForm() {
  let navigate = useNavigate();
  const [email, setEmail] = useState();
  const [personid, setPersonID] = useState(null);
  const [password, setPassword] = useState();

  const [cookies, setCookie, removeCookie] = useCookies([
    "jp_net_time",
    "jp_net_user",
    "jp_net_email",
  ]);

  useEffect(() => {
    if (cookies.jp_net_user != null) {
      navigate("/home");
      return;
    } else {
      removeCookie("jp_net_user");
      removeCookie("jp_net_email");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const registro = await post({
        url: "/user/login",
        data: {
          email: email,
          password: password,
        },
      });
      //console.log(registro);
      if (registro.id === null) {
        setEmail("");
        setPassword("");
        alert("No es Usuario o Password Correcta");
        return null;
      } else {
        let id = registro.id;
        setPersonID(id);
        let day = new Date();
        day.setMinutes(day.getMinutes()+1)
        setCookie("jp_net_user", id, { path: "/" , expires: day });
        setCookie("jp_net_email", email, { path: "/", expires: day });
        navigate("/home");
        //alert(registro.id);
      }
    } catch (error) {
      this.setState({
        email: "",
        password: "",
      });
      //console.error(error);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <section class="bodyLogin">
      <div class="signup">
        <div class="signup-connect"></div>
        <div class="signup-classic">
          <h3>JP NET</h3>
          <h2>Iniciar Sesión</h2>
          <form class="form" onSubmit={handleSubmit}>
            <input
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              class="username"
              type="text"
              placeholder="Nombre de usuario"
              required
            />
            <input
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              class="username"
              type="password"
              placeholder="Contraseña"
              required
            />

            <button type="submit" class="btn-l">
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export { LoginForm };
