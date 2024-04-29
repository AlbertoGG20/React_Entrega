import db from "./firebase.config";
import { ref, get } from "firebase/database"


const dbRef = ref(db, "/cars");

const getCars = () => {
  return get(dbRef);
}

export default {
  getCars
}