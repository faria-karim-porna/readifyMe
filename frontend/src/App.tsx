
import MarkdownPreview from '@uiw/react-markdown-preview';
function App() {
  const source =`
  <!-- Title -->
<h1 align="center">👋 Hey there, I'm Faria</h1>

<!-- Intro -->
<p align="center">
  <em>Enthusiastic coder and tech explorer with a passion for creating innovative solutions</em>
</p>

<!-- Social Links -->
<p align="center">
  <a href="https://github.com/faria-p"><img alt="GitHub" src="https://img.shields.io/badge/GitHub-faria--p-blue?style=flat-square&logo=github"></a>
  <!-- Add more social links as needed -->
</p>

<!-- Tech Stack -->
<h3 align="center">Tech Stack</h3>
<p align="center">
  <img alt="Python" src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black">
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white">
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white">
  <!-- Add your favorite technologies and languages -->
</p>

<!-- GitHub Stats -->
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=faria-p&show_icons=true&theme=dark" alt="GitHub Stats">
</p>

<!-- Featured Projects -->
<h3 align="center">Featured Projects</h3>
<p align="center">
  <a href="https://github.com/faria-p/project-1"><img src="project-1-thumbnail.jpg" alt="Project 1"></a>
  <a href="https://github.com/faria-p/project-2"><img src="project-2-thumbnail.jpg" alt="Project 2"></a>
  <!-- Add links and images for your featured projects -->
</p>

<!-- Reach Out -->
<h3 align="center">Let's Connect</h3>
<p align="center">
  <a href="mailto:faria@example.com"><img alt="Email" src="https://img.shields.io/badge/Email-Contact%20Me-red?style=flat-square"></a>
</p>
  `
  return (
    <>
    <MarkdownPreview source={source} />
    </>
  );
}

export default App;
