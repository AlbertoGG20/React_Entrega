import "./Footer.css"

function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-content-wrapper">
          <div className="footer-section1-wrapper">
            <div >
              <p>En conjunto con</p>
              <img className="logo-footer" src="/img/logos.png" alt="" />
            </div>
            <section className="footer-social-wrapper">
              <p>¡Únete a nosotros!</p>
              <div className="footer-social-icon">
                <a href="https://twitter.com/">
                  <svg className="social-icon" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.46 2C20.69 2.35 19.86 2.58 19 2.69C19.88 2.16 20.56 1.32 20.88 0.31C20.05 0.81 19.13 1.16 18.16 1.36C17.37 0.5 16.26 0 15 0C12.65 0 10.73 1.92 10.73 4.29C10.73 4.63 10.77 4.96 10.84 5.27C7.28004 5.09 4.11004 3.38 2.00004 0.79C1.63004 1.42 1.42004 2.16 1.42004 2.94C1.42004 4.43 2.17004 5.75 3.33004 6.5C2.62004 6.5 1.96004 6.3 1.38004 6V6.03C1.38004 8.11 2.86004 9.85 4.82004 10.24C4.19088 10.4129 3.53008 10.4369 2.89004 10.31C3.16165 11.1625 3.69358 11.9084 4.41106 12.4429C5.12854 12.9775 5.99549 13.2737 6.89004 13.29C5.37371 14.4905 3.49405 15.1394 1.56004 15.13C1.22004 15.13 0.880039 15.11 0.540039 15.07C2.44004 16.29 4.70004 17 7.12004 17C15 17 19.33 10.46 19.33 4.79C19.33 4.6 19.33 4.42 19.32 4.23C20.16 3.63 20.88 2.87 21.46 2Z" fill="currentColor" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/">
                  <svg className="social-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z" fill="currentColor" />
                  </svg>
                </a>
                <a href="https://www.tiktok.com/es/">
                  <svg className="social-icon" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6002 2.82C11.9166 2.03962 11.5399 1.03743 11.5402 0H8.45016V12.4C8.42632 13.071 8.14303 13.7066 7.65992 14.1729C7.17682 14.6393 6.5316 14.8999 5.86016 14.9C4.44016 14.9 3.26016 13.74 3.26016 12.3C3.26016 10.58 4.92016 9.29 6.63016 9.82V6.66C3.18016 6.2 0.160156 8.88 0.160156 12.3C0.160156 15.63 2.92016 18 5.85016 18C8.99016 18 11.5402 15.45 11.5402 12.3V6.01C12.7932 6.90985 14.2975 7.39265 15.8402 7.39V4.3C15.8402 4.3 13.9602 4.39 12.6002 2.82Z" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </section>
          </div>
          <section className="footer-nav-wrapper">
            <nav className="footer-nav-web-pages">
              <p>Ruta del agua</p>
              <ul className="footer-nav">
                <li><a href="/">Inicio</a></li>
                <li><a href="/gallery">Galería</a></li>
                <li><a href="/historia">Historia</a></li>
              </ul>
            </nav>
            <nav className="footer-nav-web-pages">
              <p>Páginas asociadas</p>
              <ul className="footer-nav">
                <li><a target="_blank" href="https://github.com/AlbertoGG20/React_Entrega">Github</a></li>
                <li><a target="_blank" href="https://www.figma.com/proto/tZQuPDlYi8NQtL4jCq5zko/Untitled?page-id=0%3A1&type=design&node-id=136-2&viewport=-1039%2C147%2C0.52&t=776CFfabPegp1Dn5-1&scaling=min-zoom">Figma</a></li>
              </ul>
            </nav>
            <nav className="footer-nav-web-pages">
              <p>Colaboradores</p>
              <ul className="footer-nav">
                <li><a href="https://www3.gobiernodecanarias.org/medusa/edublog/ieselrincon/" target="_blank">IES El Rincón</a></li>
                <li><a href="https://cifpsancristobal.org/" target="_blank">CIFP San Cristóbal</a></li>
              </ul>
            </nav>

          </section>

        </div>

        <div className="footer-credits">
          <p>© 2024 RUTA DEL AGUA Todos los derechos reservados <a href="">Política de Privacidad</a> y <a href="">Cookies</a> </p>
        </div>

      </div>
    </footer>
  )
}
export default Footer;