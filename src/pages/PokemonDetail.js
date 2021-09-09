import React, { useContext, useEffect, useState } from 'react'
import { GET_DETAILS } from '../graphql/pokemonquery';
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled'
import Stats from '../components/Stats';
import CatchForm from '../components/CatchForm';
import { PokemonContext } from '../PokemonContext';
import { ImageContext } from '../ImageContext';


const PokemonImg = styled.img`
    height: 20rem;
    /* background-color: green; */
    width: 20rem;
    
    `

    const DetailWrapper = styled.div`
        padding: 6rem 1rem 1rem;
    `

    const TypeWrapper = styled.div`
        display: flex;
        
    `

    const TypeContainer = styled.span`
        /* margin: 1rem; */
        border-radius:1rem;
        /* padding: 0.15rem 0.75rem; */
        height: 1rem;
        text-transform: uppercase;
        font-family: monospace;
        width: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        /* font-weight: bold; */
        font-size: x-small;
        text-shadow: 2px 2px 5px black;
    `

export default function PokemonDetail() {
    const {name} = useParams();
    const {myPokemon} = useContext(PokemonContext);
    const {imageUrl} = useContext(ImageContext)

    const [pokemon, setPokemon] = useState()

    const gqlVariables = {
        "name": name
      }


    const { loading,error, data} = useQuery(GET_DETAILS,{
        variables: gqlVariables,
    })

    useEffect(() => {
        // if(data){
        //     // console.log("data:" ,data.pokemon)
        //     setPokemon(data)
        //     console.log("state:",pokemon)

        // }
        if(data){
            // console.log("data:" ,data.pokemon)
            setPokemon(data.pokemon)
            
        }
        
        // set
        
        // console.log("img:",pokemon.sprites.front_default)
    }, [data]);

    let catch_rate;
    // let success = ;
    const [success, setsuccess] = useState(false)
    useEffect(() => {

        console.log("pokemon:",pokemon)
        if(pokemon){
            // console.log(pokemon.sprites.front_default)
            // console.log(pokemon.stats)
            generate_catchRate();
            console.log("catch_rate:", catch_rate);
            // console.log("random bool:",Math.random()<0.5);
        }
        console.log("total: ",myPokemon)
    }, [pokemon])

    const generate_catchRate = ()=>{
        catch_rate = Math.random()<0.5;

    }
    const catch_pokemon = () => {
        if(catch_rate){
            console.log("success catch pokemon");
            setsuccess(true);
        }
        else{
            console.log("failed. TRY AGAIN")
            
        }
        generate_catchRate();
        console.log("ketangkep:",success)
    }


    if(loading){
        console.log("loading")
    }
    if (error) {return `Error! ${error.message}`;}
    // var pokemon = {};
    
    // function stat_name(obj){
    //     switch (obj) {
    //         case 'attack':
    //             return 'atk'
    //         case 'defense':
    //             return 'spatk'
    //         case 'special-attack':
    //             return 'spatk'
    //         case 'special-defense':
    //             return 'spdef'
    //         case 'speed':
    //             return 'spd'
    //         default:
    //             return obj

    //     }}
        
    // const pokemonStats = pokemon.stats.map(stat =>({
    //     subject: stat.stat.name,
    //     // subject: stat_name(stat.stat.name),
    //     baseStat: stat.base_stat,
    //     effort: stat.effort
    //     }))
    

    const TYPE_COLOR = {
        bug: '#FAB717',
        dark: '#3D2E23',
        dragon: '#6B56C1',
        electric: '#E79303',
        fairy: '#E597E5',
        fighting: '#7B3017',
        fire: '#DA2F08',
        flying: '#5E74D7',
        ghost: '#53539E',
        grass: '#3A9905',
        ground: '#D1B256',
        ice: '#6DD4F4',
        normal: '#ADA594',
        poison: '#79307A',
        psychic: '#DB3063',
        rock: '9F863C',
        steel: '#9797A7',
        water: '#1674D0'
    }
    // const rock = '#9F863C'
    const Haha = styled.div`
        height: 100vh;
    `;

    
    

    return (
        <div>


          
            
            {pokemon?
            (
                <DetailWrapper className="">
                    {/* <PokemonImg src={pokemon.sprites.front_default} alt="" /> */}
                    <PokemonImg src={imageUrl.artwork} alt="" />
                    
                    <p>name: {pokemon.name}</p>
                    <TypeWrapper>
                        
                            {pokemon.types.map((type,index)=>(
                                <TypeContainer key={index}
                                style={{
                                    backgroundColor: 
                                    // '#EAA5EB'
                                    // `#${TYPE_COLOR[type.type.name]}`
                                    `${TYPE_COLOR[type.type.name]}`
                                }}
                                // >{TYPE_COLOR[type.type.name]}</TypeContainer>
                                >{type.type.name}</TypeContainer>
                            ))}

                        
                        

                    </TypeWrapper>
                    <div>
                        {pokemon.abilities.map((ability,index)=>(
                            <div key={index}>
                                {ability.ability.name}
                                {ability.is_hidden && " (hidden ability)"}

                            </div>
                        ))}
                    </div>
                    <p>Base Exp: {pokemon.base_experience}</p>
                    <p>Height: {(pokemon.height)/10} m</p>
                    <p>Weight: {(pokemon.weight)/10} kg</p>
                    {/* <Stats pokemonStats = {pokemon.stats}/> */}

                    <button onClick={(e) =>{catch_pokemon()}}> Catch</button>
                    
                </DetailWrapper>
                
            ):
            (
                <div>
                    Loading. . .
                </div>
            )
            }

          
              {success &&
                // <CatchForm id={pokemon.id} pokemon={pokemon.name} url={pokemon.sprites.front_default}/>
                <CatchForm id={pokemon.id} pokemon={pokemon.name}/>
            }


            {/* <Haha/> */}
            
        </div>
    )
}
