import styled from '@emotion/styled'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ACTIONS, PokemonContext } from '../PokemonContext';

export default function MyPokemonCard({pokemon, index}) {
    const {myPokemon,dispatch} = useContext(PokemonContext);

    const PokemonImg = styled.img`
        height: 4rem;
        width: 4rem;
        
        
    `

    const CardWrapper = styled.div`
        overflow: hidden;
        /* padding: 0.25rem 0 32px; */
        /* margin: 0.25rem; */
        /* width: 300px; */
        /* text-decoration: none; */
        font-family: Quicksand, arial, sans-serif;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
        border-radius: 0.5rem;
        /* background-color: green; */
        border: 1px solid #ddd;
        text-align: center;

    `;

    return (
        <CardWrapper 
        onClick={() => dispatch({type: ACTIONS.REMOVE, payload: {index: index}})}>
            {/* <Link to={"/blog/" + post.slug.current} key={post.slug.current}>
                <div className="hover:text-banoo hover:border-banoo flex items-center border-b-2 border-black py-2 text-banooGray hover:text-banoo">
                <button className="px-2 font-bold  font-spartan text-xs">{t("blog.read")}</button>
                </div>
                
                    
            </Link> */}

            {/* <Link to={"/details/" + pokemon.pokemon} key={pokemon.nickname} style={{textDecoration:'none'}}> */}
            
            {/* <img src={pokemon.image} alt="" /> */}
            {/* <img src={pokemon.dreamworld} alt="" /> */}
            <p>{pokemon.id}</p>
            <PokemonImg src={pokemon.url} alt="" />
                {/* <img src={pokemon.artwork} alt="" /> */}
                <p>{pokemon.nickname}</p>
            {/* </Link> */}
            
            
        </CardWrapper>
    )
}
