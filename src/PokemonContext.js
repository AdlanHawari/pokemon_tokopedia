import React, { createContext, useEffect, useReducer, useState } from 'react'

export const PokemonContext = React.createContext()

export const ACTIONS = {
    APPEND: 'append',
    REMOVE: 'remove'
}

function reducer( myPokemon,action){
    switch (action.type){
        case ACTIONS.APPEND:
            return [...myPokemon, action.payload.caughtPokemon]
        case ACTIONS.REMOVE:
            return myPokemon.slice(0).reverse().filter((pokemon,index) => index != action.payload.index)
            
        default:
            return myPokemon
    }
}

export function MyPokemonProvider({children}) {
    const [myPokemon, dispatch] = useReducer(reducer, [], () =>{
        const localData = localStorage.getItem('myPokemon');
        return localData ? JSON.parse(localData) : []
    });
    useEffect(() => {
        localStorage.setItem('myPokemon', JSON.stringify(myPokemon))
        // localStorage.setItem('myPokemon', JSON.stringify(myPokemon.slice(0).reverse()))
    }, [myPokemon])

    return (
        <PokemonContext.Provider value={{myPokemon, dispatch}}>
            {children}
        </PokemonContext.Provider>
    )
}
