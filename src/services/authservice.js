import axios from 'axios';

const API_URL = "https://tr455vs9np.ap-south-1.awsapprunner.com/api/auth/";

const  login = async(email, password) => {
  try {
    const response = await axios.post(`${API_URL}signin`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Server error');
    } else if (error.request) {
      console.error('Error Request:', error.request);
      throw new Error('No response from server');
    } else {
      console.error('Error:', error.message);
      throw new Error('Request setup error');
    }
  }
  };
  
  const logout = () => {
    localStorage.removeItem("user");
  };
  
  export default {
    login,
    logout,
  };