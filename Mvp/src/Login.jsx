import React, {useState} from "react";


const Login = () => {

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
        console.log(loginForm)
    }

    return (
        <div onSubmit={handleLoginSubmit}>
            <form>
                <label>Email</label>
                <input name="email" onChange={(e) => {handleLoginInput(e)}}></input>
                <label>Password</label>
                <input name="password" onChange={(e) => {handleLoginInput(e)}}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login