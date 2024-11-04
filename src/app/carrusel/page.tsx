"use client";
import { useState } from "react"
import Image from "next/image";


const Carrusel = () => {
    const [itemActual, setItemActual] = useState(0);

    const imagenes = [
        '/images/FaciTechAlto.jpeg',
        '/images/FaciTech.png',
        '/images/atardecer.jpeg',
        '/images/futuremi.jpeg',
    ]

    const imagenesNombres = [
        'FaciTech Alto',
        'FaciTech Logo',
        'Atardecer',
        'Futuremi',
    ]

    const nextImagen = () => {
        setItemActual((prevIndex) => (prevIndex + 1) % imagenes.length)
    }

    const prevImagen = () => {
        setItemActual((prevIndex) => (prevIndex - 1 + imagenes.length) % imagenes.length)

    }
    return (
        <>
            <div className="h-full p-4">
                <div className="flex justify-center font-bold text-[2rem] mt-4">
                    Carrusel de Imagenes
                </div>
                <div className="flex justify-center items-center h-full p-4 mt-4">
                    <div className="relative w-full max-w-lg mx-auto">
                        {/* Imagen */}
                        <div className="overflow-hideen h-[500px]">
                            <div className="relative w-auto h-full mx-auto">
                                <Image
                                    src={imagenes[itemActual]}
                                    alt={imagenesNombres[itemActual]}
                                    className="object-contain"
                                    fill
                                >
                                </Image>
                            </div>
                            <p className="text-center mt-4 text-lg font-semibold">
                                {imagenesNombres[itemActual]}
                            </p>
                        </div>

                        {/* Boton Izquierda */}
                        <button
                            onClick={prevImagen}
                            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-600 text-white px-2 py-1 rounded-full"
                        >
                            <i className="ri-arrow-left-wide-line"></i>
                        </button>
                         {/* Boton DERECHO */}
                         <button
                            onClick={nextImagen}
                            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-600 text-white px-2 py-1 rounded-full"
                        >
                            <i className="ri-arrow-right-wide-line"></i>
                        </button>
                    </div>
                </div>

            </div >
        </>
    )
}


export default Carrusel;