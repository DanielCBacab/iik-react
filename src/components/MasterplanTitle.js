import React from "react";
import "../css/icons.css";

import CasaClub from "../img/casaclub.svg";
import Playground from "../img/playground.svg";
import Comercial from "../img/comercial.svg";
import Caseta from "../img/caseta.svg";

const finIcons = [
  { title: "94 lotes para vivienda", icon: CasaClub },
  { title: "24 lotes comerciales", icon: Comercial },
  { title: "Acceso controlado", icon: Caseta },
  { title: "Área de amenidades", icon: Playground },
];

export default function MasterplanTitle() {
  return (
    <div className="w-full overflow-hidden h-4/5 my-32">
      <div className="flex flex-wrap overflow-hidden">
        <div className="w-full overflow-hidden">
          <p className="text-primary-dark text-center text-4xl font-black">
            Masterplan
          </p>
          <p className="mt-2 text-center text-txt">
            Haz clic sobre el lote de tu interés para mayor información.
          </p>
        </div>
        <div className="w-full overflow-hidden">
          <div className="flex flex-wrap overflow-hidden justify-center">
            {finIcons.map((finIcons) => (
              <div className="w-1/6 overflow-hidden">
                <div className="icons-financy text-center mb-5 p-5">
                  <img src={finIcons.icon} className="mix-blend-multiply p-5" />
                </div>
                <p className="mt-3 text-center text-primary-dark font-medium text-xl">
                  {finIcons.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
