const styles = {
    footerStyle: {
      position: 'fixed',
      bottom: 0,
      width: '100%', 
      backgroundColor: '#343a40',
      color: '#ffffff', 
      textAlign: 'center',
      padding: '5px', 
      paddingLeft: '20px',
      paddingRight: '20px',
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
    },
    linkStyle: {
      color: '#ffffff',
      margin: '0 10px', 
      textDecoration: 'none',
      transition: 'color 0.3s ease', 
    },
    container: {
      display: 'flex', 
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%', 
    },
    rightSection: {
        marginTop: '10px',
      },
  };
  
function Footer() {
    return (
        <footer style={styles.footerStyle}>
            <div style={styles.container}>
                <div style={styles.leftSection}>
                    <a href="mailto:alexlarrabee10@gmail.com" style={styles.linkStyle}>
                        <i className="fas fa-envelope"></i> alexlarrabee10@gmail.com
                    </a>
                    <a href="https://github.com/alarrabee" style={styles.linkStyle}>
                        <i className="fab fa-github"></i> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/alexandra-larrabee/" style={styles.linkStyle}>
                        <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a href="https://www.instagram.com/krampus_kitties/" style={styles.linkStyle}>
                        <i className="fas fa-envelope"></i> Instagram
                    </a>
                </div>
                <div style={styles.rightSection}>
                <p>&copy; 2024 Alexandra Larrabee. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;