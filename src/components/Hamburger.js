import React, { useEffect, useState } from 'react'
import './Hamburger.css'
import { NAV_ACTIONS } from './Navbardeprec'

export default function Hamburger({state, dispatch}) {
    // const [toggle, setToggle] = useState(false)
    const [toggle, setToggle] = useState(state)
    // const toggleMenu = ()=>{
    //     setToggle(!toggle)
    //     console.log("toggle:",toggle)
    // }
    function toggleMenu(){
        setToggle(!toggle)
        console.log("toggle:",toggle)
        // dispatch({type: NAV_ACTIONS.CHANGE, payload: toggle})
    }

    useEffect(() => {
        // console.log("toggle di hamburger:",toggle)
         // dispatch({type: NAV_ACTIONS.CHANGE, payload: toggle})
    }, [toggle])
    return (
        <div id="nav-icon2" 
        className={toggle?"open":""} 
        // className={state?"open":""} 
        // onClick={toggleMenu}
        onClick={() =>{
            toggleMenu()
            // dispatch({type: NAV_ACTIONS.CHANGE, payload: toggle})
        }}
        > 
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
