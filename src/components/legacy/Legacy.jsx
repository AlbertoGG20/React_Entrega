import "./Legacy.css"
function Legacy() {
  return (
    <section className="legacy-content-wrapper">
      <div className="legacy-content-info">
        <span>Telde</span>
        <hr />
        <div className="legacy-content-text">
          <h2>La Historia de Telde</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Aliquam magna vestibulum ultrices praesent porttitor. Non duis tortor leo mauris. Facilisi enim ac laoreet in mauris nisl. Gravida arcu molestie augue netus tellus libero consequat massa.</p>
          <button className="legacy-btn-p btn-active">Explorar</button>
        </div>
      </div>
      <div className="legacy-content-img">
        <button className="legacy-btn-p btn-dissable">Explorar</button>
      </div>
    </section>
  )
}
export default Legacy;
