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
        <h1>Galeria de las fotos de esta maravillosa aventura</h1>
        <div className="bento-wrapper">
          {photos.map((photos, index) => (
            <BentoCard key={index} index={index} bentoUrl={`/img/${photos.fileName}`} bentoName={`${photos.title}`} bentoDescription={`${photos.description}`} />
          ))}
        </div>
      </main>
    </>
  )


}
export default BentoGallery