import { useState } from "react";
import "./OpinionCard.css"
import { FaStar } from "react-icons/fa";


function OpinionCard(img, star, text, user) {
  const [rating, setRating] = useState(star);
  const [rateColor, setColor] = useState(null);
  const [number, setNumber] = useState(1);


  const numberImg = () => {
    if (number === null) {
      setNumber(Math.int(Math.random() * 7) + 1);
    } else {
      setNumber(img);
    }
  }

  return (

    <>
      <div className="opinion-card-wrapper">
        <div className="opinion-card-head">
          <div className={`opinion-user-img user-img-${number}`}>
          </div>
          <div className="opinion-card-head-info">
            <h3>{user}</h3>

            {[...Array(5)].map((star, index) => {
              const currentRate = index + 1;
              return (
                <>
                  <label >
                    <input className="opinion-type" type="radio" name="rate"
                      value={currentRate}
                      onClick={() => setRating(currentRate)}
                    />
                    <FaStar color={currentRate <= (rateColor || rating) ? "gold" : "grey"} />
                  </label>

                </>
              )
            })}

          </div>
        </div>
        <div className="opinion-card-body">
          <p>{text}</p>
        </div>
      </div>

    </>
  )
}
export default OpinionCard;