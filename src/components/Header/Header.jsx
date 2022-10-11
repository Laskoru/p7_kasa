import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom'
import "./Header.css";

function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="Logo Kasa" className="kasa-logo" />
      </div>
      <nav>
        <Link to="/" className="nav-gen accueil">
          Accueil
        </Link>
        <Link to="/about" className="nav-gen apropos">
          A Propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
