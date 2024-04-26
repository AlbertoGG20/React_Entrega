import db from "./firebase.config";
import { ref, get } from "firebase/database"


const dbRef = ref(db, "/opinions");

const getOpinions = () => {
  return get(dbRef);
}

export default {
  getOpinions
}