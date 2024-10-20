import React from "react";
const companies = [
    {
    
      rating: 68,
      location: "India, Hyderabad",
      jobs: 25,
      logo: "images/google.png"
    },
    {
     
      rating: 32,
      location: "Noida, Pune",
      jobs: 86,
      logo: "images/microsoft.png"
    },
    {
    
      rating: 68,
      location: "India, Hyderabad",
      jobs: 25,
      logo: "images/infosys.png"
    },
    {
     
      rating: 134,
      location: "India, Hyderabad",
      jobs: 25,
      logo: "images/amazon.png"
    },
    {
     
      rating: 68,
      location: "Ahmedabad",
      jobs: 25,
      logo: "images/paypal.png"
    },
    {
    
      rating: 68,
      location: "India, Hyderabad",
      jobs: 25,
      logo: "images/salesforce.png"
    },
    {
     
      rating: 68,
      location: "Chennai, Tamilnadu",
      jobs: 25,
      logo: "images/facebook.png"
    },
    {
      
      rating: 53,
      location: "Bangalore",
      jobs: 25,
      logo: "images/flipkart.png"
    }
  ];
  
  const CompanyCard = ({ company }) => {
    return(
    <div className="col-md-3">
      <div className="company-card card h-100">
        <div className="card-body">
        <img src={require(`./${company.logo}`)} alt={company.name} className="card-img-top mx-auto" style={{ width: "auto", height:"35px",objectfit:"contain" }} />
          <div className="rating">
            <span className="stars">★★★★★</span> ({company.rating})
          </div>
          <p className="location">{company.location}</p>
          <p className="jobs m-0">{company.jobs} Open Jobs</p>
        </div>
      </div>
    </div>
    );
  };
  
  const TopCompanies = () => (
    <div className="container">
      <h1 className="text-start section-heading">Top companies hiring now</h1>
      <p className="text-start mb-4">Discover your next career move, freelance gig, or internship</p>
      <div className="row g-3 justify-content-center">
        {companies.map((company, index) => (
          <CompanyCard key={index} company={company} />
        ))}
      </div>
  
      {/* Carousel Controls */}
      <div className="d-flex justify-content-between mt-3">
        <button className="btn btn-outline-secondary">&lt;</button>
        <button className="btn btn-outline-secondary">&gt;</button>
      </div>
    </div>
  );
  
  export default TopCompanies;