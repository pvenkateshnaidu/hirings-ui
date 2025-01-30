import { Routes, Route,Navigate } from 'react-router-dom';
import ProtectedRoute from './components/protectedRoutes';
import Signup from './signup/signup';
import Login from './login/login';
import Home from './home';
import PostJob from './postjob/postjob';
import Dashboard from './components/dashboard/dashboard';
import AdminHeader from './admin/adminHeader';
import Employer from './employer/employer';
import PostJobForm from './postjob/postjobForm';
import JobList from './components/joblist/joblist';

const AppRoutes = () => {

    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/joblist" element={<JobList />} />
        <Route path='/dashboard'  element={
          
            <Dashboard />
          
        } />
        <Route path='/admin' element={
        <ProtectedRoute>
           <AdminHeader />
        </ProtectedRoute>
        }/>
        <Route path='/employer' element={<Employer />} />
        <Route path='/postjob' element={<PostJob />} />
        
        <Route path='/postJobForm' element={
          <ProtectedRoute allowedRoles={['employer']}>
          <PostJobForm />
          </ProtectedRoute>          
          }
        />

        <Route
              path="/admin"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminHeader />
                </ProtectedRoute>
              }
        />

      </Routes>
    )
  };
  
  export default AppRoutes;