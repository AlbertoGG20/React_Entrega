import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import BentoCard from "../../components/bentoCard/BentoCard";
import photos from "../../services/photos/photo";
import './BentoGallery.css';



function BentoGallery() {
  return (
    <>
      <Header page="gallery" />
      <main className="bento-main">
        <div className="gallery-info-wrapper">
          <h1>Nuestra aventura</h1>
          <p>Explora nuestra galería de la ruta y déjate cautivar por la belleza de la naturaleza. Desde los puentes hasta sus caminos, descubre la aventura que te espera en nuestra ruta."</p>

        </div>
        <div className="bento-wrapper">
          {photos.map((photos, index) => (
            <BentoCard key={index} index={index} bentoUrl={`/img/${photos.fileName}`} bentoName={`${photos.title}`} bentoDescription={`${photos.description}`} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )


}
export default BentoGallery