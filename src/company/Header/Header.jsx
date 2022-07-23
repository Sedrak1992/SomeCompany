import "../../css/header.css";

function Header() {
  return (
    <header>
      <div>
        <h2>
          <samp>Some</samp> <p className="paragraph">Company</p>
        </h2>
      </div>
      <div>
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
    </header>
  );
}

export default Header;
