import { useEffect, useState } from "react";
import OpinionService from "../../services/firebase/opinions.services";

function Prueba() {
  const [opinion, setOpinion] = useState([]);
  const getOpinion = () => {
    OpinionService.getOpinions().then((items) => {
      let auxOpinion = [];
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
        auxOpinion.push(auxOpinion);
      }) <
        setOpinion(auxOpinion);
    });
  }


  useEffect(() => {
    getOpinion();
  }, [])


  return (
    <>
      {opinion.map((c) => (
        <p key={c.key}>
          {c.img} {c.user} {c.star} {c.text}
        </p>
      ))}
    </>
  );
}

export default Prueba;



import { useState } from "react";
import "./AddVideoGame.css"
import VideogamesService from "../../services/firebase/videogames.service"

function AddVideoGame() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  /*   const [videogames, setVideogames] = useState([]); */

  const changeName = (e) => {
    setName(e.target.value)
  }
  const changePrice = (e) => {
    setPrice(e.target.value)
  }

  const addNewVideoGame = (e) => {
    e.preventDefault();
    /*     let auxVideogames = videogames;
        auxVideogames.push({
          name: e.target.name.value,
          price: e.target.price.value
        }) */

    saveVideogames(e.target.name.value, e.target.price.value)
    setVideogames([...auxVideogames])
  }

  const saveVideogames = (name, price) => {
    VideogamesService.addVideoGames(name, price).then((response) => {
      console.log("ok, bien")
    })
  }

  return (
    <>
      <form onSubmit={addNewVideoGame}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" value={name} onChange={changeName} />
        <label htmlFor="price">Price: </label>
        <input type="number" id="price" name="price" value={price} onChange={changePrice} />

        <button type="submit">Add Video Game</button>
      </form>
      {/* 
      {
        videogames.map((v, index) => (
          <p key={index}>{v.name} {v.price}</p>
        ))

      } */}

    </>
  );
}

export default AddVideoGame;
