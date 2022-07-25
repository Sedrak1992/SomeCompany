import "../../css/header.css";
import hamburgerIcon from "../../img/hamburgerIcon.png";
function Header() {
  return (
    <header>
      <div>
        <h2>
          <samp>Some</samp> <p className="paragraph">Company</p>
        </h2>
      </div>
      <div className="menuNavigation">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a className="textColor" href="#">
              Products
            </a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="hamburgerIcon">
        <img src={hamburgerIcon} alt="icms" />
      </div>
    </header>
  );
}

export default Header;
