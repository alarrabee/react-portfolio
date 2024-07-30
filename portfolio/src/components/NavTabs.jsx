import { Link, useLocation } from 'react-router-dom';

//navigation bar and header
function NavTabs() {
    const location = useLocation();
    const currentPage = location.pathname.substring(1) || 'about'; 
  
    return (
      <>
        <h1>Hi, I'm Alexandra Larrabee</h1>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${currentPage === '' ? 'active' : ''}`}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={`nav-link ${currentPage === 'portfolio' ? 'active' : ''}`}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/resume"
              className={`nav-link ${currentPage === 'resume' ? 'active' : ''}`}
            >
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </>
    );
  }
  
  export default NavTabs;

