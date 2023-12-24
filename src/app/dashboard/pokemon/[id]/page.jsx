



const getPokemon = async(id) => {


    try {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${ id }`,{
        cache: 'force-cache'// TODO: cambiar esto en un futuro
        // next: {
        //   revalidate: 60 * 60 * 30 * 6
        // }
        }).then( resp => resp.json() );
    
        console.log('Se cargó: ', pokemon.name);
    
        return pokemon;
        
    } catch (error) {
        notFound();
    }

}




export default async function PokemonPage({ params }) {


const pokemon = await getPokemon (params.id);

    return (
        <div>
            <h1>POKEMON {params.id}</h1>
            <div>
                {JSON.stringify(pokemon)}
            </div>
        </div>
    );
}