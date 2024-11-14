import { Routes, Route,Navigate } from 'react-router-dom';
import ProtectedRoute from './components/protectedRoutes';
import Login from './login/login';
import Home from './home';
import PostJob from './postjob/postjob';
import Dashboard from './components/dashboard/dashboard';


const AppRoutes = () => {

    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/login" element={<Login />} />
        <Route path='/dashboard'  element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path='/postjob' element={<PostJob />} />
      </Routes>
    )
  };
  
  export default AppRoutes;