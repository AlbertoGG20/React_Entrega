import { useEffect, useState } from "react";
import OpinionService from "../../services/firebase/opinions.services"
import { FaStar } from "react-icons/fa";
import opinionsServices from "../../services/firebase/opinions.services";
import "./OpinionsCrud.css"

function PruebaDef() {
  const [keyCard, setKeyCard] = useState("hola");
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState(Math.floor(Math.random() * 7) + 1);
  const [star, setStar] = useState("");
  const [opinion, setOpinion] = useState([]);
  const [filter, setFilter] = useState(0);

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
          user: data.user,
        };
        auxOpinions.push(auxOpinion);
      });
      if (filter > 0) {
        auxOpinions = auxOpinions.filter((op) => parseInt(op.star) === filter);
      }
      setOpinion(auxOpinions);
    });
  };

  useEffect(() => {
    getOpinion();
  }, [filter]);

  const getOpinionKey = (key) => {
    OpinionService.getOpinionKey(key).then((opinion) => {
      setName(opinion.val().user);
      setText(opinion.val().text);
      setImg(opinion.val().img);
      setStar(opinion.val().star);
    });
  };

  const addUpdateOpinion = (e) => {
    opinionsServices.updateOp(keyCard, name, text, img, star).then(() => {
      e.preventDefault();
      setName("");
      setText("");
      setStar("");
      alert("cambiado");
      getOpinion();
    });
  };

  const deleteOpinion = (key) => {
    opinionsServices.deleteOpinion(key).then(() => {
      getOpinion();
    });
  };

  const addNewOpinion = (e) => {
    e.preventDefault();
    changeImg();
    saveOpinions(e.target.name.value, e.target.text.value, img, e.target.star.value);
  };

  const saveOpinions = (name, text, img, star) => {
    OpinionService.addOpinions(name, text, img, star).then(() => {
      setName("");
      setText("");
      setStar("");
      getOpinion();
    });
  };

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeText = (e) => {
    setText(e.target.value);
  };
  const changeImg = () => {
    setImg(Math.floor(Math.random() * 7) + 1);
  };
  const changeStar = (e) => {
    setStar(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(Number(e.target.value));
  };

  const closeModal = () => {
    document.body.style.overflow = 'auto';
    setIsOpen(false);
    setName("");
    setText("");
    setStar("");
  };

  const openModal = (key) => {
    document.body.style.overflow = 'hidden';
    setIsOpen(true);
    setKeyCard(key);
    getOpinionKey(key);
  };

  return (
    <div className="opinions-crud-wrapper">
      <div className="opinions-head">
        <h1>Añadir opinión</h1>
        <select className="opinion-select" name="rank" id="rank" onChange={handleFilterChange}>
          <option value="0">Selecciona</option>
          <option value="1">1 Estrella</option>
          <option value="2">2 Estrellas</option>
          <option value="3">3 Estrellas</option>
          <option value="4">4 Estrellas</option>
          <option value="5">5 Estrellas</option>
        </select>
      </div>
      <div className="opinion-form-wrapper">
        <form className={isOpen ? "opinion-form form-hidden" : "opinion-form"} onSubmit={addNewOpinion}>
          <div className="name-input-wrapper">
            <label htmlFor="name">Usuario</label>
            <input className="opinion-input" type="text" id="name" name="name" value={name} maxLength={20} onChange={changeName} />
          </div>
          <div className="text-input-wrapper">
            <label htmlFor="text">Opinion </label>
            <input className="opinion-input-text" type="text" id="text" name="text" value={text} maxLength={100} onChange={changeText} />
          </div>
          <div className="star-input-wrapper">
            <label htmlFor="star">Valoración</label>
            <input className="opinion-input-star" type="number" id="star" name="star" min={0} max={5} value={star} onChange={changeStar} />
          </div>
          <button className="btn-option option-add" type="submit">Añadir</button>
        </form>
      </div>

      <h2>Opiniones de la gente</h2>

      <div className="opinion-show-container">
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
                    <label key={index}>
                      <input
                        className="opinion-type"
                        type="radio"
                        name="rate"
                        value={currentRate}
                        onClick={() => setStar(currentRate)}
                      />
                      <FaStar color={isGold ? "gold" : "grey"} />
                    </label>
                  );
                })}
              </div>
            </div>
            <div className="opinion-card-body">
              <p>{c.text}</p>
            </div>
            <div className="opinion-crud-option-wrapper">
              <button onClick={() => openModal(c.key)} className="btn-option option-edit">Editar</button>
              <button onClick={() => deleteOpinion(c.key)} className="btn-option option-delete">Eliminar</button>
            </div>
          </div>
        ))}
      </div>

      <div className={isOpen ? 'modal-wrapper visible-modal' : 'modal-wrapper'}>
        <div className={isOpen ? 'modal-content show-modal' : 'modal-content'}>
          <div className="modal-header">
            <h2 className="modal-tittle">Editar Opinión</h2>
            <button onClick={closeModal} className="modal-close">×</button>
          </div>
          <div className="modal-body">
            <form className="modal-opinion-form" onSubmit={addUpdateOpinion}>
              <div className="modal-input-wrapper">
                <label htmlFor="name">Usuario </label>
                <input className="modal-input modal-name-input" value={name} type="text" id="name" name="name" maxLength={20} onChange={changeName} />
              </div>
              <div className="modal-input-wrapper">
                <label htmlFor="text">Opinion</label>
                <textarea className="modal-input modal-text-input" name="text" id="text" cols="60" rows="50" maxLength={100} onChange={changeText} value={text}></textarea>
              </div>
              <div className="modal-input-wrapper">
                <label htmlFor="star">Valoración  </label>
                <input className="modal-input modal-star-input" value={star} type="number" id="star" name="star" min={0} max={5} onChange={changeStar} />
              </div>
              <button className="btn-option option-add" type="submit">Cambiar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PruebaDef;