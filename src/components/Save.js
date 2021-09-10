import styled from '@emotion/styled';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const SaveNickWrapper = styled.div`
        /* position: block; */
        position: fixed;
        /* z-index: 4; */
        /* border: 2px solid black; */
        /* padding: 2rem; */
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .6);
        /* background-color: white; */
    `;

    const SaveNickContainer = styled.div`
        position: absolute;
        background-color: white;
        border-radius: 2rem;
        
        display: block;
        /* height: 12rem; */
        width: 90%;
        @media (min-width: 768px) {
            width: 40%;
            padding: 2rem 1rem;
        }
        height: max-content;
        padding: 1rem 0;
        top: 50%;
        /* transform: translate(); */
        left: 50%;
        transform: translate(-50%, -50%);
      
    `
    const Contains = styled.div`
        display: block;
        padding: 0.3rem 2rem;
    `

const TextContainer = styled.p`
text-align: center;
padding: 0.6rem 0;
font-size: large;
font-family: 'Fira Sans', sans-serif;
`

const Button = styled.button`
        display: flex;
        width: 100%;
        padding: 1rem 0;
        margin: 1rem 0;
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
    `;



 const ButtonLink = Button.withComponent(Link)

export default function Save({setsavedState, setsuccess, nickname, pokemon}) {
    useEffect(() => {
        console.log("nickname:",nickname)
        console.log("pokemon:",pokemon)
    }, [])
    return (
        <SaveNickWrapper>
            <SaveNickContainer>
                <Contains>
                    <TextContainer>
                        Success giving a name. <strong>{nickname}</strong>  is a good name for a <strong>{pokemon}</strong>
                        
                    </TextContainer>
                    
                    <Button onClick={ (e)=>{
                        setsavedState(false)
                        setsuccess(false)
                    }
                        
                        // window.location.reload()
                        }>Back to detail</Button>
                    <ButtonLink exact='true' to="/">Go to Pokemon List</ButtonLink>
                    
                    <ButtonLink to="/my_pokemon_list">See My Pokemon</ButtonLink>
                </Contains>
                
            </SaveNickContainer>
            
            
            
        </SaveNickWrapper>
    )
}
