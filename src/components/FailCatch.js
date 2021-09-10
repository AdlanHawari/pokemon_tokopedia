import styled from '@emotion/styled';
import React from 'react'

const FailWrapper = styled.div`
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
        font-family: 'Fira Sans', sans-serif;
        /* background-color: white; */
    `;

    const FailContainer = styled.div`
        position: absolute;
        background-color: white;
        border-radius: 2rem;
        
        display: block;
        /* height: 12rem; */
        width: 90%;
        @media (min-width: 768px) {
            width: 40%;
            padding: 1rem ;
        }
        height: max-content;
        padding:  0;
        top: 50%;
        /* transform: translate(); */
        left: 50%;
        transform: translate(-50%, -50%);
      
    `
    const Cointains = styled.div`
        display: block;
        padding: 2rem;
    `
    const TextContainer = styled.p`
        text-align: center;
        padding: 0.6rem 0;
        font-size: large;
        /* font-family: serif; */
    `

    const Button = styled.button`
        display: block;
        width: 100%;
        padding: 1rem 0;
        /* margin: 0 1rem; */
        /* font-family: inherit; */
        font-size: 14px;
        font-weight: 700;
        color: #fff;
        /* background-color: #e5195f; */
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

export default function FailCatch({pokemon, setFailState}) {

    // function refreshPage(){ 
    //     window.location.reload(); 
    // }
    const clickFail = (e) =>{
        
        // window.location.reload();
        // window.location.assign("/");
        setFailState(false)

        
    }

    return (
        <FailWrapper>
            <FailContainer>
                <Cointains>
                    <TextContainer>Oh no! <strong>{pokemon}</strong> has escaped. Seems like it is stronger than you think</TextContainer>
                    
                    <Button onClick={clickFail}>Back</Button>

                </Cointains>
                
            </FailContainer>
            
            
            
        </FailWrapper>
    )
}
