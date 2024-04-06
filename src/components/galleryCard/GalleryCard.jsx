import './GalleryCard.css';
function GalleryCard({ fileName, altText, title, description }) {
  return (

    <div className="gallery-card-wrapper">
      <img src={fileName} alt={altText} />
      <div className="gallery-card-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
export default GalleryCard;