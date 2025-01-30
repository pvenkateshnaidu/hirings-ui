import axios from 'axios';

//const API_URL = "https://tr455vs9np.ap-south-1.awsapprunner.com/api/auth/";

const API_URL = "http://localhost:8080/api/auth/"
const  login = async(emailOrUsername, password) => {
  try {
    const response = await axios.post(`${API_URL}signin`, {
      emailOrUsername,
      password,
    });

    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    handleError(error);
  }
  };


  const signup = async ( username,email,password,name,mobile,usertype,country,city) => {
    try {
      const response = await axios.post(`${API_URL}signup`, {
        username, email, password, name, mobile,usertype, country, city
      });
      return response.data;
    } catch (error) {
      handleError(error);
    }
  };


  
  const logout = () => {
    localStorage.removeItem("user");
  };

  
  const handleError = (error) => {
    if (error.response) {
      throw new Error(error.response.data.message || "Server error");
    } else if (error.request) {
      console.error("Error Request:", error.request);
      throw new Error("No response from server");
    } else {
      console.error("Error:", error.message);
      throw new Error("Request setup error");
    }
  };

  const getCurrentUser = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  };
  
  export default {
    login,
    logout,
    signup,
    getCurrentUser
  };