"use client";
import React, { useEffect, useState } from "react";
import { Pokemon } from "./interface_pokemon";
import { use } from 'react';

type Params = {
    pokemonName: string;
}

export default function PokemonPage({ params }: any) {
    const { pokemonName } = use(params) as Params; // Usamos `use` y especificamos el tipo de `params`

    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    useEffect(() => {
        if (!pokemonName) return; 

        async function fetchPokemon() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            if (response.ok) {
                const data: Pokemon = await response.json();
                setPokemon(data);
            } else {
                console.error("Error fetching Pokémon data");
            }
        }
        fetchPokemon();
    }, [pokemonName]);

    useEffect(() => {
        if (pokemon) {
            alert(`¡Has elegido a ${pokemon.name.toUpperCase()}!`);
        }
    }, [pokemon]); // Mostrar alerta cuando el Pokémon se carga

    if (!pokemon) return <p>Cargando...</p>;

    return (
        <div className="max-w-md mx-auto bg-gray-200 rounded-lg shadow-lg p-6 mt-8">
            <h1 className="text-3xl font-bold text-center mb-4">{pokemon.name.toUpperCase()}</h1>
            <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <div className="mb-4">
                <p className="text-lg font-semibold">Altura: <span className="font-normal">{pokemon.height}</span></p>
                <p className="text-lg font-semibold">Peso: <span className="font-normal">{pokemon.weight}</span></p>
            </div>
            <div className="mb-4">
                <h3 className="text-xl font-semibold">Tipos:</h3>
                <ul className="list-disc pl-5">
                    {pokemon.types.map((typeInfo) => (
                        <li key={typeInfo.slot} className="text-lg">{typeInfo.type.name}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold">Habilidades:</h3>
                <ul className="list-disc pl-5">
                    {pokemon.abilities.map((abilityInfo) => (
                        <li key={abilityInfo.ability.name} className="text-lg">{abilityInfo.ability.name}</li>
                    ))}
                </ul>
            </div>
        </div>

    );
}