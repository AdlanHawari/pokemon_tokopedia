// import { useQuery } from '@apollo/react-hooks'
import { useQuery } from '@apollo/client'
import styled from '@emotion/styled'
import React, { useContext, useEffect, useState } from 'react'
import LoadingUI from '../components/LoadingUI'

import PokemonCard from '../components/PokemonCard'
import ScrollToTop from '../components/ScrollToTop'
// import ScrolltoTop from '../components/ScrolltoTop'

import { GET_POKEMONS } from '../graphql/pokemonquery'
import { PokemonContext } from '../PokemonContext'

const ListsContainer = styled.div`
        overflow: hidden;
        padding: 2rem 2rem 1rem;
        display: grid;
        grid-template-columns: auto auto auto;
        grid-gap: 0.5rem;

    `

const ButtonQuery = styled.button`
        display: block;
        width: 100%;
        padding: 1rem 0;
        /* margin: 0 1rem; */
        /* font-family: inherit; */
        font-size: 14px;
        font-weight: 700;
        color: #fff;
        /* background-color: #e5195f; */
        background-color: #3094E7; 
        border: 0;
        border-radius: 35px;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
        cursor: pointer;
        /* transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1); */

        &:hover {
        box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
        /* transform: translate(0, -5px); */
        }
`

const OwnedContainer = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Fira Sans', sans-serif;
    padding: 6rem 2rem 0;

    div{
        
    }
`
const OwnedVal = styled.div`
    font-size: x-large;
    padding-left: 2rem;
`

export default function PokemonLists() {
    const {myPokemon} = useContext(PokemonContext);
    // const [count, setcount] = useState()
    
    

    const [offset, setOffset] = useState(0)
    
    const limit = 60;

    const gqlVariables = {
        limit: limit,
        offset: offset,
      };

    const { loading,error, data} = useQuery(GET_POKEMONS,{
        variables: gqlVariables,
    })
    // useEffect(() => {
    //     setcount(data.pokemons.count)
    //     console.log("count",count)
    // }, [pok])
    // if (loading) return 'Loading...';
    if(loading){
        console.log("loading")
    }
    if (error) return `Error! ${error.message}`;

    var pokemonlist = [];
    var next = true;
    var prev = true;
    var count;
    if(data){
        pokemonlist = data.pokemons.results;
        count = data.pokemons.count;
        // setcount(data.pokemons.count)
        if(data.pokemons.next){
            next = false;
        }
        if(data.pokemons.previous){
            prev = false;
        }
        console.log('Response from server', data);
        console.log('count', count);
        // console.log("pokemonList: ",pokemonlist);
        
    }
    console.log("pokemonList: ",pokemonlist);
    // console.log("random bool:",Math.random()<0.5);

    // const {pathname} = useLocation();
    // console.log("path:",pathname);

    

    

    return (
        <div>
            {loading && 
                <LoadingUI/>
                
                
            }
            <div className="">
                {/* {myPokemon} */}
                {pokemonlist &&
                <OwnedContainer>
                    Pokemon Owned
                    <OwnedVal>
                        {myPokemon.length}
                    </OwnedVal>
                     / 
                    {count}
                    

                </OwnedContainer>
                
                }
                
                <ListsContainer>
                    {/* Pokemon lists */}
                    
                    {/* {data.pokemons.count} */}
            
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
                    
                    <ButtonQuery disabled={prev} 
                    onClick={(e)=>{
                        setOffset(offset-limit);
                        // ScrollToTop();
                        window.scrollTo(0,0)
                        
                        
                    }
                    }>Prev
                    </ButtonQuery>
                    <ButtonQuery disabled={next} 
                        onClick={(e)=>{
                            setOffset(offset+limit);
                            window.scrollTo(0,0)
                            // ScrolltoTop();

                        }}>Next
                    </ButtonQuery>
                    
                </ListsContainer>
                
            </div>
            
        </div>

    )
}
