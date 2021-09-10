import styled from '@emotion/styled'
import React from 'react'
import gifpokeball from '../images/gifpokeball.gif'

const LoadingWrapper= styled.div`
    position: fixed;
    height: 100vh;
    width: 100%;
    background-color: #6A0F17;
`

const LoadingContainer = styled.div`
        position: absolute;
        background-color: white;
        border-radius: 2rem;
        /* justify-content: center; */
        
        display: block;
        /* height: 12rem; */
        @media (min-width: 768px) {
            width: 50%;
        }
        width: 90%;
        height: max-content;
        padding: 1rem 0;
        top: 50%;
        /* transform: translate(); */
        left: 50%;
        transform: translate(-50%, -50%);
`

const GifPokeballimg = styled.img`
    height: 4rem;
    display: block;
    @media (min-width: 768px) {
        margin-left: auto;
        margin-right: auto;

    }
    /* text-align:center; */
    /* margin-left: auto;
    margin-right: auto; */
    /* width: 4rem; */
`

const TextContainer = styled.p`
    text-align: center;
    padding: 0.6rem 0;
    font-size: large;
    color: saddlebrown;
    font-family: 'Fira Sans', sans-serif;
    font-weight: bold;
`

export default function LoadingUI() {
    return (
        <LoadingWrapper>
            <LoadingContainer>
                <GifPokeballimg src={gifpokeball} alt=''/>
                
                <TextContainer>
                Loading...
                </TextContainer>
                
            </LoadingContainer>
        </LoadingWrapper>
    )
}
