import "./BentoCard.css"

function BentoGallery(props) {
  const aux = props.index;
  return (
    <div className={`bento-gallery-wrapper bento${aux}`}  >
      <div className="bento-gallery-img" style={{ backgroundImage: `url(${props.bentoUrl})` }}>
      </div>
    </div >
  )
} export default BentoGallery