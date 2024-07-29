
// function Footer() {
//   return (
//     <footer className="bg-dark text-white mt-5 p-4 text-center">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12">
//             <p>&copy; 2024 Alexandra Larrabee. All Rights Reserved.</p>
//             <a href="https://github.com/your-github-profile" className="text-white mx-2">
//               <i className="fab fa-github"></i> GitHub
//             </a>
//             <a href="https://www.linkedin.com/in/your-linkedin-profile" className="text-white mx-2">
//               <i className="fab fa-linkedin"></i> LinkedIn
//             </a>
//             <a href="mailto:your-email@example.com" className="text-white mx-2">
//               <i className="fas fa-envelope"></i> Email
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

const styles = {
    footerStyle: {
      position: 'fixed',   // Corrected from 'fixed' to 'fixed' (as a string)
      bottom: 0,
      width: '100%',       // Ensure footer spans the full width of the viewport
      backgroundColor: '#343a40', // Dark background color
      color: '#ffffff',    // White text color
      textAlign: 'center', // Center align text
      padding: '5px',     // Add some padding
    },
  };
  
  function Footer() {
    return (
      <footer style={styles.footerStyle}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <a href="https://github.com/your-github-profile" className="text-white mx-5">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="https://www.linkedin.com/in/your-linkedin-profile" className="text-white mx-5">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="mailto:your-email@example.com" className="text-white mx-5">
                <i className="fas fa-envelope"></i> Email
              </a>
            </div>
            <p>&copy; 2024 Alexandra Larrabee. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;