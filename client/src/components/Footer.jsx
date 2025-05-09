import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="text-center text-white">

          <p className="footer-text">sifzerda 📺 2024</p>
          <a href="https://github.com/sifzerda/horror-fiction" target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub repository">
          <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>

          <br></br>

          <a href="https://react-td-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" aria-label="View my project portfolio">Portfolio</a>

    </footer>
  );
}

export default Footer;








