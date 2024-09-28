
import './App.css';
import Header from './header';
import SearchIcon from './images/search.svg';
import TopCompanies  from './topcompany';
import BannerImage from './images/Person.png';

function App() {
  return (
    <div className="App">
     <Header />
     
     <section className="banner">
     <Banner />
     </section>

     <section className="categories section">
      <div className="container">
        <CategorySection />
      </div>
     </section>

     <section className='topCompanies section'>
      <div className='container'>
        <TopCompanies/>
      </div>
     </section>

     <section className='resumeSection'>
      <div className='container'>
        <ResumeSection />
      </div>
     </section>

     <section className='HireSection'>
      <div className='container'>
        <SkillOnHireSection />
      </div>
     </section>
    </div>
  );
}

const Banner = () => {
  return (
   
      <div className="container ">
        <div className='row z-index5 position-relative'>
          <div className='col-md-8'>
            <h1 className='heading'>
            Join the Next Generation of <span className="highlight">Job Hunters</span> and upload your video CV now!
            </h1>
            <p className='banner-text'>Everything you need is one search away...!!</p>
            <SearchBar />
            <PopularSearches />
            <Stats />
          </div>
        </div>
       
       
    
        <div className="banner-image">
          <img src={BannerImage} alt="Person" className='img-fluid'/>
        </div>
      </div>

  );
};

const SearchBar = () => {
  return (
    <div className="search-bar">
      <img src={SearchIcon} alt="search" />

      <div className='searchelement'>
      <input type="text" placeholder="Search jobs by 'title'" />
      </div>
      <div className='searchelement'>
        <select>
          <option>Select Experience</option>
          <option>Entry Level</option>
          <option>Mid Level</option>
          <option>Senior Level</option>
        </select>
      </div>
      <input type="text" placeholder="Enter Location"  className='border-0'/>
      <button className='btn btn-primary fj' type='submit'>Find Jobs</button>
    </div>
  );
};

const PopularSearches = () => {
  return (
    <div className="popular-searches">
      <strong>Popular Searches: </strong>
      <a href="#">Designer</a>
      <a href="#">Web</a>
      <a href="#">IOS</a>
      <a href="#">Developer</a>
      <a href="#">PHP</a>
      <a href="#">Senior</a>
      <a href="#">Engineer</a>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="stats">
      <div className="stat">
        <strong>265 K+</strong><span>Daily Jobs Posted</span>
      </div>
      <div className="stat">
      <strong>17 K+</strong><span>Recruiters</span>
      </div>
      <div className="stat">
      <strong>15 K+</strong><span>Freelancers</span>
      </div>
    </div>
  );
};

const CategorySection = () => {
  const categories = [
    { name: "Retail and Products", jobs: 563, icon: "images/products.png" },
    { name: "Content Writer", jobs: 142, icon: "images/contentwriter.png" },
    { name: "Marketing & Sales", jobs: 1526, icon: "images/marketing.png" },
    { name: "Finance", jobs: 168, icon: "images/finance.png" },
    { name: "Human Resources", jobs: 165, icon: "images/humanresource.png" },
    { name: "Market Research", jobs: 532, icon: "images/marketresearch.png" },
    { name: "Customer Help", jobs: 168, icon: "images/customerResearch.png" },
    { name: "Security Analyst", jobs: 254, icon: "images/securityanalyst.png" },
    { name: "Software", jobs: 1856, icon: "images/software.png" },
    { name: "Management", jobs: 965, icon: "images/management.png" }
  ];
 

  return (
    <div className="text-center">
      <h2 className='section-heading'>Browse by <span className="highlight">category</span></h2>
      <p className='text'>Search and connect with the right candidates faster.</p>
      <div className="category-container">
        <ArrowButton direction="left" />
        <div className="category-cards">

          {categories.map((category, index) => (
            
            <CategoryCard
              key={index}
              name={category.name}
              jobs={category.jobs}
              icon={category.icon}
            />
          ))}
        </div>
        <ArrowButton direction="right" />
      </div>
    </div>
  );
};

const CategoryCard = ({ name, jobs, icon }) => {
  return (
    <div className="category-card">
      <div className={`icon ${icon}`}>
        <img src={require(`./${icon}`)} alt={name}/>
      </div>
      <div className='text-start'>
      <h3>{name}</h3>
      <p>{jobs} Jobs Available</p>
      </div>
    </div>
  );
};

const ArrowButton = ({ direction }) => {
  return (
    <button className={`arrow-button ${direction}`}>
      {direction === "left" ? "<" : ">"}
    </button>
  );
};


const ResumeSection = () => {
  return (
    <div className="container my-5 d-flex align-items-center justify-content-between">
      {/* Left Side - Images */}
      <div className="images-section d-flex flex-column">
        <div className="image-top mb-3">
          <img
            src="https://via.placeholder.com/300x200.png?text=Image+1"
            alt="Handshake"
            className="img-fluid"
          />
        </div>
        <div className="image-bottom">
          <img
            src="https://via.placeholder.com/300x200.png?text=Image+2"
            alt="Business Discussion"
            className="img-fluid"
          />
        </div>
      </div>

      {/* Right Side - Text and CTA */}
      <div className="text-section">
        <h1 className="display-5 fw-bold">
          Add Your Resume to <span className="text-primary">Skill On Hire</span>
        </h1>
        <p className="lead">
          Discover your next career move, freelance gig, or internship
        </p>

        {/* Upload Button */}
        <div className="my-3">
          <button className="btn btn-primary btn-lg">
            Upload Your CV
          </button>
        </div>

        {/* Footer Text */}
        <p>
          Already listed your agency?{" "}
          <span className="fw-bold">Ask your clients to leave a review.</span>
        </p>
      </div>
    </div>
  );
};


const SkillOnHireSection = () => {
  return (
    <div className="container my-5 d-flex align-items-center justify-content-between">
      {/* Left Side - Text and Button */}
      <div className="text-section">
        <h2 className="display-6 fw-bold">
          How Skill On Hire Works<span className="text-primary">?</span>
        </h2>
        <p className="lead">
          Discover your next career move, freelance gig, or internship
        </p>

        {/* Call to Action */}
        <h3 className="fw-bold">
          Get Started, <span className="text-primary">It's Free!</span>
        </h3>
        <p>Receive Proposals from 5 Hand Picked Agencies</p>

        {/* CTA Button */}
        <button className="btn btn-primary btn-lg" type='button'>
          Start Recruiting Now
        </button>
      </div>

      {/* Right Side - Video Placeholder */}
      <div className="video-section">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder video
            allowFullScreen
            title="Skill On Hire Video"
          ></iframe>
        </div>
      </div>
    </div>
  );
};


export default App;
