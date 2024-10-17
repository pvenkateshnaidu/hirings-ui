import './login.css';
import { Outlet, Link } from "react-router-dom";
const Login = () =>{
    return(
        <>
      <section className='login section'>
        <div className='container'>
            <div className='login-form-container ms-auto me-auto'>
                <p className="text-primary">Welcome back!</p>
                <h2 className="section-heading mb-3">Member Login</h2>
                <p className="text-dark">Access to all features. No credit card required.</p>
                <Link to='/home' className="nav-link">
                <img src={`${process.env.PUBLIC_URL}/google-icon.png`} className='gmail-icon' alt='login with google'/>
                Sign in with Google
                </Link>

                <form className='text-start'>
                    <div className='mb-3'>
                        <label>Username or Email address <span className='text-danger'>*</span></label>
                        <input type="text" name='username' className='form-control' placeholder='Benjaminrobert77@email.com'/>
                    </div>

                    <div className='mb-3'>
                        <label>Password  <span className='text-danger'>*</span></label>
                        <input type="password" name='username' className='form-control' placeholder='.........'/>
                    </div>

                    <div className='d-flex justify-content-between align-items-center'>
                        <label for="remeber" className='d-flex align-items-center'><input type="checkbox" id="remeber" className='me-2'/>Remember me</label>
                        <Link to="/forgotpassword">Forgot Password?</Link>
                    </div>

                    <button className='btn btn-primary btn-signin'>Sign In</button>
                </form>
            </div>
        </div>
      </section>
      <Outlet />
      </>
    )
}




export default Login;