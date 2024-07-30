import { Link, useLocation } from 'react-router-dom';


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


// function NavTabs({ currentPage, handlePageChange }) {
//     return (
//         <>
//         <h1>Hi, I'm Alexandra Larrabee</h1>
//       <ul className="nav nav-tabs">
//         <li className="nav-item">
//           <a
//             href="#about"
//             onClick={() => handlePageChange('About')}
//             // conditional (ternary) operator that checks to see if the current page is "Home"
//             // If it is, it will set the current page to 'nav-link-active', otherwise it will set it to 'nav-link'
//             className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
//           >
//             About
//           </a>
//         </li>
//         <li className="nav-item">
//           <a
//             href="#portfolio"
//             onClick={() => handlePageChange('Portfolio')}
//             // checks to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//             className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
//           >
//             Portfolio
//           </a>
//         </li>
//         <li className="nav-item">
//           <a
//             href="#resume"
//             onClick={() => handlePageChange('Resume')}
//             // checks to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//             className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
//           >
//             Resume
//           </a>
//         </li>
//         <li className="nav-item">
//           <a
//             href="#contact"
//             onClick={() => handlePageChange('Contact')}
//             // checks to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//             className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
//           >
//             Contact
//           </a>
//         </li>
//       </ul>
//       </>
//     );
//   }
  
//   export default NavTabs;