import "./Footer.css";
import logo from "../../assets/logo-footer.png";

function Footer() {
  return (
    <footer>
      <div>
        <img src={logo} alt="Logo Kasa" className="logo-footer" />
      </div>
      <div className="quote_footer">© 2020 Kasa. All rights reserved</div>
    </footer>
  );
}

export default Footer;
