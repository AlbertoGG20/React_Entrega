import { useEffect, useState } from "react";
import CarService from "../../services/firebase/cars.services";
import OpinionService from "../../services/firebase/opinions.services";
import Opinions from "../../components/opinions/Opinions";
import Prueba from "../../components/prueba/Prueba";
import SendOpinon from "../../components/sendOpinion/SendOpinion";


function Prac() {
  return (
    <>
      <p>Opiniones</p>
      <Prueba />
      <SendOpinon />
    </>
  );
}

export default Prac;
