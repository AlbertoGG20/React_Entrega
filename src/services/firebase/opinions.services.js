import { ref, get, push, remove, update } from "firebase/database"
import db from "./firebase.config";


const dbRef = ref(db, "/opinions");

const getOpinions = () => {
  return get(dbRef);
}

const addOpinions = (user, text, img, star) => {
  push(dbRef, {
    text: text,
    user: user,
    img: img,
    star: star
  })
}

const getOpinionKey = (key) => {
  return get(ref(db, `/opinions/${key}`));
}

const deleteOpinion = (key) => {
  remove(ref(db, `/opinions/${key}`));
}

const updateOp = (key, name, text, img, star) => {
  remove(ref(db, `/opinions/${key}`));
  push(dbRef, {
    text: text,
    user: name,
    img: img,
    star: star
  })
}

const cambioOp = (key, name, text, img, star) => {
  const upDb = ref(db, `/opinions/${key}`);
  update(upDb, {
    text: text,
    user: name,
    img: img,
    star: star
  })
}


export default {
  getOpinions,
  addOpinions,
  getOpinionKey,
  updateOp,
  deleteOpinion,
  cambioOp
}