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
    /* padding: 0 20px; */
    /* padding-left: 1rem; */
    
    /* padding: 1rem 0; */
    display: flex;
    justify-content: space-between;
    background-color: greenyellow;
    align-items: center;
    .logo {
        padding: 0 2rem ;
    }

    /* .burger{
        padding: 0 2rem ;
    } */
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
      <div className="logo">
        {/* Nav Bar */}
        {title}
      </div>
      <Burger/>
    </Nav>
  )
}

export default Navbar