import './Section2.css';
import GalleryCard from '../galleryCard/GalleryCard';
import photos from '../../services/photos/photo';


function Section2() {
  return (
    <section className="section2-wrapper">
      <div className="section2-content-text-wrapper">
        <h2>Fotos</h2>
        <span>Algunas fotos de esta maravillosa aventura</span>
      </div>
      <div className="section2-content-gallery-wrapper">
        {photos.slice(0, 5).map((photos, index) => (
          <GalleryCard key={index} fileName={`/img/${photos.fileName}`} altText={`${photos.altText}`} title={`${photos.title}`} description={`${photos.description}`} />
        ))}
      </div>
      <a href="#" className="section2-content-link">Ver más fotos</a>
    </section>
  )
} export default Section2;
