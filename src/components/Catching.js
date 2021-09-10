import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react'
import pokeballgif from '../images/gifpokeball.gif'


const CatchWrapper = styled.div`
        /* position: block; */
        position: fixed;
        /* z-index: 4; */
        /* border: 2px solid black; */
        /* padding: 2rem; */
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        /* background-color: rgba(0, 0, 0, .6); */
        background-color: white;
    `;

const CatchContainer = styled.div`
    position: absolute;
    /* background-color: white; */
    border-radius: 2rem;
    
    display: block;
    /* height: 12rem; */
    width: 100%;
    height: max-content;
    padding:  0;
    top: 50%;
    /* transform: translate(); */
    left: 50%;
    transform: translate(-50%, -50%);
`

const Contains = styled.div`
        display: block;
        /* padding: 2rem; */
    `
    const TextContainer = styled.p`
    text-align: center;
    padding: 0.6rem 0;
    font-size: large;
    color: saddlebrown;
    font-family: 'Fira Sans', sans-serif;
`

const GifPokeballimg = styled.img`
    height: 4rem;
    display: block;
    @media (min-width: 768px) {
        margin-left: auto;
        margin-right: auto; 
        /* width: 4rem; */
        }
    
`

export default function Catching({setsuccess,setCatching,setFailState, pokemon}) {
    // const [countdown, setcountdown] = useState(3)
    let catch_rate;
    const generate_catchRate = ()=>{
        catch_rate = Math.random()<0.5;
        console.log("catch_rate:", catch_rate);

    }

    const catch_success = () => {
        if(catch_rate){
            console.log("success catch pokemon");
            setsuccess(true);
            
        }
        else{
            console.log("failed. TRY AGAIN")
            setFailState(true);
            
        }
        // generate_catchRate();
        // console.log("ketangkep:",success)
    }
    useEffect(() => {

        generate_catchRate();
        
        // console.log("catch_rate:", catch_rate);
    
    setTimeout(() => {
        // setsuccess(true)
        setCatching(false)
        catch_success();
        // setcountdown(countdown -1)
    }, 3000);
    // console.log(pokeballgif)

    }, [])
    return (
        <CatchWrapper>
            <CatchContainer>
                <Contains>
                    <GifPokeballimg src={pokeballgif} alt=""/>

                    
                    <TextContainer>
                    Catching {pokemon}
                    </TextContainer>

                </Contains>

                


            </CatchContainer>
            
            
            
        </CatchWrapper>
    )
}
