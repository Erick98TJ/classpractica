// Definición de tipos específicos para los datos del Pokémon

// Interface para los tipos de Pokémon
interface PokemonType {
    slot: number;
    type: {
       name: string;
       url: string;
    };
 }
 
 // Interface para las habilidades de Pokémon
 interface PokemonAbility {
    ability: {
       name: string;
       url: string;
    };
    is_hidden: boolean;
    slot: number;
 }
 
 // Interface para las estadísticas del Pokémon
 interface PokemonStat {
    base_stat: number;
    effort: number;
    stat: {
       name: string;
       url: string;
    };
 }
 
 // Interface para los sprites del Pokémon
 interface PokemonSprites {
    front_default: string;
 }
 
 // Interface principal para los datos de un Pokémon
 export interface Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: PokemonType[];
    abilities: PokemonAbility[];
    stats: PokemonStat[];
    sprites: PokemonSprites;
 }
 