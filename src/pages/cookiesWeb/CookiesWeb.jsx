import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./CookiesWeb.css";

function CookiesWeb() {
  return (
    <>
      <Header />
      <div className="cookies-wrapper-content">
        <h1 className="cookies-h1">CookiesWeb</h1>
        <h2>¿Qué es una Cookie?</h2>
        <p>
          Una Cookie es un pequeño fichero de texto que un sitio web, app u otra plataforma almacena en tu
          ordenador, tableta, teléfono inteligente o cualquier otro dispositivo similar, con información sobre tu
          navegación o uso, como una etiqueta que identifica tu dispositivo. Las Cookies son necesarias por ejemplo
          para facilitar la navegación y conocer la manera en que interactúan los usuarios con las plataformas, de
          manera que puedan ser mejoradas. También son muy útiles para poder ofrecer publicidad según las
          preferencias del usuario, así como para otras finalidades que se detallan más adelante. Las Cookies no
          dañan tu ordenador o dispositivo.
        </p>
        <h2>¿Qué tipos de Cookies existen?</h2>
        <p>
          En función del propietario de las Cookies, pueden clasificarse en:
        </p>
        <p>
          a. Cookies propias: Son aquellas que se envían al ordenador o dispositivo del usuario desde un
          equipo o dominio gestionado por el propio editor, y desde el que se ofrece la plataforma o el
          servicio solicitado por el usuario.
        </p>
        <p>
          b. Cookies de tercero: Son aquellas que se envían al ordenador o dispositivo del usuario desde un
          equipo o dominio que no es gestionado por el editor, sino por otra entidad que trata los datos
          obtenidos a través de las cookies.
        </p>
        <p>
          En función de la finalidad de la Cookie, pueden clasificarse en:
        </p>
        <p>
          a. Cookies estrictamente necesarias (técnicas): Son aquellas que permiten al usuario la navegación
          a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o
          servicios que en ellas existan como, por ejemplo, controlar el tráfico, identificar datos o la sesión,
          acceder a secciones o contenidos de acceso restringido, recordar los elementos que integran un
          pedido, realizar el proceso de compra de un pedido, gestionar el pago, controlar el fraude
          vinculador a la seguridad del servicio, utilizar elementos de seguridad durante la navegación,
          realizar la solicitud de inscripción o participación en un evento, almacenar contenidos para la
          difusión de videos o sonido, habilitar contenidos dinámicos (por ejemplo, animación de carga de
          un texto o imagen) o compartir contenidos a través de redes sociales. Las cookies técnicas, al ser
          estrictamente necesarias, se descargan por defecto cuando permitan mostrar la plataforma o
          prestar el servicio solicitado por el usuario.
        </p>
        <p>
          b. Cookies de funcionalidad o personalización: Estas cookies son aquellas que permiten recordar
          información para que el usuario acceda al servicio o plataforma con determinadas características
          que pueden diferenciar su experiencia de la de otros usuarios, como, por ejemplo, el idioma, el
          número de resultados a mostrar cuando el usuario realiza una búsqueda, el aspecto o contenido
          del servicio en función del tipo de navegador usado por el usuario o de la región desde la que
          accede al servicio, etc. El no aceptar estas Cookies puede generar un rendimiento lento de la
          página web o recomendaciones mal adaptadas.
        </p>
        <p>
          c. Cookies de análisis: Son aquellas que permiten cuantificar el número de usuarios, las secciones
          visitadas en la plataforma y cómo interactúan con la misma, para así realizar la medición y análisis
          estadístico de la utilización que hacen los usuarios, con el fin de introducir mejoras en función del
          análisis de los datos de uso que hacen los usuarios de la plataforma oservicio.
        </p>
        <p>
          d. Cookies de publicidad comportamental: Son aquellas que almacenan información del
          comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de
          navegación, lo que permite desarrollar un perfil específico para mostrar publicidad en función del
          mismo. Estas cookies permiten la gestión, de la forma más eficaz posible, de los espacios
          publicitarios que, en su caso, el editor haya incluido directamente o en colaboración con terceros.
        </p>
        <h2>¿Para qué se utilizan las Cookies en nuestraPlataforma?</h2>
        <p>
          Las Cookies son una parte esencial de cómo funciona nuestra Plataforma. El objetivo principal de nuestras
          Cookies es que tu experiencia de navegación sea más cómoda y eficiente. Por ejemplo, son utilizadas
          para recordar tus preferencias (idioma, país, etc.) durante la navegación y en futuras visitas. También
          usamos nuestras Cookies para mejorar nuestros servicios y Plataforma continuamente, así como para
          poder ofrecer publicidad personalizada según tus hábitos denavegación.
        </p>
        <h2>¿Quién utiliza la información almacenada en las Cookies?</h2>
        <p>La información almacenada en las Cookies de nuestra Plataforma es utilizada exclusivamente por nosotros,
          a excepción de aquellas identificadas en la sección 2 como “Cookies de terceros”, que son utilizadas y
          gestionadas por entidades externas para proporcionarnos servicios dirigidos a mejorar nuestros servicios y
          la experiencia del usuario al navegar en nuestra Plataforma. Más información en el panel de configuración
          de Cookies accesible en todo momento en nuestraPlataforma.
        </p>
        <p>
          Para obtenerinformación más detallada sobre el tratamiento de tus datos personales en nuestracolaboración
          con terceros y aquellos sujetos a transferencias internacionales de datos, te recomendamos que leas nuestra
          Política de Privacidad accesible en nuestra Plataforma, y las políticas de privacidad / configuraciones de
          privacidad de estos terceros colaboradores accesibles a través de sus plataformas.
        </p>
      </div >
      <Footer />
    </>
  );
}
export default CookiesWeb;