import logo from './images/logo.svg';
import logotext from './images/logotext.svg';

const Footer = () =>{
    return(
      <div className="container">
        <div className="row">
            <div className="col-md-3">
             <a className="navbar-brand" href="#"><img src={logo} alt="logo" /><img src={logotext} alt="logotext" className='ms-2'/></a>
             <p className='mt-4'>Skill On Hire is the heart of the Hiring community and the best resource to discover and connect with jobs worldwide.</p>
            </div>

            <div className='col-md-3'>
                <h3 className='heading-3'>For Job Seekers</h3>
                <a href='#' title='Search Jobs' className='footer-link'><i class="bi bi-chevron-double-right"></i>Search Jobs</a>
                <a href="#" title='Register' className='footer-link'><i class="bi bi-chevron-double-right"></i>Register</a>
                <a href="#" title='JOb Alerts' className='footer-link'><i class="bi bi-chevron-double-right"></i>Job Alerts</a>
                <a href="#" title='Career Advice' className='footer-link'><i class="bi bi-chevron-double-right"></i>Career Advice</a>
            </div>

            <div className='col-md-3'>
                <h3 className='heading-3'>Recruiters</h3>
                <a href='#' title='CV Database Access' className='footer-link'><i class="bi bi-chevron-double-right"></i>CV Database Access</a>
                <a href="#" title='Advertise Jobs' className='footer-link'><i class="bi bi-chevron-double-right"></i>Advertise Jobs</a>
                <a href="#" title='Search CV’s' className='footer-link'><i class="bi bi-chevron-double-right"></i>Search CV’s</a>
                <a href="#" title='Test CV Search' className='footer-link'><i class="bi bi-chevron-double-right"></i>Test CV Search</a>
                <a href="#" title='Popular Jobs' className='footer-link'><i class="bi bi-chevron-double-right"></i>Popular Jobs</a>
            </div>

            <div className='col-md-3'>
                <h3 className='heading-3'>About The Creation </h3>
                <a href='#' title='About Us' className='footer-link'><i class="bi bi-chevron-double-right"></i>About Us</a>
                <a href="#" title='Contact US' className='footer-link'><i class="bi bi-chevron-double-right"></i>Contact US</a>
                <a href="#" title='Work For US' className='footer-link'><i class="bi bi-chevron-double-right"></i>Work For US</a>
                <a href="#" title='FAQ’s' className='footer-link'><i class="bi bi-chevron-double-right"></i>FAQ’s</a>
                <a href="#" title='Help' className='footer-link'><i class="bi bi-chevron-double-right"></i>Help</a>
            </div>

            <div className='col-md-12'>
                <a class="d-block text-decoration-none text-secondary" href="mailto:support@skillonhire.com" title='support@skillonhire.com'><i class="bi bi-envelope-fill footer-icon"></i> support@skillonhire.com</a>
                <a class="d-block text-decoration-none text-secondary" href="telto:040 123456789" title='040 123456789'><i class="bi bi-telephone-fill footer-icon"></i> 040 123456789</a>
            </div>

            <div className='col-md-12'>
                <hr className='hr'/>
            </div>

            <div className='col-md-12'>
                <div className='d-flex justify-content-between'>
                    <div>© Skill On Hire 2024, All Rights Reserved</div>
                    <div className='d-flex'>
                        <a href="#" title='Terms of Use & IP' className='text-secondary me-3 text-decoration-none'>Terms of Use & IP</a>
                        <a href="#" title='Privacy Policy' className='text-secondary text-decoration-none'>Privacy Policy</a>
                    </div>
                    <div className='d-flex'>
                       <a href="#" title='facebook' className='social-icon me-3 text-decoration-none'><i class="fa-brands fa-facebook-f"></i></a>
                       <a href="#" title='youtube' className='social-icon me-3 text-decoration-none'><i class="fa-brands fa-youtube"></i></a>
                       <a href="#" title='twitter' className='social-icon me-3 text-decoration-none'><i class="fa-brands fa-twitter"></i></a>
                       <a href="#" title='instagram' className='social-icon me-3 text-decoration-none'><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
            </div>

        </div>
      </div>
    )
};

export default Footer;