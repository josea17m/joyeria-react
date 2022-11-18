const backgroundColor = { backgroundColor: "black" };

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light" style={backgroundColor}>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" href="anillos">
              Anillos
            </a>
            <a className="nav-link active" href="cadenas">
              Cadenas
            </a>
            <a className="nav-link active" href="cangongas">
              Candongas
            </a>
            <a className="nav-link active" href="manillas">
              Manillas
            </a>
            <a className="nav-link active" href="topitos">
              Topitos
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
