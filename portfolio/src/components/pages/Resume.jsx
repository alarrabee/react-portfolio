
import resumePDF from '../../../public/alarrabeeResume2024.pdf';

const items = [
  { id: 1, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materializecss/materializecss-original.svg' },
  { id: 2, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg' },
  { id: 3, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg' },
  { id: 4, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { id: 5, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg' },
  { id: 6, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg' },
  { id: 7, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg' },
  { id: 8, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg' },
  { id: 9, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
  { id: 10, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg' },
  { id: 11, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original-wordmark.svg' },
  { id: 12, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain-wordmark.svg' },
  { id: 13, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/handlebars/handlebars-original-wordmark.svg' },
  { id: 14, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-plain-wordmark.svg' },
  { id: 15, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { id: 16, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg' },
  { id: 17, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original-wordmark.svg' },
  { id: 18, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg' },
  { id: 19, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg' },
  { id: 20, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg' },
  { id: 21, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original-wordmark.svg' },
  { id: 22, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg' },
  { id: 23, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg' },
  { id: 24, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg' },
  { id: 25, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg' },
  { id: 26, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg' },
  { id: 27, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original-wordmark.svg' },
  { id: 28, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg' },
  { id: 29, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg' },
  { id: 30, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original-wordmark.svg' },
];

const styles = {
  titleStyle: {
    marginBottom: '30px',
    marginTop: '30px',
    textAlign: 'center',
  },
  containerStyle: {
    display: 'flex',
    flexWrap: 'wrap', 
    justifyContent: 'space-around', 
    alignItems: 'center', 
    gap: '20px', 
    marginBottom: '100px',
  },
  imageStyle: {
    height: '100px', 
    width: 'auto',
    borderRadius: '8px', 
  },
};

export default function Resume() {
  return (
    <div>
      <div style={styles.titleStyle}>
        <h1>Resume</h1>
        <a
          href={resumePDF}
          download="alarrabee-resume.pdf"
          className="btn btn-primary"
        >
          Download PDF
        </a>
      </div>
      <div style={styles.containerStyle}>
        {items.map((item) => (
          <img
            key={item.id}
            src={item.src}
            alt={item.alt}
            style={styles.imageStyle}
          />
        ))}
      </div>
    </div>
  );
}