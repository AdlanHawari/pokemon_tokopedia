import React, { useContext, useEffect, useState } from 'react'
import { GET_DETAILS } from '../graphql/pokemonquery';
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/react'
import Stats from '../components/Stats';
import CatchForm from '../components/CatchForm';
import { PokemonContext } from '../PokemonContext';
import { ImageContext } from '../ImageContext';
import pokeball from '../images/pokeball.png'
import { TYPE_COLOR } from '../components/colors/Colors';
import Catching from '../components/Catching';
import FailCatch from '../components/FailCatch';
import { removeDash } from '../components/RemoveDash';
import LoadingUI from '../components/LoadingUI';


const PokemonImg = styled.img`
    height: 16rem;
    /* background-color: green; */
    width: 16rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    
    `

    const DetailWrapper = styled.div`
        padding: 6rem 1rem 1rem;
        @media (min-width: 768px) {
            padding: 6rem 10rem;
        }
        font-family: 'Fira Sans', sans-serif;
    `

    const TypeWrapper = styled.div`
        display: flex;
        justify-items: center;
        align-items: center;
        p{
            margin-right: 1rem;
        }
        
    `

    const TypeContainer = styled.span`
        /* margin: 1rem; */
        border-radius:0.4rem;
        margin-right: 0.5rem;
        /* padding: 0.15rem 0.75rem; */
        height: 1.5rem;
        text-transform: uppercase;
        font-family: monospace;
        width: 4.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        /* font-weight: bold; */
        font-size: small;
        text-shadow: 2px 2px 5px black;

        
    `
const PokeballImg = styled.img`
    height: 4rem;
    /* background-color: white; */
    padding: .3rem;
    border-radius: 100%;
    border: 0.1rem solid #D7D7D7;
`

const NamePokemon = styled.p`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
    text-transform: capitalize;
    font-size: larger;
    text-align: center;
`

const BaseStatTitle = styled.p`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
    text-transform: capitalize;
    font-size: larger;
    text-align: center;
    
    @media (min-width: 768px) {
            display: none;
            /* display: flex; */
        }

`

const AbilityWrapper = styled.div`
    display: flex;
    /* flex-direction: row; */
    justify-items: center;
    /* flex-wrap: nowrap; */
    align-items: center;
    p{
        margin-right: 1rem;
    }
`
const AbilityContainer = styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
    text-transform: capitalize;
    padding-top: 0.5rem;
/* 
    & .hidden{
        font-size: smaller;
        color: sandybrown;
    } */
    
`

const HiddenAbility = styled.div`
    text-transform: lowercase;
    color: gray;
    margin-left: 0.2rem;
`

const PokeBallContainer = styled.div`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 0;
`

const MovesContainer =styled.div`
    /* background-color: salmon; */
    overflow: hidden;
    padding: 01rem;
    display: grid;
    grid-template-columns: auto auto;
    
    grid-gap: 0.5rem;
`
const MoveItem= styled.div`
    background-color: brown;
    padding: .75rem;
    border-radius: 1rem;
    border: 0.2rem outset gray;
    font-size: smaller;
    color:white;
`

const StatsVal = styled.p`
    font-size: larger;
`

const StatsValWrapper = styled.div`
/* position: static; */
    display: flex;
    /* flex-shrink: 0; */
    /* flex-direction: row; */
    justify-items: center;
    /* flex-wrap: wrap; */
    align-items: center;
    /* background-color: red; */
    p{
        margin-right: 1rem;
        /* background-color: blue; */
    }
`

const StatsGroupWrapper =styled.div`
    /* background-color: blueviolet; */
    padding: 3rem 0%;
`

const BaseStatsWrapper = styled.div`
    /* padding: 3rem 0%; */
    width:100%;
    margin-left: auto;
    margin-right: auto;
    /* background-color: gray; */
    
    @media (min-width: 768px) {
        padding: 3rem 0%;
        
        width: 70%;
        }
`

const StatsBaseStatWrapper = styled.div`
        display: block;
        /* background-color: red; */
        @media (min-width: 768px) {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 10rem;
        }
`

export default function PokemonDetail() {
    const {name} = useParams();
    const {myPokemon} = useContext(PokemonContext);
    const {imageUrl} = useContext(ImageContext)
    const [success, setsuccess] = useState(false)
    const [catching, setCatching] = useState(false)
    const [failState, setFailState] = useState(false)

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
            console.log("data:" ,data.pokemon)
            setPokemon(data.pokemon)
            
        }
        
        // set
        
        // console.log("img:",pokemon.sprites.front_default)
    }, [data]);

    useEffect(() => {
       console.log('catching:',catching)
       console.log('succ:',success)
       console.log('fail:',failState)
    }, [catching, success,failState])

    // let catch_rate;
    // let success = ;
    
    // useEffect(() => {

    //     console.log("pokemon:",pokemon)
    //     if(pokemon){
    //         generate_catchRate();
    //         console.log("catch_rate:", catch_rate);
    //     }
    //     console.log("total: ",myPokemon)
    // }, [pokemon])

    // const generate_catchRate = ()=>{
    //     catch_rate = Math.random()<0.5;

    // }

    

    // const catch_success = () => {
    //     if(catch_rate){
    //         console.log("success catch pokemon");
    //         setsuccess(true);
            
    //     }
    //     else{
    //         console.log("failed. TRY AGAIN")
            
    //     }
    //     generate_catchRate();
    //     console.log("ketangkep:",success)
    // }
    // function removeDash(obj){
    //     return (
    //         obj.toLowerCase()
    //         .split('-')
    //         .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    //         .join(' ')
    //     )
    // }

    if(loading){
        console.log("loading")
    }
    if (error) {return `Error! ${error.message}`;}
    // var pokemon = {};
    

    return (
        <div>


          
            
            {pokemon?
            (
                <DetailWrapper className="">
                    
                    <PokemonImg src={imageUrl.artwork} alt="" />
                    
                    <NamePokemon>{pokemon.name}</NamePokemon>
                    <StatsBaseStatWrapper>
                        <StatsGroupWrapper>

                        
                            <TypeWrapper>
                                    <p>Type: </p>
                    
                                
                                    {pokemon.types.map((type,index)=>(
                                        <TypeContainer key={index}
                                        style={{
                                            backgroundColor: 
                                            `${TYPE_COLOR[type.type.name]}`
                                        }}
                                        
                                        >{type.type.name}</TypeContainer>
                                    ))}

                                
                                

                            </TypeWrapper>
                            <AbilityWrapper>
                                <p>Ability: </p>
                                <div>
                                    {pokemon.abilities.map((ability,index)=>(
                                        <div
                                            key={index}>
                                                <AbilityContainer
                                                style={ability.is_hidden?
                                                    {fontSize: '0.8rem'}
                                                    :
                                                    {}}
                                                >
                                                    {removeDash(ability.ability.name)
                                                    
                                                    }
                                                    {ability.is_hidden &&
                                                    <HiddenAbility>
                                                        (hidden ability)
                                                    </HiddenAbility>
                                                    }
                                                </AbilityContainer>

                                        </div>
                                        
                                    ))}
                                </div>

                            </AbilityWrapper>
                            
                            <StatsValWrapper>
                                <p>Base Exp. </p>
                                <StatsVal>
                                    {pokemon.base_experience}
                                </StatsVal>
                            </StatsValWrapper>

                            <StatsValWrapper>
                                <p>Height: </p>
                                <StatsVal>
                                    {(pokemon.height)/10} m
                                </StatsVal>
                            </StatsValWrapper>
                            
                            <StatsValWrapper>
                                <p>Weight: </p>
                                <StatsVal>
                                {(pokemon.weight)/10} kg
                                </StatsVal>    
                            </StatsValWrapper>
                        </StatsGroupWrapper>

                        <BaseStatsWrapper>
                            <BaseStatTitle>Base Stats</BaseStatTitle>
                            {/* <p></p> */}
                            <Stats pokemonStats = {pokemon.stats}/>

                        </BaseStatsWrapper>
                    </StatsBaseStatWrapper>
                    <StatsGroupWrapper>
                    <NamePokemon>Moves</NamePokemon>
                    <MovesContainer>
                        {pokemon.moves.map((move,index) =>(
                            <MoveItem key={index}>
                                {/* {index<3 &&
                                <div>{move.move.name}</div>
                                } */}
                                {removeDash(move.move.name) 
                                
                                }
                                
                            </MoveItem>
                        ))}
                    </MovesContainer>
                    </StatsGroupWrapper>


                    <PokeBallContainer>
                        <PokeballImg src={pokeball} alt='' 
                        onClick=
                        {
                            (e) =>{setCatching(true)}
                        }/>
                    </PokeBallContainer>
                    
                </DetailWrapper>
                
            ):
            (
                <LoadingUI/>
                    
                // {/* </LoadingUI> */}
            )
            }

            {catching &&
            
                <Catching setsuccess={setsuccess} setCatching={setCatching} setFailState={setFailState} pokemon={pokemon.name}></Catching>
            }

            {success &&
            // <CatchForm id={pokemon.id} pokemon={pokemon.name} url={pokemon.sprites.front_default}/>
                <CatchForm id={pokemon.id} pokemon={pokemon.name} setsuccess={setsuccess}/>
            }

            {failState &&
            // <CatchForm id={pokemon.id} pokemon={pokemon.name} url={pokemon.sprites.front_default}/>
            <FailCatch pokemon={pokemon.name} setFailState={setFailState}/>
            }

            
        </div>
    )
}
