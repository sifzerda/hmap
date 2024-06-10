import { Link, useLocation } from 'react-router-dom';
import '../App.css';

function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Contact" className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>
          Contact
        </Link>
      </li>
      {/* New Tab Linking to Fiction-Map - currently a Google placeholder */}
      <li className="nav-item">
        <a href="https://fic-map.netlify.app" className="nav-link" target="_blank" rel="noopener noreferrer">
          Fiction Map
        </a>
      </li>
      {/* End of Navigation links */}
    </ul>
  );
}

export default Navigation;
