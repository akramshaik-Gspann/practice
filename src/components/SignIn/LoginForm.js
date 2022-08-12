import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({ name: "", email: "", password: "" });

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

    return (

        <div className=''>
            <form onSubmit={submitHandler}>
                <div className="form-inner">
                    <h2>Sign in to your Account</h2>
                    {(error !== "") ? (<div className="error">{error}</div>) : ""}
                    <div className="form-group">
                        <label htmlFor='email'>Email:</label>
                        <input type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    </div>
                    <div className='form-group'>
                        <a href='/'>Forgot Password?</a>
                    </div>

                    <button className="button-primary">SIGN IN</button>
                    <hr />
                    <NavLink to="/registerForm" className="btn btn-outline-dark ms-2">
                        CREATE ACCOUNT
                    </NavLink>

                </div>
            </form>
        </div>
    )
}

export default LoginForm