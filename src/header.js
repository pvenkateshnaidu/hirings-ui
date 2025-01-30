import React,{useEffect} from 'react';
import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './auth/authslice';
import logo from './images/logo.svg';
import logotext from './images/logotext.svg';

const Header = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      // User is authenticated, you can perform other logic if needed
    }
  }, [isAuthenticated]);

  return (
    <>
      <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="logo" />
              <img src={logotext} alt="logotext" className='ms-2' />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link to='/home' className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Search Jobs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Job Alerts</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Career Advice</a>
                </li>
              </ul>

              <ul className='navbar-nav ms-auto'>
                {!isAuthenticated ? (
                  <>
                    <li className='nav-item'>
                      <Link className="nav-link btn btn-primary me-2" to="/login">
                        Login
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link className="nav-link btn btn-primary" to="/register">
                        Register
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/postjob">
                        Employers
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    {/* Check if user is not null before accessing username */}
                    {user && (
                      <li className="nav-item">
                        <span className="nav-link">Welcome, {user.username}</span>
                      </li>
                    )}
                    <li>
                      <button onClick={() => dispatch(logout())}className="nav-link btn btn-danger">
                        Logout
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
