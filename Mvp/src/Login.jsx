import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Css/Login.css'


const Login = ({ setUser }) => {
    const navigate = useNavigate();
    const [invalidPassword, setInvalidPassword] = useState(false)
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    })

    const handleLoginInput = (e) => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value
        })
    }

    const handleLoginSubmit = () => {
        axios.post('http://localhost:3000/auth/login_signup', loginForm)
            .then(data => { setUser(loginForm.email), setInvalidPassword(false), navigate('/') })
            .catch(err => { setInvalidPassword(true) })
    }

    useEffect(() => {
        setUser('')
    }, []);


    return (
        <div className="Login">
        <div className="wrapper">
            <div className="form-wrapper sign-in">
            <div className="form">
                    <h2>Sign in</h2>
                    <div className="input-group">
                        <input required="required" type="text" name="email" onChange={(e) => { handleLoginInput(e) }}></input>
                        <label>Email</label>
       
                    </div>
                    <div className="input-group">
                        <input required="required" type="password" name="password" onChange={(e) => { handleLoginInput(e) }}></input>
                        <label>Password</label>
                    </div>
                    {invalidPassword
                            ? <div className="InvalidPassword">Invalid email or password please try again</div>
                            : <div hidden={true}></div>}

                    <button onClick={handleLoginSubmit} className="loginButton"  >Login</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Login