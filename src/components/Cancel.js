import styled from '@emotion/styled';
import React from 'react'


const CancelWrapper = styled.div`
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

    const CancelContainer = styled.div`
        position: absolute;
        background-color: white;
        border-radius: 2rem;
        
        display: block;
        /* height: 10rem; */
        height: 12rem;
        width: 20rem;
        top: 50%;
        /* transform: translate(); */
        left: 50%;
        transform: translate(-50%, -100%);
      
    `
    const Contains = styled.div`
        display: block;
        padding: 1rem;
    `

const SaveButton = styled.button`
display: block;
width: 100%;
padding: 1rem 0;
margin: 0 1rem;
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

const NoButton = styled.button`
display: block;
width: 100%;
padding: 1rem 0;
margin: 0 1rem;
/* font-family: inherit; */
font-size: 14px;
font-weight: 700;
color: #3094E7;
background-color: white;
border: 0.2rem solid #3094E7;
border-radius: 35px;
box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
cursor: pointer;
/* transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1); */

&:hover {
box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
/* transform: translate(0, -5px); */
}
`;

const YesButton = styled.button`
        display: block;
        width: 100%;
        padding: 1rem 0;
        margin: 0 1rem;
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

const CardFieldset = styled.fieldset`
        position: relative;
        padding: 0;
        margin: 0;
        border: 0;

        display: flex;
        align-items: center;

        & + & {
        margin-top: 1.5rem;
        }

        /* &:nth-last-of-type(2) {
         margin-top: 1rem; 
        } */

        /* &:last-of-type {
        text-align: center;
        } */
    `;

const TextContainer = styled.p`
    text-align: center;
    padding: 1rem 0;
    font-size: larger;
    /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
`

export default function Cancel({setsuccess, setcancelState }) {
    return (
        <CancelWrapper>
            <CancelContainer>
                <Contains>
                    <TextContainer>Release and back?</TextContainer>

                    <CardFieldset>
                        <NoButton onClick={(e)=>
                            setcancelState(false)
                            }>No</NoButton>
                        
                        <YesButton onClick={(e)=>
                            setsuccess(false)
                            // setc
                            }>Yes</YesButton>

                    </CardFieldset>

                    
                    

                </Contains>
                
            </CancelContainer>
            
            
            
        </CancelWrapper>
    )
}
