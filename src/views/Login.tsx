import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "../firebase/client";
import {FaGoogle} from "react-icons/fa"

const Login = () => {
  const navigate = useNavigate()
  const [errMsg, setErrMsg] = useState("")

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSubmit(e: any) {
    e.preventDefault()
    setErrMsg("")

    if (!email.length || !password.length) {
      return
    }

    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password)
      navigate("/")
    } catch(e: any) {
      setErrMsg(e.message)
      setEmail("")
      setPassword("")
    }
  }

  async function handleGoogleSignin() {
    setErrMsg("")
    try {
      await signInWithPopup(firebaseAuth, new GoogleAuthProvider())
      navigate("/")
    } catch(e: any) {
      setErrMsg(e.message)
    }
  }

  return (
    <div className="formulario">
      <div className="contenedor">
        <header className="header">
          <h1>INICIA SESION</h1>
        </header>
        <form onSubmit={handleSubmit} className="input-contenedor">
          <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Ingresa tu correo" />
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Ingresa tu contraseña" />
          <button onClick={handleGoogleSignin} type="button"><FaGoogle/></button>
          <small style={{color: "red"}}>{errMsg}</small>
          <button type="submit">Iniciar sesion</button>
        </form>
        <footer>
          <p>
            ¿No tienes cuenta?{" "}
            <Link className="link" to="/signup">
              Registrate
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Login;
