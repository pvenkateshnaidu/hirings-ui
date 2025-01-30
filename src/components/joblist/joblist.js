import React from "react";
import { EditOutlined } from "@mui/icons-material";

const JobList = () =>{

    const jobs = [
        {
          id: 1,
          designation: "Software Engineer",
          companyName: "Tech Innovators Inc.",
          companyLogo: "https://via.placeholder.com/100",
          experience: "3-5 years",
          salary: "$80,000 - $100,000 annually",
          location: "San Francisco, CA",
          description:
            "We are looking for a passionate and skilled software engineer to join our team.",
          keywords: "JavaScript, React, Node.js, Agile, Web Development",
          postedDate: "January 25, 2025",
        },
        {
          id: 2,
          designation: "Product Manager",
          companyName: "Creative Solutions Ltd.",
          companyLogo: "https://via.placeholder.com/100",
          experience: "5-7 years",
          salary: "$100,000 - $120,000 annually",
          location: "New York, NY",
          description:
            "We are seeking an experienced product manager to lead our product development efforts.",
          keywords: "Product Management, Agile, Team Leadership",
          postedDate: "January 28, 2025",
        },
      ];

  

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8">
                {jobs.map((job) => (
                    <div key={job.id} className="card border-0 mb-3 card-shadow">
                         <div className="card-header d-flex justify-content-between bg-white align-items-center">
                                <div className="d-flex flex-column">
                                    <div className="card-title m-0">{job.designation}</div>
                                    <small>{job.companyName}</small>
                                </div>
                                <div className="company-logo">
                                    <img src={job.companyLogo} alt={`${job.companyName} Logo`} />
                                </div>
                            </div>

                        <div className="card-body">
                           <div>{job.experience}</div>
                           <div>{job.salary}</div>
                           <div>{job.location}</div>
                           <p>{job.description}</p>
                           <p>{job.keywords}</p>
                        </div>
                    </div>
                ))}    
                </div>
                <div className="col-md-4">

                <div className="card mb-4">
                        <div className="card-header border-0"><h3 className="fz-16">Add preferences to get matching jobs</h3></div>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex  flex-column align-items-start">
                                    <div className="card-title">Preferred job role</div>
                                    <button className="btn btn-outline-primary w-auto">Add</button>
                                </div> 
                                <div className="company-logo">
                                    <img src="https://via.placeholder.com/100" alt="Company logo" />
                                </div>
                            </div>
                            <div className="preferred-item d-flex gap-1 mt-3">
                                <small>Preferred work location</small><EditOutlined style={{ cursor: "pointer", color: "blue",fontSize:'16px' }} onClick={() => alert('Edit job')} />
                            </div>
                            <div className="d-flex gap-2 flex-wrap mt-1">
                                <button className="btn btn-secondary btn-rounded-5">Telangana</button>  
                                <button className="btn btn-secondary btn-rounded">Hyderabad / Secunderabad</button>   
                                <button className="btn btn-secondary btn-rounded">Anywhere in South India</button>  
                            </div>

                            <div className="preferred-item d-flex gap-1 mt-3">
                                <small>Preferred Salary</small> <EditOutlined style={{ cursor: "pointer", color: "blue",fontSize:'16px' }} onClick={() => alert('Edit Salary')} />
                            </div>
                            <div className="d-flex gap-2 flex-wrap mt-1">
                                <button className="btn btn-secondary btn-rounded-5">&#8377; 40,000</button>  
                            </div>

                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-header border-0"><h3 className="fz-16">you might like</h3></div>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex  flex-column">
                                    <div className="card-title">Senior Experience Specialist</div>
                                    <small className="d-flex align-items-center flex-row">Verizon <span style={{ fontSize: '20px', color: 'gold' }} className="ms-2">★</span>4.1 | 1334 reviews</small>  
                                </div> 
                                <div className="company-logo">
                                    <img src="https://via.placeholder.com/100" alt="Company logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobList;