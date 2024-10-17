import { BrowserRouter as Router } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import AppRoutes from './pagerouter';

import './App.css';

// https://github.com/pvenkateshnaidu/hirings-ui/tree/main

function App() {
  return (
    <Router>
       <div className='App'>
        <Header />
        <AppRoutes />
        <footer className='footer bg-white'>
        <Footer />
        </footer>
       </div>
    </Router>
   
  );
}



export default App;
