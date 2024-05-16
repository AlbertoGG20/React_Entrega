import "./Cookies.css";
import { useState } from 'react';
import { useCookies } from 'react-cookie';

function Cookies() {
  const [cookies, setCookies] = useCookies(["cookieConsent"]);

  const cookiesAccepted = () => {
    setCookies("cookieConsent", true, { path: "/" });
  };

  const cookiesDenied = () => {
    setCookies("cookieConsent", false, { path: "/" });
  };



  return (
    <div className="cookies-wrapper" >
      <div className="cookies">
        <p>Utilizamos cookies propias y de terceros para conocer los usos de nuestra tienda online y poder mejorarla, adaptar el contenido a tus gustos y personalizar nuestros anuncios, marketing y publicaciones en redes sociales. Puedes aceptarlas todas, rechazarlas o elegir tu configuración pulsando los botones correspondientes. Ten en cuenta que rechazar las cookies puede afectar a tu experiencia de compra. Para más información puedes consultar nuestra <a className="cookies-Url" href="/cookies">Política de cookies</a></p>
        <div className="cookies-buttons">
          <button className="cookies-btn" onClick={cookiesDenied}>Rechazar las cookies</button>
          <button className="cookies-btn" onClick={cookiesAccepted}>Aceptar las cookies</button>
        </div>
      </div>
    </div>

  )


}
export default Cookies;