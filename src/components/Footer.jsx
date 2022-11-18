function Footer() {
  return (
    <div className="card">
      <div className="card-header">Síguenos en nuestras redes sociales</div>

      <div className="card-body">
        <a className="navbar-brand" href="https://www.instagram.com/josea17m/">
          <div className="iconos-del-footer">
            <img src="./images/instagram.png" alt="instagram" />
            <p>josea17m</p>
          </div>
        </a>

        <a
          className="navbar-brand item-footer"
          href="https://www.instagram.com/josea17m/"
        >
          <div className="iconos-del-footer">
            <img src="./images/facebook.png" alt="facebook" />
            <p>J Alejandro Montero</p>
          </div>
        </a>

        <a className="navbar-brand" href="https://www.instagram.com/josea17m/">
          <div className="iconos-del-footer">
            <img src="./images/whatsapp.png" alt="whatsapp" />
            <p>Whatsapp</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Footer;
