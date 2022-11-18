import NavBar from "./NavBar";

function Header() {
  return (
    <header>
      <div className="top-header">
        <div className="logo-header">
          <a className="navbar-brand" href="/">
            <img src="./images/logo en negro.png" alt="logo" />
          </a>
        </div>

        <div className="container-iconos-top-header">
          <div className="iconos-top-header">
            <div className="icono-header">
              <a href="/user">
                <img src="./images/login3.png" alt="perfil" />
              </a>
            </div>

            <div className="icono-header icono-carrito">
              <a href="/carrito">
                <img src="./images/carrito3.png" alt="carrito" />
              </a>
            </div>

            <div className="icono-header">
              <a href="/favoritos">
                <img src="./images/fav2.png" alt="favoritos" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <NavBar />
    </header>
  );
}

export default Header;
