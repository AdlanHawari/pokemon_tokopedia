// import { useQuery } from '@apollo/react-hooks'
import { useQuery } from '@apollo/client'
import styled from '@emotion/styled'
import React, { useState } from 'react'
import LoadingUI from '../components/LoadingUI'

import PokemonCard from '../components/PokemonCard'
// import ScrolltoTop from '../components/ScrolltoTop'

import { GET_POKEMONS } from '../graphql/pokemonquery'

const ListsContainer = styled.div`
        overflow: hidden;
        padding: 6rem 2rem 1rem;
        display: grid;
        grid-template-columns: auto auto auto;
        grid-gap: 0.5rem;

    `

export default function PokemonLists() {
    

    const [offset, setOffset] = useState(0)
    
    const limit = 60;

    const gqlVariables = {
        limit: limit,
        offset: offset,
      };

    const { loading,error, data} = useQuery(GET_POKEMONS,{
        variables: gqlVariables,
    })
    // if (loading) return 'Loading...';
    if(loading){
        console.log("loading")
    }
    if (error) return `Error! ${error.message}`;

    var pokemonlist = [];
    var next = true;
    var prev = true;
    if(data){
        pokemonlist = data.pokemons.results;
        if(data.pokemons.next){
            next = false;
        }
        if(data.pokemons.previous){
            prev = false;
        }
        console.log('Response from server', data);
        // console.log("pokemonList: ",pokemonlist);
        
    }
    console.log("pokemonList: ",pokemonlist);
    console.log("random bool:",Math.random()<0.5);

    // const {pathname} = useLocation();
    // console.log("path:",pathname);

    

    return (
        <div>
            {loading && 
                <LoadingUI/>
                
                
            }
            <div className="">
            
                <ListsContainer>
                    {/* Pokemon lists */}
                    {/* Pokemon Owned {myPokemon.length}/
                    {data.pokemons.count} */}
            
                    {pokemonlist && 
                    pokemonlist.map(pokemon=>
                    // <p
                    //     key={pokemon.id}
                    //     >
                    //     {pokemon.name}
                    // </p>
                    
                    
                        <PokemonCard
                        key={pokemon.id}
                        pokemon={pokemon}/>

                    
                    
                    )}
                    {/* {loading && 
                        <LoadingUI/>
                    } */}
                    
                    <button disabled={prev} 
                    onClick={(e)=>{
                        setOffset(offset-limit);
                        // ScrolltoTop();
                    }
                    // setOffset(offset-limit)
                    }>Prev
                    </button>
                    <button disabled={next} 
                        onClick={(e)=>{
                            setOffset(offset+limit);
                            // ScrolltoTop();

                        }}>Next
                    </button>
                    
                </ListsContainer>
                
            </div>
            
        </div>

    )
}
