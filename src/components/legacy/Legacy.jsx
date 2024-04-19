import "./Legacy.css"
function Legacy() {
  return (
    <section className="legacy-content-wrapper">
      <div className="legacy-content-info">
        <span>Telde</span>
        <hr />
        <div className="legacy-content-text">
          <h2>La Historia de Telde</h2>
          <p>En tiempos antiguos, Telde emerge como uno de los principales núcleos en Gran Canaria, con disputas sucesorias y rivalidades con Gáldar. La ciudad aborigen se divide en tres sectores alrededor del Barranco de Telde, con distintos tipos de asentamientos.</p>
          <a href="/historia" className="btn-s btn-active">Explorar</a>
        </div>
      </div>
      <div className="legacy-content-img">
        <a href="/historia" className="btn-s btn-dissable"><span>Explorar</span></a>
      </div>
    </section>
  )
}
export default Legacy;

