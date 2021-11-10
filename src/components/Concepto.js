import React from "react";
import image from "../img/render.jpg";

export default function Concepto() {
  return (
    <div
      class="flex flex-wrap overflow-hidden justify-center m-5"
      id="concepto"
    >
      <div class="w-3/4 overflow-hidden rounded-xl concepto">
        <div className="grid grid-cols-2 flex justify-center content-center p-5">
          <div className="flex-1">
            <img
              src={image}
              alt="Render casa Iik"
              className="border-4 border-white rounded-2xl"
            />
          </div>
          <div className="flex-1 m-5 p-5 justify-center self-center">
            <p className="text-yellow-200 font-black text-4xl">
              Encuentra
              <br />
              el lugar ideal.
            </p>
            <p className="text-white mt-3">
              Con IIK encontraras una{" "}
              <strong className="text-yellow-200">
                nueva experiencia de vida,
              </strong>{" "}
              un movimiento que te permite liberarte del estrés y la rutina, la
              tranquilidad que hara sentir como en las nubes y aquello que
              siempre has soñado construir IIK te brinda el espacio y HADA las
              herramientas para lograrlo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
