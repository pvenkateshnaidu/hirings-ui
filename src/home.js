import SearchIcon from './images/search.svg';
import TopCompanies  from './topcompany';
import BannerImage from './images/Person.png';
import addcvImage from './images/addresume.png'


const Home = () => {
    return(
        <div className="App">
       
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
        <div className='row'>
        <TopCompanies/>
        </div>
        </div>
        </section>

        {/* <section className='section bg-white'>
        <div className='container'>
        <ResumeSection />
        </div>
        </section> */}

        {/* <section className='section'>
        <div className='container'>
        <SkillOnHireSection />
        </div>
        </section> */}

        {/* <section className='section bg-white hirings-section'>
        <HiringsNumbers />
        </section> */}

        {/* <section className='section'>
        <Testimonials />
        </section> */}

        <section className='subscribe'>
        <Subscribe />
        </section>

       

        </div>
    )
}


const Banner = () => {
    return (
     
        <div className="container ">
          <div className='row z-index5 position-relative'>
            <div className='col-md-8'>
              <h1 className='heading'>
              Join the Next Generation of <span className="highlight">Job HIRING</span> and upload your video CV now!
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
            <option>Select Experience Level</option>
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
        <a href="#">UI Developer</a>
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
        <div className='icon'>
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
      <div className="row">
        {/* Left Side - Images */}
        <div className='col-md-5'>
        
            <img
              src={addcvImage}
              alt="Handshake"
              className="img-fluid"
            />
         
        </div>
  
  
        <div className='col-md-6'>
        <div className="text-section d-flex justify-content-between flex-column h-100">
          <div>
            <h1 className="display-5 fw-bold ">
              Add Your Resume to <br /> Hirings
            </h1>
            <p className="lead">
              Discover your next career move, freelance gig, or <br /> internship
            </p>
          </div>
          <div>
            {/* Upload Button */}
          <div className="my-3">
            <a href="#" title="Upload Your CV" className="btn btn-primary btn-lg cv-btn mb-3">
              Upload Your CV
            </a>
          </div>
  
          {/* Footer Text */}
          <p className='mb-3'>
            Already listed your agency?{" "}
            <span className="fw-bold">Ask your clients to leave a <br /> review.</span>
          </p>
          </div>
       
        </div>
        </div>
      </div>
    );
  };
  
  
  // const SkillOnHireSection = () => {
  //   return (
  //     <div className="row align-items-center justify-content-between">
  //       <div className='text-center mb-4'>
  //         <h2 className="heading fw-bold mb-0">How Skill On Hire Works<span className="text-primary">?</span></h2>
  //         <p className="lead mb-0 fw-light">Discover your next career move, freelance gig, or internship</p>
  //         </div>
  //       {/* Left Side - Text and Button */}
  //       <div className='col-md-6'>
  //         <div className="text-section">
           
  
  //           {/* Call to Action */}
  //           <h3 className="fw-bold">
  //             Get Started, <span className="text-primary">It's Free!</span>
  //           </h3>
  //           <p className='section-text'>Receive Proposals from 5 Hand Picked <br />Agencies</p>
  
  //           {/* CTA Button */}
  //           <button className="btn btn-primary btn-lg cv-btn mt-5" type='button'>
  //             Start Recruiting Now
  //           </button>
  //         </div>
  //       </div>
  
  //       {/* Right Side - Video Placeholder */}
  //       <div className='col-md-6'>
          
  //             <iframe
  //               className="embed-responsive-item"
  //               src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder video
  //               allowFullScreen
  //               title="Skill On Hire Video"
  //             ></iframe>
            
  //       </div>
  //     </div>
  //   );
  // };
  
  
  const data = [
    {
      img: "images/jobsposted.png",
      name: "100k",
      text: "Jobs Posted"
    },
    {
      img: "images/recruiters.png",
      name: "17k",
      text: "Recruiters"
    },
    {
      img: "images/freelancers.png",
      name: "15K",
      text: "Freelancers"
    },
    {
      img: "images/hiringcountries.png",
      name: "25",
      text: "Operating Countries"
    }
  ];
  
  const HiringsNumbers = () => {
    return (
    <div className='container'>
      <div className='text-center mb-5'>
        <h3 className='section-heading'>Skill On Hire in Numbers</h3>
        <p className='section-text'>Everything we have got and we have done reflects our expertise</p>
      </div>
      <div className='row'>
          {data.map((item,index)=> (
             <div className='col-md-3'>
            <div key={index} className='card border-0'>
              <div className='card-body d-flex align-items-center'>
                <img src={require(`./${item.img}`)} alt={item.name} className='img-fluid icon'/>
                <div className='d-flex flex-column'>
                <div className='card-heading'>{item.name}</div>  
                <div className='card-text'>{item.text}</div>
                </div> 
              </div>
            </div>
          </div>
          ))}
      </div>
    </div>
    );
  }
  
  
  const Testimonials = () =>{
    return(
      <div className='container'>
        <div className='text-center'>
          <h3 className='section-heading'>Join 1.4+ Million Users who use Skill On Hire each year to connect with on us</h3>
          <p className='section-text'>Donec nec justo a quam varius maximus. Maecenas sodales tortor commodo.</p>
        </div> 
        <div className='d-flex justify-content-between mt-4 align-items-center px-5'>
          <img src={`${process.env.PUBLIC_URL}/images/google.png`} alt="google" className='img-fluid'/>
          <img src={`${process.env.PUBLIC_URL}/images/microsoft.png`} alt="microsoft" className='img-fluid'/>
          <img src={`${process.env.PUBLIC_URL}/images/toyota.png`} alt="toyota" className='img-fluid'/>
          <img src={`${process.env.PUBLIC_URL}/images/firefox.png`} alt="firefox" className='img-fluid'/>
          <img src={`${process.env.PUBLIC_URL}/images/slack.png`} alt="slack" className='img-fluid'/>
          <img src={`${process.env.PUBLIC_URL}/images/hyundai.png`} alt="hyundai" className='img-fluid'/>
        </div>
  
        <div className='col-md-8 ms-auto me-auto mt-5'>
          <div className='card border-0 card-shadow'>
            <div className='card-body text'>
              <p className='position-relative'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
              <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
              </svg>
               Hirings made it easy to work with, interview, and select our best match for a talent agency.</p>
              <div className='d-flex justify-content-between mt-4'>
                <div className='fz-24'>Richard Son</div>
                <img src={`${process.env.PUBLIC_URL}/images/techmahindra.png`} alt='techmahindra' className='img-fluid'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  
  const Subscribe = () => {
    return (
      <div className='container'>
        <div className='row align-items-center offset-md-2'>
          <div className='col-md-5'>
          <p className='m-0 text-white'>New Things Will Always Update Regularly</p>
          </div>
          
          <div className='col-md-5'>
            <div className='card border-0 rounded-0'>
              <div className='card-body pl-15'>
                <div className='d-flex align-items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                  </svg>
                  <form className='d-flex flex-1'>
                    <input type='text' name='subscribe' className='form-control border-0 form-input' placeholder='Enter Your Email Address'/>
                    <button type='submit' className='submit'>Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default Home;