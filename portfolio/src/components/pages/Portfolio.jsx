import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import image5 from '../../assets/image5.png';
import image6 from '../../assets/image6.png';

const portfolioItems = [
  { id: 1, image: image1, imageLink: 'https://github.com/alarrabee/bird-finder', title1: 'Chirp Finder', link1: 'https://alarrabee.github.io/bird-finder/', title2: 'GitHub', link2: 'https://github.com/alarrabee/bird-finder' },
  { id: 2, image: image2, imageLink: 'https://github.com/benjamin-parks/Project-2-Animal-Adoption-App', title1: 'Paws & Claws Adoption', link1: 'https://project-2-animal-adoption-app.onrender.com/', title2: 'GitHub', link2: 'https://github.com/benjamin-parks/Project-2-Animal-Adoption-App' },
  { id: 3, image: image3, imageLink: 'https://github.com/alarrabee/mvc-tech-blog', title1: 'Tech Blog', link1: 'https://mvc-tech-blog-wzxl.onrender.com/', title2: 'GitHub', link2: 'https://github.com/alarrabee/mvc-tech-blog' },
  { id: 4, image: image4, imageLink: 'https://github.com/alarrabee/third-party-api-task-board/blob/main/README.md', title1: 'Task List', link1: 'https://alarrabee.github.io/third-party-api-task-board/', title2: 'GitHub', link2: 'https://github.com/alarrabee/third-party-api-task-board/blob/main/README.md' },
  { id: 5, image: image5, imageLink: 'https://github.com/alarrabee/server-side-api-weather-dashboard?tab=readme-ov-file', title1: 'Weather Dashboard', link1: 'https://alarrabee.github.io/server-side-api-weather-dashboard/', title2: 'GitHub', link2: 'https://github.com/alarrabee/server-side-api-weather-dashboard?tab=readme-ov-file' },
  { id: 6, image: image6, imageLink: 'https://github.com/alarrabee/web-api-personal-blog?tab=readme-ov-file', title1: 'Blog Site', link1: 'https://alarrabee.github.io/web-api-personal-blog/', title2: 'GitHub', link2: 'https://github.com/alarrabee/web-api-personal-blog?tab=readme-ov-file' },
];

const styles = {
  portfolioContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    padding: '20px',
    marginBottom: '100px',
  },
  portfolioItem: {
    flex: '1 1 calc(33.333% - 40px)', 
    boxSizing: 'border-box',
    textAlign: 'center',
    position: 'relative',
  },
  portfolioImage: {
    width: 'auto', 
    height: '150px',
    borderRadius: '8px',
  },
  portfolioTitle: {
    marginTop: '10px',
    fontSize: '1rem',
    color: '#333',
    display: 'block',
    textDecoration: 'none', 
  },
  titleContainer: {
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
};

export default function Portfolio() {
  return (
    <div style={styles.portfolioContainer}>
      {portfolioItems.map((item) => (
        <div key={item.id} style={styles.portfolioItem}>
          <a href={item.imageLink} target="_blank" rel="noopener noreferrer">
            <img src={item.image} alt={`Image for ${item.title1}`} style={styles.portfolioImage} />
          </a>
          <div style={styles.titleContainer}>
            <a href={item.link1} target="_blank" rel="noopener noreferrer" style={styles.portfolioTitle}>
              {item.title1}
            </a>
            <a href={item.link2} target="_blank" rel="noopener noreferrer" style={styles.portfolioTitle}>
              {item.title2}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}