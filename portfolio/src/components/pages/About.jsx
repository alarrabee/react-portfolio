import profilePic from '../../assets/profpic.png';

const styles = {
    titleStyle: {
        fontSize: '50px',
    },
    container: {
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%', 
        padding: '20px',
        flexDirection: 'row', 
    },
    image: {
        width: '300px', 
        height: 'auto', 
        marginRight: '20px', 
    },
    text: {
        marginLeft: '100px',
        marginRight: '100px',
        color: '#b30089',
        fontSize: '20px'
    },
};

export default function About() {
    return (
        <div className="container mt-5">
            <div style={styles.container}>
                <img 
                    src={profilePic} 
                    alt="Description of the image" 
                    className="img-fluid rounded" 
                    style={styles.image} 
                />
                <p style={styles.text}>
                    <span style={styles.titleStyle}>About Me:</span><br></br>Welcome to my portfolio. I am currently enrolled in the U of M Coding Bootcamp, a 24-week course that will give me the professional skills needed to become a full stack web developer. I have a background in chemistry and am currently in the pharmaceutical and medical device industries. I help build innovative and life-saving technology.
                </p>
            </div>
        </div>
    );
}