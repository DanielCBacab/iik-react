import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

export default function BrochureCard(){
    return(
        <div className="overflow-hidden flex justify-center content-center my-5">
            <div className="w-1/3 bg-secondary m-5 p-5 rounded-2xl shadow-lg">
                <div className="grid grid-cols-1">
                    <div className="flex-1 text-center">
                        <p className="text-3xl font-black text-secondary-dark">
                            Visita nuestro brochure online.
                        </p>
                        <button className="mt-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-dark hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300">
                            Ver brochure<FontAwesomeIcon className="ml-3" icon={faArrowRight} size="lg"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}