"use client";
import { useState } from "react";
import Seleccionar from "@/components/modal";

export default function Home() {
  const [abierto, setAbierto] = useState(false);

  const handleNavigation = (url: string) => {
    window.location.href = url;
  }

  const modalAbierto = () => {
    setAbierto(true);
  }

  const modalCerrado = () => {
    setAbierto(false);
  }

  return (
    <div className="h-full p-4">
      <div className="flex justify-center font-bold text-[2rem] mt-4">
        Uso de Next Js con Tailwind
      </div>

      <div className="flex justify-center font-bold mt-4">
        <div className="flex space-x-6">
          {/* Tarjeta 1 */}
          <div
            onClick={() => handleNavigation('/carrusel')}
            className="w-48 h-48 bg-blue-500 text-white flex justify-center items-center text-xl font-semibold rounded-lg cursor-pointer transition-transform hover:scale-105 hover:bg-blue-600"
          >
            <span>Carrusel 🎢</span>
          </div>

          {/* Tarjeta 2 */}
          <div
            onClick={modalAbierto}
            className="w-48 h-48 bg-green-500 text-white flex justify-center items-center text-xl font-semibold rounded-lg cursor-pointer transition-transform hover:scale-105 hover:bg-green-600"
          >
            <span>Pokemon</span>

          </div>
        </div>
      </div>
      {abierto &&
        <Seleccionar
          closeModal={modalCerrado}
        />
      }
    </div>
  );
}
