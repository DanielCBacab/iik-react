import React from "react";
import "../css/icons.css";
import CasaClub from "../img/casaclub.svg";
import Alberca from "../img/alberca.svg";
import Canchas from "../img/canchas.svg";
import Senderos from "../img/senderos.svg";
import Playground from "../img/playground.svg";
import Fogatas from "../img/fogatas.svg";
import Zen from "../img/zen.svg";
import Caseta from "../img/caseta.svg";
import Lectura from "../img/lectura.svg";
import Comercial from "../img/comercial.svg";
import Eco from "../img/eco.svg";

const finIcons = [
  { title: "Casa club", icon: CasaClub },
  { title: "Alberca", icon: Alberca },
  { title: "Canchas", icon: Canchas },
  { title: "Senderos", icon: Senderos },
  { title: "Playground", icon: Playground },
  { title: "Área de fogatas", icon: Fogatas },
  { title: "Zona zen", icon: Zen },
  { title: "Caseta de acceso", icon: Caseta },
  { title: "Zona de lectura", icon: Lectura },
  { title: "Zona comercial", icon: Comercial },
  { title: "Eco/Parque", icon: Eco },
];

export default function Amenidades() {
  return (
    <div className="overflow-hidden flex justify-center content-center">
      <div className="flex flex-wrap overflow-hidden justify-center">
        {finIcons.map((finIcons) => (
          <div className="w-1/6 overflow-hidden justify-center my-5 transition duration-500 ease-in-out">
            <div className="text-center icons-amenities">
              <img src={finIcons.icon} className="p-5 m-5 " />
            </div>
            <p className="text-center text-primary-dark font-medium mt-5">
              {finIcons.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
