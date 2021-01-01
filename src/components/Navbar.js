const Navbar = () => {
  let menuOpen = false;
  function showMenu() {
    const hamMenu = document.querySelector("#hamburger-menu");
    if (!menuOpen) {
      hamMenu.classList.add("hamburger-show");
      menuOpen = true;
    } else {
      hamMenu.classList.remove("hamburger-show");
      menuOpen = false;
    }
  }
  return (
    <nav>
      <div className="nav-left">
        <h2>Shortly</h2>
        <ul>
          <li>
            <a href="https://localhost:3000">Features</a>
          </li>
          <li>
            <a href="https://localhost:3000">Pricing</a>
          </li>
          <li>
            <a href="https://localhost:3000">Resources</a>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <a href="https://localhost:3000" className="login-btn">
          Login
        </a>
        <a href="https://localhost:3000" className="signup-btn">
          Sign up
        </a>
      </div>
      <div className="hamburger" onClick={showMenu}>
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
        <div className="bar bar3"></div>
      </div>
      <div id="hamburger-menu" className="menu-visible-none">
        <ul>
          <li>
            <a href="https://localhost:3000">Features</a>
          </li>
          <li>
            <a href="https://localhost:3000">Pricing</a>
          </li>
          <li>
            <a href="https://localhost:3000">Resources</a>
          </li>
          <li className="login-border">
            <a href="https://localhost:3000" className="login-btn">
              Login
            </a>
          </li>
          <li>
            <a href="https://localhost:3000" className="signup-btn">
              Sign up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
