import React, { useState } from 'react';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  
  return (
   
      <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand" href="#">MySite</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Search Jobs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Job Alerts</a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded={dropdownOpen}
                    onClick={toggleDropdown}
                  >
                    Employers
                  </a>
                  <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Web Development</a></li>
                    <li><a className="dropdown-item" href="#">App Development</a></li>
                    <li><a className="dropdown-item" href="#">SEO</a></li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">Career Advice</a>
                </li>
              </ul>

              <ul className='navbar-nav ms-auto'>
                <li className="nav-item">
                  <a className="nav-link" href="#">Register your CV</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Recruiting</a>
                </li>
                <li className='nav-item'>
                  <a className="nav-link" href="#">
                  Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
   
  );

}

export default Header;