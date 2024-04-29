import { useState } from "react";
import "./SendOpinion.css"
import OpinionService from "../../services/firebase/opinions.services"

function SendOpinon() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState("");
  const [star, setStar] = useState("");
  /*   const [videogames, setVideogames] = useState([]); */

  const changeName = (e) => {
    setName(e.target.value)
  }
  const changeTex = (e) => {
    setText(e.target.value)
  }
  const changeImg = (e) => {
    setImg(e.target.value)
  }
  const changeText = (e) => {
    setText(e.target.value)
  }

  const addNewOpinion = (e) => {
    e.preventDefault();
    const changeImg = () => {
      setImg(Random = Math.floor(Math.random() * 4) + 1)
    }

    /*     let auxOpinions = Opinions;
        auxOpinions.push({
          name: e.target.name.value,
          price: e.target.price.value
        }) */

    saveOpinions(e.target.name.value, e.target.text.value, e.target.img.value, e.target.star.value)
    setOpinions([...auxOpinions])
  }

  const saveOpinions = (name, text, img, star) => {
    OpinionService.addOpinions(name, text, img, star).then((response) => {
      console.log("ok, bien")
    })
  }

  return (
    <>
      <form onSubmit={addNewOpinion}>
        <label htmlFor="name">Su nombre: </label>
        <input type="text" id="name" name="name" value={name} onChange={changeName} />
        <label htmlFor="text">Comentario: </label>
        <input type="text" id="text" name="text" value={text} onChange={changeTex} />
        <label htmlFor="star">Puntuacion: </label>
        <input type="range" id="star" name="star" value={text} onChange={changeText} />


        <button type="submit">Add Video Game</button>
      </form>
      {/* 
      {
        Opinions.map((v, index) => (
          <p key={index}>{v.name} {v.price}</p>
        ))

      } */}

    </>
  );
}

export default SendOpinon;
