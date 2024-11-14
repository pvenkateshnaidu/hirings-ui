import './login.css';
import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../auth/authslice';
import {InputField} from '../inputfields/input';

const Login = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

  const handleLogin = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      dispatch(loginUser({ username, password }));
    }
  };

  const validate = () => {
    let errors = {};
    if (!username) errors.username = 'Username is required';
    if (!password) errors.password = 'Password is required';
    return errors;
  };

    return(
        <>
      <section className='login section'>
        <div className='container'>
            <div className='login-form-container ms-auto me-auto'>
                <p className="text-black text-start fw-bold">Login</p>
            
                

                <form className='text-start' onSubmit={handleLogin}>
                    <div className='mb-3'>
                        <label>Username or Email address <span className='text-danger'>*</span></label>
                        <input type="text" name='username' className='form-control' placeholder='Enter Email Id' 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                         {formErrors.username && <p className='text-danger'>{formErrors.username}</p>}
                        {/* <InputField type="text" name='username' /> */}
                    </div>

                    <div className='mb-3'>
                        <label>Password  <span className='text-danger'>*</span></label>
                        <input type="password" name='username' className='form-control' placeholder='Enter Password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                         {formErrors.password && <p className='text-danger'>{formErrors.password}</p>}
                    </div>

                    <div className='d-flex justify-content-between align-items-center'>
                        <label for="remeber" className='d-flex align-items-center'><input type="checkbox" id="remeber" className='me-2'/>Remember me</label>
                        <Link to="/forgotpassword" className='fz-12'>Forgot Password?</Link>
                    </div>

                    <button className='btn btn-primary btn-signin' type="submit">Sign In</button>
                </form>
                {auth.status === 'loading' && <p>Loading...</p>}
                {auth.error && <p>{auth.error}</p>}

                <div className='seperator mt-3'>
                    <span>Or</span>
                </div>

                <Link to='/home' className="nav-link">
                <img src={`${process.env.PUBLIC_URL}/google-icon.png`} className='gmail-icon' alt='login with google'/>
                Sign in with Google
                </Link>

            </div>
        </div>
      </section>
      <Outlet />
      </>
    )
}




export default Login;