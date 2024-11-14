import axios from 'axios';

const API_URL = "https://tr455vs9np.ap-south-1.awsapprunner.com/api/auth/";

const login = (username, password) => {
    return axios.post(API_URL + "signin", { username, password })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  };
  
  const logout = () => {
    localStorage.removeItem("user");
  };
  
  export default {
    login,
    logout,
  };