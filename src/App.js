import { BrowserRouter as Router } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import AppRoutes from './pagerouter';
import { useLocation } from 'react-router-dom';
import './App.css';



// https://github.com/pvenkateshnaidu/hirings-ui/tree/main

function App() {
  return(
    <Router>
    <MainContent />
  </Router>
  )
}

function MainContent(){
  const location = useLocation();

  const noHeaderFooterRoutes = ['/postjob'];
  const shouldShowHeaderFooter = !noHeaderFooterRoutes.includes(location.pathname);

  return (

       <div className='App'>
       {shouldShowHeaderFooter &&  <Header /> }
      
        <AppRoutes />
       
        {shouldShowHeaderFooter && (
        <footer className='footer bg-white'>
          <Footer />
        </footer>
        )}
        
       </div>
    
   
  );
}

export default App;
