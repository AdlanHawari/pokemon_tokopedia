import React, { createContext, useEffect, useReducer, useState } from 'react'

export const ImageContext = React.createContext()

// export const IMAGE_ACTIONS = {
//     CHANGE: 'change',
//     // REMOVE: 'remove'
// }

// function imageReducer( imageUrl,action){
//     switch (action.type){
//         case IMAGE_ACTIONS.CHANGE:
//             return [...myPokemon, action.payload.caughtPokemon]
//         // case IMAGE_ACTIONS.REMOVE:
//         //     return myPokemon.filter((pokemon,index) => index != action.payload.index)
            
//         default:
//             return myPokemon
//     }
// }

export function ImageProvider({children}) {
    const [imageUrl, setimageUrl] = useState( ()=>{
        const localData = localStorage.getItem('imageUrl');
        return localData ? JSON.parse(localData) : {}
    });

    useEffect(() => {
        // localStorage.setItem('myPokemon', JSON.stringify(myPokemon))
        localStorage.setItem('imageUrl', JSON.stringify(imageUrl))
    }, [imageUrl])
    // const [imageUrl, imageDispatch] = useReducer(imageReducer, {}, () =>{
    //     const localData = localStorage.getItem('imageUrl');
    //     return localData ? JSON.parse(localData) : {}
    // });
    // useEffect(() => {
    //     // localStorage.setItem('myPokemon', JSON.stringify(myPokemon))
    //     localStorage.setItem('imageUrl', JSON.stringify(imageUrl))
    // }, [imageUrl])

    return (
        <ImageContext.Provider value={{imageUrl, setimageUrl}}>
            {children}
        </ImageContext.Provider>
    )
}
