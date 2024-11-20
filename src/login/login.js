import './login.css';
import { Outlet, Link,useNavigate } from "react-router-dom";
import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../auth/authslice';
import InputField from '../inputfields/input';

// http://hirings-ui.s3-website.ap-south-1.amazonaws.com/

const Login = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [formErrors, setFormErrors] = useState({ username: [], password: [] });
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const { status, error } = auth;
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.isAuthenticated) {
            navigate('/dashboard');
        }
    }, [auth.isAuthenticated, navigate]);



    const handleLogin = (e) => {
        e.preventDefault();
        const errors = validate();
        setFormErrors(errors);
        if (errors.username.length === 0 && errors.password.length === 0) {
            dispatch(loginUser({ username, password }));
        }
    };

  const validate = () => {
    let errors = { username: [], password: [] };
    if (!username) {
        errors.username.push('Username is required');
    } else if (username.length < 3) {
        errors.username.push('Username must be at least 3 characters');
    }
    if (!password) {
        errors.password.push('Password is required');
    } else if (password.length < 3) {
        errors.password.push('Password must be at least 6 characters');
    }
    return errors;
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setFormErrors(prevErrors => ({ ...prevErrors, username: '' }));
};

const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setFormErrors(prevErrors => ({ ...prevErrors, password: '' }));
};

useEffect(() => {
    if (auth.status === 'succeeded' && auth.isAuthenticated) {
        navigate('/dashboard');
    }
}, [auth.status, auth.isAuthenticated, navigate]);


    return(
        <>
      <section className='login section'>
        <div className='container'>
            <div className='login-form-container ms-auto me-auto'>
                <p className="text-black text-start fw-bold">Login</p>
                <form className='text-start' onSubmit={handleLogin}>
                  
                        <InputField type="text" name='username' className='form-control' placeholder='Enter Email Id' 
                        value={username}
                        onChange={handleUsernameChange}
                        autoComplete='off' label='Username or Email address'
                        />
                        {formErrors.username.length > 0 && (
                            <div className='text-danger'>
                                {formErrors.username.map((error, index) => (
                                    <span key={index}>{error}</span>
                                ))}
                            </div>
                         )}
                   
                        <InputField type="password" name='password' className='form-control' placeholder='Enter Password' 
                        value={password}
                        onChange={handlePasswordChange} autoComplete='off' label="Password"
                        />
                        {formErrors.password.length > 0 && (
                            <div className='text-danger'>
                                {formErrors.password.map((error, index) => (
                                    <span key={index}>{error}</span>
                                ))}
                            </div>
                        )}
                        
                    

                    <div className='d-flex justify-content-between align-items-center'>
                        <label htmlFor="remeber" className='d-flex align-items-center'>
                            <input type="checkbox" id="remeber" className='me-2'/>Remember me
                        </label>
                        <Link to="/forgotpassword" className='fz-12'>Forgot Password?</Link>
                    </div>

                    <button className='btn btn-primary btn-signin' type="submit">Sign In</button>
                </form>
                {auth.status === 'loading' && <p>Loading...</p>}

                {error && <p style={{ color: 'red' }}>{error}</p>}

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