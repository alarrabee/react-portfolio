
function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p>&copy; 2024 Alexandra Larrabee. All Rights Reserved.</p>
            <a href="https://github.com/your-github-profile" className="text-white mx-2">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/your-linkedin-profile" className="text-white mx-2">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="mailto:your-email@example.com" className="text-white mx-2">
              <i className="fas fa-envelope"></i> Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;