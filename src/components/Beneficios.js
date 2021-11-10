import React from "react";
import Slider from "infinite-react-carousel";

const sliderBenef = [
    {active:true,img:"img1", title:"Lu'um Park", text:"Al adquirir tu terreno, incluimos un precio especial para tu entrada al nuevo parque Lu'um Park.",},

    {active: false,img:"img2", title:"Puerto Morelos", text:"Al adquirir tu terreno, incluimos un precio especial para tu entrada al nuevo parque Lu'um Park.",},

    {active: false,img:"img3", title:"Playa del Carmen", text:"Al adquirir tu terreno, incluimos un precio especial para tu entrada al nuevo parque Lu'um Park.",},

    {active: false,img:"img4", title:"Ruta de los Cenotes", text:"Al adquirir tu terreno, incluimos un precio especial para tu entrada al nuevo parque Lu'um Park.",},
]

export default function Beneficios(){
    return(
        <div className="overflow-hidden flex justify-center content-center">
            <div className="w-3/4">
            <Slider dots pauseOnHover>
                    {sliderBenef.map((sliderBenef) => (
                       <div>
                            <div className="grid grid-cols-2 gap-5 flex justify-center">
                                <div className="flex-auto">
                                    <img src={sliderBenef.img} className="rounded-2xl shadow-lg"/>
                                </div>

                                <div className="flex-auto w-2/4">
                                    <p className="text-3xl font-black text-primary-dark">{sliderBenef.title}</p>
                                    <p className="text-txt">{sliderBenef.text}</p>
                                </div>
                            </div>
                       </div>
                    ))}
                 </Slider>
            </div>
        </div>
    );
}