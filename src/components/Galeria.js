import React from 'react';

const galeria = [
    {id:'1', img:'im1.jpg', alt:'Texto alternativo imagen 1'},
    {id:'2', img:'im2.jpg', alt:'Texto alternativo imagen 2'},
    {id:'3', img:'im3.jpg', alt:'Texto alternativo imagen 3'},
    {id:'4', img:'im4.jpg', alt:'Texto alternativo imagen 4'},
    {id:'5', img:'im5.jpg', alt:'Texto alternativo imagen 5'},
    {id:'6', img:'im6.jpg', alt:'Texto alternativo imagen 6'},
    {id:'7', img:'im7.jpg', alt:'Texto alternativo imagen 7'},
    {id:'8', img:'im8.jpg', alt:'Texto alternativo imagen 8'},
]

export default function Galeria(){
    return (
        <div className="overflow-hidden flex justify-center content-center">
            <div className="flex flex-wrap overflow-hidden justify-center">
                {galeria.map((galeria) => (
                <div className="w-1/4 overflow-hidden justify-center my-5 transition duration-500 ease-in-out">
                    {galeria.img}
                    </div>
                 ))}
            </div>
        </div>
    );
}