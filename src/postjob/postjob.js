import React,{ useState }  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './postjob.css'
import { Link } from "react-router-dom";
import InputField from "../inputfields/input";
const PostJob = () =>{
 
  const [fullName, setFullName] = useState('');
  const [company, setcompany] = useState('');
  const [consultancy, setconsultancy] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [email, setEmail] = useState('');
  const [terms, setTerms] = useState(false);

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if(!company.trim()){
      newErrors.company = 'Company name is required'
    }

    if(!consultancy){
      newErrors.consultancy = 'Please Check consultancy'
    }

    if (!selectedOption) {
      newErrors.selectedOption = "Please select an option";
    }
   

    if (!email) {
      newErrors.email = 'Email is required.';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if(!terms){
      newErrors.terms = 'Please check terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 

  }

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      console.log('Form submitted successfully!');
      // You can handle successful submission here
    } else {
      console.log('Form has errors'); // Log if there are errors
    }
  };

    return(
      <section className="postjob">
        <div className="d-flex">
           <aside className="aside">
           <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="google" className='img-fluid'/>
           
           <div className="highlights mt-10">
             <div className="text-white">
              <p className="text-white"></p>
                <h3 className="h3">What does Hirings offer 👋</h3>
                  <ul className="list-style-default">
                    <li><FontAwesomeIcon icon={faCheck} className="me-2"/> One click apply using Hirings profile.</li>
                    <li><FontAwesomeIcon icon={faCheck} className="me-2"/>check Get relevant job recommendations.</li>
                    <li><FontAwesomeIcon icon={faCheck} className="me-2"/>check Showcase profile to top companies and consultants.</li>
                    <li><FontAwesomeIcon icon={faCheck} className="me-2"/>check Know application status on applied jobs.</li>
                    <li><FontAwesomeIcon icon={faCheck} className="me-2"/> Post a job and get relevant applies</li>
                    <li><FontAwesomeIcon icon={faCheck} className="me-2"/>Search Hirings resume database</li>
                    <li><FontAwesomeIcon icon={faCheck} className="me-2"/>Bulk excel download/ Profile unlocks</li>
                  </ul>
                  {/* <Link to="/register" className="text-decoration-none btn-white mt-5">Register</Link> */}
             </div>
           </div>
           </aside> 
           <div className="flex-1 bg-white">
             <p className="text-end fz-14 mt-3 me-4">Don’t have an account?
              <Link className="me-2 ms-2 text-decoration-none" title="Sign Up">Sign Up</Link>
              <Link className="signout" title="sign out"><i className="fa-solid fa-arrow-right-from-bracket"></i></Link>
             </p>
             
             <form className="postjob-form" onSubmit={handleSubmit}>
              <h3 className="form-heading">Let’s get you started!</h3>

                <InputField label='Your Full Name' placeholder='Enter your Full Name' id="name" className='form-control'  onChange={(e) => setFullName(e.target.value)} error={errors.fullName && !fullName.trim() ? errors.fullName : null}/>  
                
                <InputField label='Enter the name of your company' placeholder='e.g Falcon Solutions' id="company" className='form-control' divClassName="mb-1" onChange={(e) => setcompany(e.target.value)} error={errors.company && !company.trim() ? errors.company : null}/>
                <div className="form-check">
                <InputField type="checkbox" label='This is a consultancy (Hiring or staffing agency)'  
                className="form-check-input" id="exampleCheck1" checked="false"
                 onChange={(e) => setconsultancy(e.target.checked)} 
                 error={errors.consultancy && !consultancy ? errors.consultancy : null}/>  
                </div>
             

                <div className="mb-3 number-of-employees">
                  <label className="form-label">Number of employees in your company</label>
                  <div className="d-flex flex-wrap">
                    {[
                      { label: '0-50', value: '50' },
                      { label: '51-100', value: '100' },
                      { label: '101-300', value: '300' },
                      { label: '301-500', value: '500' },
                      { label: '501-1000', value: '1000' },
                      { label: '1000 above', value: '1000 above' },
                    ].map((option) => (
                      <InputField
                        key={option.value}
                        type="radio"
                        name="options"
                        options={[option]} 
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        error={errors.selectedOption}
                        className="btn-check"
                        id={`option-${option.value}`}
                        styled={true}
                        wrapInDiv={false}
                      />
                    ))}
                  </div>
                  {errors.selectedOption && <div className="text-danger">{errors.selectedOption && !selectedOption ? errors.selectedOption:null}</div>} {/* Display error */}
                </div>
                
                
             

              <div className="mb-3">
              
              <InputField type="email" className="form-control" id="exampleFormControlInput1" label="work email(optional)" placeholder="Enter your email work address"
              onChange={(e) => setEmail(e.target.value)} error={errors.email && !email.trim() ? errors.email : null}
              />
              </div>

              <div className="mb-3 form-check">
              <InputField type="checkbox" className="form-control" id="agree" 
              label={
                <>
                  I agree to  <Link>Terms of Services</Link> and <Link>Privacy policy</Link>
                </>
              }
              placeholder="Enter your email work address"  checked="false" 
              onChange={(e) => setTerms(e.target.checked)}
              error={errors.terms && !terms ? errors.terms : null}/>
                 
              </div>
              <button type="submit" className="btn btn-primary post-job mt-4">Post Job</button>
             </form>
           </div>
        </div>
      </section>
    )
}


export default PostJob;