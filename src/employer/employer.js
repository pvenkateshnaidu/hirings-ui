import React,{useState} from "react";
import './employer.css';
import { Link } from "react-router-dom";
import SideNav from "./sidenav";

const Employer = () =>{
    const [isSideNavOpen, setIsSideNavOpen] = useState(true);
    const toggleSideNav = () => {
        setIsSideNavOpen((prev) => !prev);
    };

    return(
    <div className="employer">
        <header className='employer-header'>
            <div className="container-fluid">
                <div className='menuBar'>
                    <div>
                        <i className="fa-solid fa-bars" onClick={()=>toggleSideNav(true)} aria-label="Toggle navigation"></i>
                        <a className="navbar-brand ms-3" href="#">Hirings</a>
                    </div>

                    <div className="credits">
                        <Link className="me-3">Available Credits</Link>
                        <Link >Support</Link>
                    </div>
                </div>
            </div>
        </header>

        <div className="d-flex">   
            <SideNav isOpen={isSideNavOpen} toggleSideNav={toggleSideNav}/>    
            <section className="employer-job-Listings">
                <div className="d-flex justify-content-between mb-3 align-items-center">
                    <h1 className="h1 m-0">All Jobs (1)</h1>
                    <button className="btn btn-success">Post a new job</button>
                </div>

                <div className="card border-0">
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                                <div className="d-flex flex-column">
                                    <h2 className="fz-16 h2">UI Developer</h2>
                                    <div className="d-flex justify-content-between">
                                        <div className="text-truncate me-2 seperator-right text-light">KPHB Metro Station, Bhagya Nagar Colony, Kukatpally, hyderbad, Telangana</div>
                                        <div className="me-2 seperator-right text-light">Posted On : 13 Oct 2024</div>
                                        <div className="me-2 text-light">Sudhakar</div>
                                    </div>
                                </div>

                                <div className="d-flex flex-column seperator-left text-light">
                                    <span>----</span>
                                    <div>Applied to Job</div>
                                </div>

                                <div className="d-flex flex-column seperator-left text-light">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-column">
                                            <span>8004</span>
                                            <div>Database Matches</div>
                                        </div>

                                        <div className="d-flex align-items-start">
                                            <a href="#" className="willcomplete me-3 ms-5">Finish Posting</a>
                                            <a href="#" className="menu-vertical willcomplete"><i className="fa-solid fa-ellipsis-vertical"></i></a>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="alert-light"><i className="fa-solid fa-circle-info"></i> Finish job posting to start receiving candidates</div>
                        
                    </div>
                </div>
            </section> 
        </div>
    </div>
    )
}

export default Employer;