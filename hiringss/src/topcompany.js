import React from "react";
const companies = [
    {
      name: "Google",
      rating: 68,
      location: "India, Hyderabad",
      jobs: 25,
      logo: "https://logo.clearbit.com/google.com"
    },
    {
      name: "Microsoft",
      rating: 32,
      location: "Noida, Pune",
      jobs: 86,
      logo: "https://logo.clearbit.com/microsoft.com"
    },
    {
      name: "Infosys",
      rating: 68,
      location: "India, Hyderabad",
      jobs: 25,
      logo: "https://logo.clearbit.com/infosys.com"
    },
    {
      name: "Amazon",
      rating: 134,
      location: "India, Hyderabad",
      jobs: 25,
      logo: "https://logo.clearbit.com/amazon.com"
    },
    {
      name: "PayPal",
      rating: 68,
      location: "Ahmedabad",
      jobs: 25,
      logo: "https://logo.clearbit.com/paypal.com"
    },
    {
      name: "Salesforce",
      rating: 68,
      location: "India, Hyderabad",
      jobs: 25,
      logo: "https://logo.clearbit.com/salesforce.com"
    },
    {
      name: "Facebook",
      rating: 68,
      location: "Chennai, Tamilnadu",
      jobs: 25,
      logo: "https://logo.clearbit.com/facebook.com"
    },
    {
      name: "Flipkart",
      rating: 53,
      location: "Bangalore",
      jobs: 25,
      logo: "https://logo.clearbit.com/flipkart.com"
    }
  ];
  
  const CompanyCard = ({ company }) => (
    <div className="col-md-3">
      <div className="company-card card p-3 text-center h-100">
        <img src={company.logo} alt={company.name} className="card-img-top mx-auto" style={{ width: "80px" }} />
        <div className="card-body">
          <h5 className="card-title">{company.name}</h5>
          <div className="rating">
            <span className="stars">★★★★★</span> ({company.rating})
          </div>
          <p className="location">{company.location}</p>
          <p className="jobs">{company.jobs} Open Jobs</p>
        </div>
      </div>
    </div>
  );
  
  const TopCompanies = () => (
    <div className="container my-5">
      <h1 className="text-center">Top companies hiring now</h1>
      <p className="text-center">Discover your next career move, freelance gig, or internship</p>
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