import styled from '@emotion/styled'
import React, { useEffect, useReducer, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Hamburger from './Hamburger'
import Menu from './Menu'
import './Hamburger.css'

export const NAV_ACTIONS = {
    CHANGE: 'change',
    // REMOVE: 'remove'
}

function reducer( menuState,action){
    switch (action.type){
        case NAV_ACTIONS.CHANGE:
            return !menuState
        
        default:
            return menuState
    }
}

export default function Navbar() {
    const {pathname} = useLocation();
    const [title, setTitle] = useState('')
    const [toggle, setToggle] = useState(false)
    const [menuState, dispatch] = useReducer(reducer, false)
    
    

    const NavWrapper = styled.nav`
        position:fixed ;
        /* display: flex; */
        width:100%;
        
    `

    const NavTop = styled.div`
        position: relative;
        display: flex;
        padding: 1rem 0;
        
        background-color: yellow;
        border-bottom: 3px solid #73AD21;
    `

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

    // useEffect(() => {
    //     console.log("menustate di navbar:",menuState)
    // }, [menuState])

    

    return (

            <NavWrapper>
                <NavTop>
                    <h1>{title}</h1>
                    {/* <div onClick={toggleMenu}>
                        <Hamburger toggle={toggle} />
                    </div> */}
                    <Hamburger state={menuState} dispatch={dispatch}/>

                    {/* <div id="nav-icon2" 
                    className={toggle?"open":""}
                    onClick={()=> setToggle(!toggle)}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div> */}
                

                </NavTop>
                {/* <Menu/> */}
                
            </NavWrapper>
            
        
    )
}
