import React, { useEffect, useState } from 'react';
import Burger from './Burger';
import styled from '@emotion/styled'
import { useLocation } from 'react-router';

const Nav = styled.nav`
    position: fixed;
    width: 100%;
    /* height: 55px; */
    height: 4rem;
    border-bottom: 2px solid #f1f1f1;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    background-color: #0D2538;
    align-items: center;
    @media (max-width: 768px) {
      
    }
    /* .logo {
        padding: 0 2rem ;
    } */

    /* .burger{
        padding: 0 2rem ;
    } */
`
const StyledTitle = styled.div`
  font-family: 'Fira Sans', sans-serif;
  font-size: larger;
  font-weight: bold;
  color: white;
  text-shadow: 1px 2px black;
  padding: 0 2rem ;
  @media (max-width: 768px) {

  }
`

const Navbar = () => {
    const {pathname} = useLocation();
    const [title, setTitle] = useState('')

    useEffect(() => {
        // window.scrollTo(0,0);
        console.log("pathname:",pathname)
        if(pathname==="/"){
            setTitle('Pokemon List')
        }else if(pathname==="/my_pokemon_list"){
            setTitle('My Pokemon List')
        }else{
            setTitle('Pokemon Detail')
        }
        

        
    }, [pathname]);
  return (
    <Nav>
      <StyledTitle className="logo">
        {/* Nav Bar */}
        {title}
      </StyledTitle>
      <Burger/>
    </Nav>
  )
}

export default Navbar