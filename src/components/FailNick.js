import styled from '@emotion/styled';
import React from 'react'

const FailNickWrapper = styled.div`
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

    const FailNickContainer = styled.div`
        position: absolute;
        background-color: white;
        border-radius: 2rem;
        
        display: block;
        /* height: 12rem; */
        width: 16rem;
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
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const Button = styled.button`
        display: block;
        width: 100%;
        padding: 1rem 0;
        /* margin: 0 1rem; */
        font-family: inherit;
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

export default function FailNick({setfailNick, msg}) {
    return (
        <FailNickWrapper>
            <FailNickContainer>
                <Contains>
                    <TextContainer>{msg}</TextContainer>
                    
                    <Button onClick={(e)=>setfailNick(false)}>Back</Button>

                </Contains>
                
            </FailNickContainer>
            
            
            
        </FailNickWrapper>
    )
}
