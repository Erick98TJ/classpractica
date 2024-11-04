const Seleccionar = ({ closeModal }: any) => {

    const handleNavigation = (pknombre: string) => {
        window.location.href = `/${pknombre}`;
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                <button
                    onClick={closeModal}
                    className="text-gray-500 font-semibold float-right"
                >
                    X
                </button>
                <h2 className="text-2xl font-bold mb-4 text-center">Selecciona una Opcion</h2>
                <p className="mb-2 text-center"> ¡Selecciona una Opcion y averigua qué Pokémon contiene! </p>

                <div className="flex flex-col space-y-4">
                    <div
                        onClick={() => handleNavigation('pikachu')}
                        className="w-full h-20 bg-purple-500 text-white flex justify-center items-center text-lg font-semibold rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:bg-purple-600"
                    >
                        Pokemon 1
                    </div>
                    <div
                        onClick={() => handleNavigation('ditto')}
                        className="w-full h-20 bg-orange-500 text-white flex justify-center items-center text-lg font-semibold rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:bg-orange-600"
                    >
                        Pokemon 2
                    </div>
                    <div
                        onClick={() => handleNavigation('bulbasaur')}
                        className="w-full h-20 bg-red-500 text-white flex justify-center items-center text-lg font-semibold rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:bg-red-600"
                    >
                        Pokemon 3
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Seleccionar;