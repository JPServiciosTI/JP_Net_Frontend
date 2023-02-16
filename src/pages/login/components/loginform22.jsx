import React, { Component, useEffect } from "react";
import { post } from "../../../services/api/api.service";
import { Navigate, Route, History, useNavigate ,Link} from 'react-router-dom';
import './formlogin.css'


class LoginForms extends Component {
    constructor(props){
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            email: null,
            password: null,
            token: null
        }

    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });
    }
    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
    } 

    async onSubmit(e) {
        e.preventDefault();
        console.log("Datos> ", e);
        try {
            const registro = await post({
                url: "/user/login",
                data: {
                    email: this.state.email,
                    password: this.state.password
                },
              });
              if (registro.id === undefined) {
                
                this.setState({
                    email: '',
                    password: ''
                  });
                  return null;
              } else {
                this.props.navigation.navigate('/dashboard')
                alert(registro.id);
              }            
        } catch (error) {
            this.setState({
                email: '',
                password: ''
              })
            console.error(error);
        }

        this.setState({
            email: '',
            password: ''
          })
    }

    render(){
        return (
            <section>
              <div class="signup">
                <div class="signup-connect"></div>
                <div class="signup-classic">
                  <h3>JP NET</h3>
                  <h2>Iniciar Sesión</h2>
                  <form class="form" onSubmit={this.onSubmit}>
                    <input
                      id="email"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      class="username"
                      type="text"
                      placeholder="Nombre de usuario"
                      required
                    />
                    <input
                      id="password"
                      value={this.state.password}
                      onChange={this.onChangePassword}                      
                      class="username"
                      type="password"
                      placeholder="Contraseña"
                      required
                    />
        
                    <button type="submit" class="btn">
                      Ingresar
                    </button>
                  </form>
                </div>
              </div>
            </section>
          );
        
    }
 }

export { LoginForms };
