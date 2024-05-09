import db from "./firebase.config";
import { ref, get, push, remove, update } from "firebase/database"


const dbRef = ref(db, "/opinions");

const getOpinions = () => {
  return get(dbRef);
}

const addOpinions = (user, text, img, star) => {
  return push(dbRef, {
    text: text,
    user: user,
    img: img,
    star: star
  })
};

const getOpinionKey = (key) => {
  return get(ref(db, `/opinions/${key}`));
}

const deleteOpinion = (key) => {
  return remove(ref(db, `/opinions/${key}`));
}

const updateOp = (key, name, text, img, star) => {
  const upDb = ref(db, `/opinions/${key}`);
  return update(upDb, {
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
  deleteOpinion,
  updateOp
}