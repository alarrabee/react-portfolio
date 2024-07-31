import { Link, useLocation } from 'react-router-dom';


const styles = {
    navColor: {
        background: '#b30089',
        fontSize: '20px'
    },
    textColor: {
        color: '#FD96A9'
    }
}

//navigation bar and header
function NavTabs() {
    const location = useLocation();
    const currentPage = location.pathname.substring(1) || 'about'; 
  
    return (
      < div style={styles.navColor}>
        <h1 style={styles.textColor}>Hi, I'm Alexandra Larrabee</h1>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link style={styles.textColor}
              to="/"
              className={`nav-link ${currentPage === '' ? 'active' : ''}`}
            >
              About
            </Link >
          </li>
          <li className="nav-item">
            <Link style={styles.textColor}
              to="/portfolio"
              className={`nav-link ${currentPage === 'portfolio' ? 'active' : ''}`}
            >
              Portfolio
            </Link> 
          </li>
          <li className="nav-item">
            <Link style={styles.textColor}
              to="/resume"
              className={`nav-link ${currentPage === 'resume' ? 'active' : ''}`}
            >
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link style={styles.textColor}
              to="/contact"
              className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    );
  }
  
  export default NavTabs;

