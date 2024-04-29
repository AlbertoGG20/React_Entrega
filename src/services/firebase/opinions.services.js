import { ref, get, push } from "firebase/database"
import db from "./firebase.config";


const dbRef = ref(db, "/opinions");

const getOpinions = () => {
  return get(dbRef);
}

const addOpinions = (text, user, img, star) => {
  push(dbRef, {
    text: text,
    user: user,
    img: img,
    star: star
  })
}


export default {
  getOpinions,
  addOpinions
}