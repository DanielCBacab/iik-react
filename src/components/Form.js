import React from "react";

export default function Form(){
    return(
       <form className="bg-white rounded-xl drop-shadow-xl p-10 mt-5" method="post">
            <p className="text-4xl font-bold text-center text-yellow-900">Contáctanos</p>
            <p className="p-3 text-center">
               Llena el siguiente formulario y en breve uno de nuestros asesores se comunicará con usted.
            </p>
            <div className="grid grid-cols-1 my-3">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nombre completo
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="focus:ring-blue-300 focus:border-blue-300 flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300"
                    placeholder="Ej. Juan Perez"
                />
                </div>
            </div>

            <div className="grid grid-cols-1 my-3">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo electrónico
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="focus:ring-blue-300 focus:border-blue-300 flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300"
                    placeholder="Ej. juan@correo.com"
                />
                </div>
            </div>

            <div className="grid grid-cols-1 my-3">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Teléfono a 10 dígitos
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="focus:ring-blue-300 focus:border-blue-300 flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300"
                    placeholder="Ej. 5522114477"
                />
                </div>
            </div>

            <div className="grid grid-cols-1 my-3">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    Ciudad
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                <input
                    type="text"
                    name="city"
                    id="city"
                    className="focus:ring-blue-300 focus:border-blue-300 flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300"
                    placeholder="Ej. Ciudad de México"
                />
                </div>
            </div>

            <div className="grid grid-cols-1 my-3">
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                   Mensaje
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                <textarea
                    id="notes"
                    name="notes"
                    maxrows={3}
                    className="shadow-sm focus:ring-blue-300 focus:border-blue-300 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder="Escriba su mensaje"
                    defaultValue={''}
                />
                </div>
            </div>

           <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 w-full">
                    Enviar formulario
            </button>
       </form> 
    );
}