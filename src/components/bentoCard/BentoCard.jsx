import "./BentoCard.css"

function BentoGallery(props) {
    const aux = props.index;
    return (
        <div className={`bento-gallery-wrapper bento${aux}`}  >
            <div className="bento-gallery-img" style={{ backgroundImage: `url(${props.bentoImg})` }}>
            </div>
            <div className="bento-gallery-info">
                <h2>{props.bentoName}</h2>
                <p>{props.bentoDescription}</p>
            </div>
        </div >
    )
} export default BentoGallery