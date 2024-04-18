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
          <h1>Galería de las fotos de esta aventura</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda esse ipsam magni tempora architecto repudiandae iste harum dicta earum iure ab sed ut ratione quo non adipisci animi excepturi a, doloribus provident culpa? Sit quas eaque praesentium reprehenderit rerum?</p>

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