import logo from './logo.svg';
import './App.css';
import Header from './header';

function App() {
  return (
    <div className="App">
     <Header />
     
     <Banner />
     <section className="categories">
      <div className="container">
        <CategorySection />
      </div>
     </section>
    </div>
  );
}

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-text">
        <h1>
          Join the Next Generation of <span className="highlight">Job Hunters</span> and upload your video CV now!
        </h1>
        <p>Everything you need is one search away...!!</p>
        <SearchBar />
        <PopularSearches />
        <Stats />
       
      </div>
      <div className="banner-image">
        <img src="path-to-your-image.jpg" alt="Person" />
      </div>

      
    </section>


  );
};

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search jobs by 'title'" />
      <select>
        <option>Select Experience</option>
        <option>Entry Level</option>
        <option>Mid Level</option>
        <option>Senior Level</option>
      </select>
      <input type="text" placeholder="Enter Location" />
      <button>Find Jobs</button>
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
        265 K+<span>Daily Jobs Posted</span>
      </div>
      <div className="stat">
        17 K+<span>Recruiters</span>
      </div>
      <div className="stat">
        15 K+<span>Freelancers</span>
      </div>
    </div>
  );
};

const CategorySection = () => {
  const categories = [
    { name: "Retail and Products", jobs: 563, icon: "retail-icon" },
    { name: "Content Writer", jobs: 142, icon: "content-writer-icon" },
    { name: "Marketing & Sales", jobs: 1526, icon: "marketing-icon" },
    { name: "Finance", jobs: 168, icon: "finance-icon" },
    { name: "Human Resources", jobs: 165, icon: "hr-icon" },
    { name: "Market Research", jobs: 532, icon: "market-research-icon" },
    { name: "Customer Help", jobs: 168, icon: "customer-help-icon" },
    { name: "Security Analyst", jobs: 254, icon: "security-analyst-icon" },
    { name: "Software", jobs: 1856, icon: "software-icon" },
    { name: "Management", jobs: 965, icon: "management-icon" }
  ];

  return (
    <section className="">
      <h2>Browse by <span className="highlight">category</span></h2>
      <p>Search and connect with the right candidates faster.</p>
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
    </section>
  );
};

const CategoryCard = ({ name, jobs, icon }) => {
  return (
    <div className="category-card">
      <div className={`icon ${icon}`}></div>
      <h3>{name}</h3>
      <p>{jobs} Jobs Available</p>
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



export default App;
