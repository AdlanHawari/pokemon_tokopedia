import styled from '@emotion/styled';
import React, { useContext, useEffect } from 'react'
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from 'recharts'
import CatchForm from '../components/CatchForm';
import PokemonCard from '../components/PokemonCard';
import { PokemonContext } from '../PokemonContext';
import MyPokemonCard from '../components/MyPokemonCard';

export default function MyPokemonList() {
  const {myPokemon, dispatch} = useContext(PokemonContext);

  const ListsContainer = styled.div`
    overflow: hidden;
    padding: 6rem 2rem 1rem;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 0.5rem;
  `
  useEffect(() => {
    // const localData = localStorage.getItem('myPokemon');
    // if(localData){
    //   localData = JSON.parse(localData)
    // }
    // const myPokemonLists = myPokemon.slice(0).reverse()
    console.log(myPokemon);
    // console.log("reverse:",myPokemonLists);
  }, [])

  return (
      <div>
        <ListsContainer>
          {myPokemon &&
            // myPokemon.slice(0).reverse().map((pokemon,index)=>
            myPokemon.slice(0).reverse().map((pokemon,index)=>
              <MyPokemonCard
                key={index}
                pokemon={pokemon}
                index = {index}/>
          )}
            
            
        </ListsContainer>
       
    
      
      </div>
  )
}
