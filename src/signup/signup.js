import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css'
import fields from '../fieldConfig.json';
import InputField from '../inputfields/input';
import authService from "../services/authservice";

const Signup = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    fullname: "",
    email: "",
    password: "",
    mobile: "",
    workstatus: "",
    city: "",
    state: ""
  });
  const [formErrors, setFormErrors] = useState({});
  const [filteredCities, setFilteredCities] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");


  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setFormValues((prevValues) => {
      const updatedValues = { ...prevValues, [name]: value };
  
      if (name === 'state') {
        const cityOptions = fields.find((field) => field.name === 'city').options;
        const filteredCities = cityOptions.filter((city) => city.state === value);
        setFilteredCities(filteredCities);
        updatedValues.city = '';
      }
  
      console.log('Updated formValues:', updatedValues);
      return updatedValues;
    });
  };
  

  const validate = () => {
    const errors = {};
    fields.forEach((field) => {
      const value = formValues[field.name]?.trim();
      if (field.validation?.required && (!value || value === '')) {
        errors[field.name] = `${field.label} is required`;
      }
    });
    return errors;
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try{
        const response = await authService.signup(
          formValues.fullname,
          formValues.email,
          formValues.password,
          formValues.mobile,
          formValues.workstatus,
          formValues.city,
          formValues.state,
        );
        
        setError("");
        console.log("Signup Response:", response);
        setMessage(response.message || "Signup successful!");
        setFormValues({
          fullname: "",
          email: "",
          password: "",
          mobile: "",
          workstatus: "",
          city: "",
          state: ""
        });

        // Redirect to login
        navigate('/login');

      }catch(err){
        setError(err.message || "An error occurred during signup.");
        setMessage("");
        console.error("Signup Error:", err);
      }
      
    }
  };

  return (
    <section className='section'>
        <div className='container'>   
            <form onSubmit={handleSubmit} className='register'>
            {fields.map((field) => {
                if (['text', 'email', 'tel', 'password'].includes(field.type)) {
                return (
                    <div className='mb-3' key={field.name}>
                    <InputField 
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={formValues[field.name] || ''}
                        onChange={handleChange}
                        className="form-control"
                        label = {field.label}
                        wrapInDiv={false}
                    />
                    {formErrors[field.name] && <p className="text-danger">{formErrors[field.name]}</p>}
                    {field.helpText && <small>{field.helpText}</small>}
                    </div>
                );
                }

                if (field.type === 'select') {
                const options = field.name === 'city' ? filteredCities : field.options;

                return (
                    <div key={field.name} className="mb-3">
                    <label>{field.label}</label>
                    <select
                        name={field.name}
                        value={formValues[field.name]}
                        onChange={handleChange}
                        className="form-select"
                    >
                        <option value="">{field.placeholder}</option>
                        {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                        ))}
                    </select>
                    {formErrors[field.name] && <p className="text-danger">{formErrors[field.name]}</p>}
                    </div>
                );
                }

                if (field.type === "radio") {
                    return (
                    <div key={field.name} className="text-start summary">
                        <label>{field.label}</label>
                        <InputField
                        type="radio"
                        name={field.name}
                        value={formValues[field.name] || ''}
                        onChange={handleChange}
                        options={field.options}
                        
                        />
                        {formErrors[field.name] && (
                        <p className="text-danger">{formErrors[field.name]}</p>
                    )}
                    </div>
                    
                    );
                }

                return null;
            })}
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
            </form>
        </div>
    </section>
  );
};

export default Signup;
