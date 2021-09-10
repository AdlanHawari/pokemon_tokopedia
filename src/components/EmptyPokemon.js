import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'react-router-dom'



const EmptyWrapper= styled.div`
    position: fixed;
    height: 100vh;
    width: 100%;
    background-color: #6A0F17;
`

const EmptyContainer = styled.div`
        position: absolute;
        background-color: white;
        border-radius: 2rem;
        /* justify-content: center; */
        
        display: block;
        /* height: 12rem; */
        width: 90%;
        @media (min-width: 768px) {
            width: 50%;
        }
        height: max-content;
        padding: 1rem 0;
        top: 50%;
        /* transform: translate(); */
        left: 50%;
        transform: translate(-50%, -50%);
`

// const GifPokeballimg = styled.img`
//     height: 4rem;
//     display: block;
//     /* text-align:center; */
//     /* margin-left: auto;
//     margin-right: auto; */
//     /* width: 4rem; */
// `

const TextContainer = styled.p`
    text-align: center;
    padding: 0.6rem 0;
    font-size: large;
    color: saddlebrown;
    font-family: 'Fira Sans', sans-serif;
    font-weight: bold;
`

const ButtonLink = styled(Link)`
    display: flex;
    width: 80%;
    
    padding: 1rem 0;
    margin: 1rem auto;
    font-family: inherit;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    justify-content: center;
    text-decoration: none;
    /* background-color: #e5195f; */
    /* margin:0 auto; */
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

export default function EmptyPokemon() {
    return (
        <EmptyWrapper>
            <EmptyContainer>
                {/* <GifPokeballimg src={gifpokeball} alt=''/> */}
                
                <TextContainer>
                You don't have any pokemon yet
                </TextContainer>
                <ButtonLink exact to="/">Go to Pokemon List</ButtonLink>
                
            </EmptyContainer>
        </EmptyWrapper>
    )
}
