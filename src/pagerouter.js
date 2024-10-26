import { Routes, Route,Navigate } from 'react-router-dom';
import Login from './login/login';
import Home from './home';
import PostJob from './postjob/postjob';


const AppRoutes = () => {

    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/login" element={<Login />} />
        <Route path='/postjob' element={<PostJob />} />
      </Routes>
    )
  };
  
  export default AppRoutes;