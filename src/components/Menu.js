import styled from '@emotion/styled'
import React from 'react'

const StyledMenu = styled.ul`
        flex-flow: column nowrap;
        background-color: cadetblue;
        position: fixed;
        transform: 'translateX(0)';
        right: 0;
        height: 100vh;
        width: 50%;
        padding-top: 1.5rem;
        transition: transform 0.3s ease-in-out;

        li {
        color: #fff;
        padding: 1rem 2rem;
    }
    `;

export default function Menu() {
    // const MenuList = styled.div`
    //     dis
    // `
    

    return (
        <StyledMenu>
            <li>Pokemon List</li>
            <li>My Pokemon List</li>
        </StyledMenu>
    )
}
