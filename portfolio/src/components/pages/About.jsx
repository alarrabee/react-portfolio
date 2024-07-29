import profilePic from '../../assets/profpic.png'
export default function About() {
    return (
      <div>
        <h1>About Me</h1>
        <img src={profilePic} alt="Description of the image" className="about-image" height="200"/>
        <p>
        Welcome to my portfolio. I am currently enrolled in the U of M Coding Bootcamp. A 24-week course that will give me the professional skills needed to become a full stack web developer. I have a background in chemistry and am currently in the pharmaceutical and medical device industries. I help build innovative and life saving technology.
        </p>
      </div>
    );
  }