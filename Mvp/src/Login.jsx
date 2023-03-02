import axios from "axios";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Login = ({setUser}) => {
    const navigate = useNavigate();
    const [loginForm, setLoginForm] = useState({
        email:'',
        password:''
    })

    const handleLoginInput = (e) => {
        setLoginForm({
            ...loginForm, 
            [e.target.name]: e.target.value
        })
    }

    const handleLoginSubmit = () => {
        axios.post('http://localhost:3000/auth/login_signup', loginForm)
        .then(data => {setUser(loginForm.email), navigate('/')})
        .catch(err => console.log(err, 'err in axios post'))
    } 

    return (
        <div >
            <div>
                <label>Email</label>
                <input name="email" onChange={(e) => {handleLoginInput(e)}}></input>
                <label>Password</label>
                <input name="password" onChange={(e) => {handleLoginInput(e)}}></input>
                <button onClick={handleLoginSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Login