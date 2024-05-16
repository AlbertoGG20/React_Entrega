import "./Telde.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function Telde() {
  return (
    <>
      <Header />
      <main className="telde-main">
        <div className="telde-titulo-wrapper">
          <h1 className="telde-titulo">La ruta del Agua, Telde y su Historia</h1>
        </div>

        <section className="telde-section1">
          <div className="telde-content-wrapper">
            <div className="telde-texto-wrapper">
              <h3>Telde en la Época Aborigen</h3>
              <p className="telde-texto">
                En tiempos antiguos, Telde emerge como uno de los principales núcleos en Gran Canaria, con disputas sucesorias y rivalidades con Gáldar.
                La ciudad aborigen se divide en tres sectores alrededor del Barranco de Telde, con distintos tipos de asentamientos. Su historia se entrelaza con la llegada de misioneros y las incursiones de Jean de Bethencourt y Gadifer de la Salle. La conquista castellana llega tarde a Telde, resistiéndose hasta finales de 1482.
              </p>
            </div>
            <div className="telde-texto-wrapper">
              <h3>De la Antigüedad al Siglo XXI</h3>
              <p className="telde-texto">
                La ciudad renace oficialmente en 1483, con la llegada del capitán Cristóbal García del Castillo, marcando el comienzo de una historia agrícola prominente.

                Telde se convierte en un centro agrícola de exportación, con cultivos como la caña de azúcar, la cochinilla, el plátano y el tomate. Su ubicación estratégica la conectan con el mundo exterior.
              </p>
            </div>
          </div>
          <div className="telde-img1-wrapper">
            <img className="telde-img1" src="/img/h1.jpg" alt="" />
          </div>
        </section>

        <div className="telde-titulo2-wrapper">
          <h2 className="telde-titulo">La ruta del agua en la actualidad</h2>
        </div>

        <section className="telde-section2">
          <div className="telde-content-wrapper">
            <div className="telde-texto2-wrapper">
              <h3>Acequia y lavadero de la Heredad</h3>
              <p className="telde-texto">
                Datan del siglo XX. Durante todo un siglo han sido encuentro de mujeres que se acercan a este espacio cargadas con sus baldes y barreños para lavar la ropa. Aprovechan para las tertulias y las novelerías mientras secan los
                ropajes al sol. Se ha mantenido activo como punto de lavado hasta la actualidad.
              </p>
            </div>
            <div className="telde-texto2-wrapper">
              <h3>Acueducto de los Ríos</h3>
              <p className="telde-texto">
                Construido según planos diseñados por el teldense Juan de León y Castillo a finales del siglo XIX, constituye una de las piezas emblemáticas de Telde, y forma parte de la importante historia de acueductos que canalizaban y repartían las aguas por toda la vega agrícola.
              </p>
            </div>
          </div>
          <div className="telde-img2-wrapper">
            <img className="telde-img2" src="/img/h2.jpg" alt="" />

          </div>
        </section>

        <section className="telde-section3">
          <div className="telde-content-wrapper">
            <div className="telde-texto-wrapper">
              <h3>Puente de Tara</h3>
              <p className="telde-texto">
                Se concibió a principios del siglo XX como vía de comunicación para
                facilitar el tránsito de la población a la destilería y la azucarera de Telde. Así, se salvaba
                la distancia que separaba el barranco de los Ríos. Está construido con piedra y ladrillo y
                lo conforma un arco central de considerable envergadura y unos escasos 20 metros de longitud.
              </p>
            </div>
          </div>
          <div className="telde-img3-wrapper">
            <img className="telde-img3" src="/img/h3.jpg" alt="" />
            <img className="telde-img4" src="/img/img10.jpg" alt="" />
          </div>
        </section>

        <section className="telde-section4">
          <div className="telde-content-wrapper">
            <div className="telde-texto-wrapper">
              <h3>Campana de agua</h3>
              <p className="telde-texto">
                Las campanas de agua son pozos de ventilación asociados a minas o galerías filtrasen que
                captan el agua subterránea de los barrancos. Su uso se fue extendiendo en la cultura del
                agua en Gran Canaria. En el municipio de Telde constituyen, además, un auténtico
                patrimonio etnográfico tímidamente valorado por las distintas figuras que catalogan los
                bienes patrimoniales. Algunas, incluso, datan del siglo XVI.

                Esta campana fue construida en el siglo XX y permite el acceso a la mina para extraer
                materiales, inspeccionar y limpiar la conducción, con el fin de distribuir el agua por la
                extensa red de acequias y canales con objeto de abastecer de agua para uso agrícola y
                doméstico. La estructura, abandonada y construida con cantos de piedra seca con forma de
                u, ocupa una superficie de 30 m².
              </p>
            </div>
          </div>
          <div className="telde-img5-wrapper">
            <img className="telde-img5" src="/img/img11.jpg" alt="" />
          </div>
        </section>


      </main>
      <Footer />
    </>
  );
} export default Telde; 
