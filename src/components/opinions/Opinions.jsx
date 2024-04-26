import OpinionCard from "../opinionCard/OpinionCard";
import "./Opinion.css"

function Opinion() {
    return(
        <div className="opinions-wrapper">
            <h2>Reseñas</h2>

            <div className="opinions-wrapper-cards">
                <OpinionCard />
                <OpinionCard />
                <OpinionCard />
                <OpinionCard />
                <OpinionCard />
                <OpinionCard />
                <OpinionCard />
            </div>
        
        </div>
    )
}
export default Opinion;