import { useState } from "react";
import "./SendOpinion.css"
import OpinionService from "../../services/firebase/opinions.services"
import { FaStar } from "react-icons/fa";

function AddOpinon() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState(Math.floor(Math.random() * 7));
  const [star, setStar] = useState("");

  const changeName = (e) => {
    setName(e.target.value)
  }
  const changeText = (e) => {
    setText(e.target.value)
  }

  const changeImg = () => {
    setImg(Math.floor(Math.random() * 7)+1)
  }

  const changeStar = (e) => {
    setStar(e.target.value)
  }

  const addNewOpinion = (e) => {
    e.preventDefault();
    changeImg();

    saveOpinions(e.target.name.value, e.target.text.value, img, e.target.star.value)
  }

  const saveOpinions = (name, text, img, star) => {
    OpinionService.addOpinions(name, text, img, star).then((response) => {
      console.log("ok, bien")
    })
  }

  return (
    <>
      <form onSubmit={addNewOpinion}>
        <label htmlFor="name">User: </label>
        <input type="text" id="name" name="name" value={name} onChange={changeName} />
        <label htmlFor="text">text: </label>
        <input type="text" id="text" name="text" value={text} onChange={changeText} />
        <label htmlFor="star">Star: </label>
        <input type="number" id="star" name="star" value={star} onChange={changeStar} />

        <button type="submit">Añadir opinion</button>
      </form>

    </>
  );
}

export default AddOpinon;
