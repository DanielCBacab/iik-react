import React from 'react';
import IconProcessed from "../img/payment-processed.gif";
import IconMoney from "../img/money.gif";
import IconPercent from "../img/25-percent.gif";


const finIcons = [
    {title: "Pago de contado.", icon: IconMoney},
    {title: "12 o 24 meses sin intereses.", icon: IconProcessed},
    {title: "30% de enganche", icon: IconPercent},
]

export default function Financiamiento(){
    return(
        <div className="overflow-hidden flex justify-center content-center my-5">
            <div className="w-3/4">
                <div className="grid grid-cols-2">
                    <div className="flex-1">
                        <p className="font-black text-5xl text-primary my-5">
                            Financiamiento <br/>directo.
                        </p>
                        <p className="text-primary-dark font-medium">
                            Contamos con <strong>financiamiento directo,</strong><br/>lo que nos permite ofrecerte las <strong>mejores opciones</strong> para ti.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center content-center">
                        <div className="grid grid-cols-3">
                            {finIcons.map((finIcons) => (
                                <div className="flex-1">
                                    <div className="icons-financy text-center mb-5 p-5">
                                       <img src={finIcons.icon} className="mix-blend-multiply p-5"/>
                                    </div>
                                    <p className="mt-3 text-center text-primary-dark font-medium">
                                        {finIcons.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}