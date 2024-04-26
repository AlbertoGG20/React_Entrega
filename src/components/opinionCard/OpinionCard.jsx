import { useState } from "react";
import "./OpinionCard.css"
import { FaStar } from "react-icons/fa";


function OpinionCard() {
  const random = Math.floor(Math.random() * 4) + 1;
  const [rating, setRating] = useState(null);
  const [rateColor, setColor] = useState(null);

  return (

    <>
      <div className="opinion-card-wrapper">
        <div className="opinion-card-head">
          <div className={`opinion-user-img user-img-${random}`}>

          </div>
          <div className="opinion-card-head-info">
            <h3>Name</h3>

            {[...Array(5)].map((star, index) => {
              const currentRate = index + 1;
              return (
                <>
                  <label >
                    <input type="radio" name="rate"
                      value={currentRate}
                      onClick={() => setRating(currentRate)}
                    />
                    <FaStar color={currentRate <= (rateColor || rating) ? "gold" : "grey"} />
                    {/*                     <svg className="opinion-card-star" viewBox="0 0 51 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.5979 1.8541C24.1966 0.0114802 26.8034 0.0114814 27.4021 1.8541L31.8986 15.693C32.1664 16.5171 32.9343 17.075 33.8008 17.075H48.3519C50.2893 17.075 51.0949 19.5542 49.5274 20.693L37.7553 29.2459C37.0544 29.7552 36.7611 30.658 37.0288 31.482L41.5253 45.3209C42.124 47.1635 40.0151 48.6958 38.4477 47.557L26.6756 39.0041C25.9746 38.4948 25.0254 38.4948 24.3244 39.0041L12.5523 47.557C10.9849 48.6958 8.87596 47.1635 9.47466 45.3209L13.9712 31.482C14.2389 30.658 13.9456 29.7552 13.2447 29.2459L1.47257 20.693C-0.0948542 19.5542 0.710697 17.075 2.64814 17.075H17.1992C18.0657 17.075 18.8336 16.5171 19.1014 15.693L23.5979 1.8541Z" fill="CurrentColor" color={currentRate <= (rateColor || rating) ? "gold" : "grey"} />
                    </svg> */}
                  </label>

                </>
              )
            })}





          </div>
        </div>
        <div className="opinion-card-body">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dignissimos dolor sapiente debitis quam necessitatibus corrupti iste aspernatur natus obcaecati.</p>
        </div>
      </div>

    </>
  )
}
export default OpinionCard;