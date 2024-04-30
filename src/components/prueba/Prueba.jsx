import { useEffect, useState } from "react";
import OpinionService from "../../services/firebase/opinions.services";
import { FaStar } from "react-icons/fa";


function Opinion(page) {
  const [opinion, setOpinion] = useState([]);
  const [rateColor, setColor] = useState(null);
  const [number, setNumber] = useState(1);
  const [rating, setRating] = useState();


  const getOpinion = () => {
    OpinionService.getOpinions().then((items) => {
      let auxOpinions = [];
      items.forEach((item) => {
        const key = item.key;
        const data = item.val();

        const auxOpinion = {
          key: key,
          img: data.img,
          star: data.star,
          text: data.text,
          user: data.user
        }
        auxOpinions.push(auxOpinion);
      }) <
        setOpinion(auxOpinions);
    });
  }


  useEffect(() => {
    getOpinion();
  }, [])


  return (
    <>
      {opinion.map((c) => (
        <div className="opinion-card-wrapper" key={c.key}>
          <div className="opinion-card-head">
            <div className={`opinion-user-img user-img-${c.img}`}></div>
            <div className="opinion-card-head-info">
              <h3>{c.user}</h3>

              {[...Array(5)].map((star, index) => {
                const currentRate = index + 1;
                const isGold = currentRate <= c.star;
                return (
                  <>
                    <label >
                      <input className="opinion-type" type="radio" name="rate"
                        value={currentRate}
                        onClick={() => setRating(currentRate)}
                      />
                      <FaStar color={isGold ? "gold" : "grey"} />
                    </label>
                  </>
                )
              })}

            </div>
          </div>
          <div className="opinion-card-body">
            <p>{c.text}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Opinion;
