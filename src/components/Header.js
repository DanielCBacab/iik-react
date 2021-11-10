import React from "react";
import Form from "./Form"
import Nav from "./Nav"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import iikVideo  from '../video/iikvideo.mp4';


export default function Header(){
    return(
        <div className="rounded-bl-3xl rounded-br-3xl h-screen flex justify-center relative">
            <Nav/>
            <video id="iikvideo" autoPlay loop muted>
                <source src={iikVideo} type="video/mp4"/>
            </video>
            <div className="flex space-x-5 items-center">
                <div className="flex-auto text-center">
                    <p className="text-5xl font-black p-3 text-yellow-200">Encuentra el lugar ideal</p>
                    <p className="text-2xl font-medium p-3 text-white">
                        Lotes de inversión cerca de Puerto Morelos</p>
                    <button type="submit" className="m-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white hover:bg-txt focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 items-center">
                        Ver video principal <FontAwesomeIcon icon={faPlay}className="ml-3"/>
                    </button>
                    <button type="submit" className="m-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 items-center">
                        Ir al masterplan <FontAwesomeIcon icon={faArrowRight}className="ml-3"/>
                    </button>
                </div>
                <div className="flex-1">
                    <Form/>
                </div>
            </div>
        </div>

    );
}