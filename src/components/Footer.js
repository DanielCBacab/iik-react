import React from 'react';
import logo from '../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

const d = new Date();
const year = d.getFullYear();

const iconList = [
    {icon: faFacebook, link: 'facebook'},
    {icon: faYoutube, link: 'youtube'},
]

export default function Footer(){
    return (
        <div className="overflow-hidden flex justify-center content-center">
            <div className="grid grid-row-span-2">
                <div className="flex-1 overflow-hidden flex justify-center content-center">
                    <div className="w-1/5">
                        <img className="h-20" src={logo}/>
                    </div>
                    <div className="w-1/5">
                        <p className="font-medium text-primary-dark text-xl">Contáctanos</p>
                        <ul>
                            <li className="text-txt">998 277 0954</li>
                            <li className="text-txt">998 277 0954</li>
                            <li className="text-txt">info@luumha.com</li>
                        </ul>
                    </div>
                    <div className="w-1/5">
                        <p className="font-medium text-primary-dark text-xl">Dirección</p>
                        <p className="text-txt">Av Huayacán, SM 336 Mz 12, Local 20-25, Entre esquina con alborada, CP: 77533 Cancún, Quintana Roo, México.</p>
                    </div>
                    <div className="w-1/5">
                        <p className="font-medium text-primary-dark text-xl">Nosotros</p>
                        <p className="text-txt">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
                    </div>
                    <div className="w-1/5">
                        <p className="font-medium text-primary-dark text-xl">Síguenos en redes sociales</p>
                        <p className="text-txt">
                            {iconList.map((iconList) => (
                                <a href={iconList.link} target="_black">
                                    <FontAwesomeIcon  icon={iconList.icon} size="lg" className="m-3 text-secondary"/>
                                </a>
                            ))}
                        </p>
                    </div>
                </div>

                <div className="flex-1 bg-primary overflow-hidden flex justify-between content-center p-2">
                    <p className="text-white">
                    Copyright {year} © Todos los Derechos Reservados | <a href="/politicas.html">Políticas de Privacidad</a>
                    </p>
                </div>
            </div>
        </div>
    );
}