import styled from '@emotion/styled';
import React, { useContext, useEffect, useState } from 'react'
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from 'recharts'
import CatchForm from '../components/CatchForm';
import PokemonCard from '../components/PokemonCard';
import { PokemonContext } from '../PokemonContext';
import MyPokemonCard from '../components/MyPokemonCard';
import EmptyPokemon from '../components/EmptyPokemon';

const ListsContainer = styled.div`
    overflow: hidden;
    padding: 6rem 2rem 1rem;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 0.5rem;
  `

export default function MyPokemonList() {
  const {myPokemon, dispatch} = useContext(PokemonContext);
  const [delState, setDelState] = useState(false)

  
  useEffect(() => {
    // const localData = localStorage.getItem('myPokemon');
    // if(localData){
    //   localData = JSON.parse(localData)
    // }
    // const myPokemonLists = myPokemon.slice(0).reverse()
    console.log(myPokemon);
    // console.log("reverse:",myPokemonLists);
  }, [])
  // useEffect(() => {
  //   console.log("statedell: ",selectedDel)
    
  // }, [selectedDel])

  return (
      <div>
        {myPokemon.length===0 ? 
        <EmptyPokemon/>
        
        :
        <ListsContainer>
            {myPokemon.slice(0).reverse().map((pokemon,index)=>
            <MyPokemonCard
              key={index}
              pokemon={pokemon}
              index = {index}
              // setselectedDel={selectedDel}
              />
              )} 
        </ListsContainer>
        
        
        }
        
          {/* {myPokemon && */}
            {/* myPokemon.slice(0).reverse().map((pokemon,index)=>
              <MyPokemonCard
                key={index}
                pokemon={pokemon}
                index = {index}/> */}
          {/* )} */}

      {/* {delState &&
        <DeleteModal setDelState={setDelState}/>
      }  */}
      
        
       
    
      
      </div>
  )
}
