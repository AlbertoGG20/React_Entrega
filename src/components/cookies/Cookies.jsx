import "./Cookies.css";
import { useState } from 'react';


function Cookies() {
  const [showCookies, setShowCookies] = useState(true);
  if (showCookies)
    document.body.style.overflow = 'hidden';
  else
    document.body.style.overflow = 'auto';

  const hideCookies = () => {
    setShowCookies(!showCookies);
  }
  return (
    <div className={showCookies ? 'cookies-wrapper' : 'cookies-hidden'}>
      <div className="cookies">
        <p>Utilizamos cookies propias y de terceros para conocer los usos de nuestra tienda online y poder mejorarla, adaptar el contenido a tus gustos y personalizar nuestros anuncios, marketing y publicaciones en redes sociales. Puedes aceptarlas todas, rechazarlas o elegir tu configuración pulsando los botones correspondientes. Ten en cuenta que rechazar las cookies puede afectar a tu experiencia de compra. Para más información puedes consultar nuestra <a className="cookies-Url" href="/cookies">Política de cookies</a></p>
        <button className="cookies-btn" onClick={hideCookies}>Rechazar las cookies</button>
        <button className="cookies-btn" onClick={hideCookies}>Aceptar las cookies</button>
      </div>
    </div>

  )


}
export default Cookies;