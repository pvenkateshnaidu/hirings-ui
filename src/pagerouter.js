import { Routes, Route,Navigate } from 'react-router-dom';
import ProtectedRoute from './components/protectedRoutes';
import Signup from './signup/signup';
import Login from './login/login';
import Home from './home';
import PostJob from './postjob/postjob';
import Dashboard from './components/dashboard/dashboard';
import AdminHeader from './admin/adminHeader';
import Employer from './employer/employer';

const AppRoutes = () => {

    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/dashboard'  element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path='/admin' element={
        <ProtectedRoute>
           <AdminHeader />
        </ProtectedRoute>
        }/>
        <Route path='/employer' element={<Employer />} />
        <Route path='/postjob' element={<PostJob />} />
      </Routes>
    )
  };
  
  export default AppRoutes;