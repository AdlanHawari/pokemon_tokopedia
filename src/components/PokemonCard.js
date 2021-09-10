import styled from '@emotion/styled'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ImageContext } from '../ImageContext'
import { removeDash } from './RemoveDash'

export default function PokemonCard({pokemon}) {

    const {imageUrl, setimageUrl} = useContext(ImageContext)

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
        font-family: 'Fira Sans', sans-serif;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
        border-radius: 0.5rem;
        /* background-color: green; */
        border: 1px solid #ddd;
        text-align: center;
        text-transform: capitalize;

        p{
            color: #323B44;
        }

    `;
    function updateImageContext(){
        setimageUrl(
            {
                dreamworld : pokemon.dreamworld,
                artwork : pokemon.artwork
                // art
            }
        )
    }

    return (
        <CardWrapper>
            {/* <Link to={"/blog/" + post.slug.current} key={post.slug.current}>
                <div className="hover:text-banoo hover:border-banoo flex items-center border-b-2 border-black py-2 text-banooGray hover:text-banoo">
                <button className="px-2 font-bold  font-spartan text-xs">{t("blog.read")}</button>
                </div>
                
                    
            </Link> */}

            <Link to={"/details/" + pokemon.name} key={pokemon.name} style={{textDecoration:'none'}} 
                onClick={updateImageContext}>  
            
            {/* <img src={pokemon.image} alt="" /> */}
            {/* <img src={pokemon.dreamworld} alt="" /> */}
            <p>{pokemon.id}</p>
            <PokemonImg src={pokemon.dreamworld} alt="" />
                {/* <img src={pokemon.artwork} alt="" /> */}
            <p>{removeDash(pokemon.name)}</p>
            </Link>
            
            
        </CardWrapper>
    )
}
