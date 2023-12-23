
import { PokemonCard } from "./PokemonCard";



export const PokemonGrid = ({ pokemons }) => {
    return (
        <div className="flex flex-wrap gap-10 items-center justify-center">

            {
            pokemons.map( pokemon => (
                <PokemonCard key={ pokemon.id } pokemon={pokemon} />            
            ))
            }
            
        </div>
    )
}