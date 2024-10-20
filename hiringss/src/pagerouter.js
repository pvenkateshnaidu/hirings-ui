import { Routes, Route,Navigate } from 'react-router-dom';
import Login from './login/login';
import Home from './home';



const AppRoutes = () => {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    )
  };
  
  export default AppRoutes;