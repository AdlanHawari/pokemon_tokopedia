import styled from '@emotion/styled';
import React, { useContext, useEffect, useState } from 'react'
import { ImageContext } from '../ImageContext';
import MyPokemonList from '../pages/MyPokemonList';
import { ACTIONS, PokemonContext } from '../PokemonContext';

const FormWrapper = styled.form`
        overflow: hidden;
        padding: 0 0 32px;
        margin: 48px auto 0;
        width: 300px;
        font-family: Quicksand, arial, sans-serif;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
        border-radius: 5px;
        opacity: 1;
    `;

    const CardFieldset = styled.fieldset`
        position: relative;
        padding: 0;
        margin: 0;
        border: 0;

        & + & {
        margin-top: 24px;
        }

        &:nth-last-of-type(2) {
        margin-top: 32px;
        }

        &:last-of-type {
        text-align: center;
        }
    `;

    const CardInput = styled.input`
        padding: 7px 0;
        width: 100%;
        font-family: inherit;
        font-size: 14px;
        border-top: 0;
        border-right: 0;
        border-bottom: 1px solid #ddd;
        border-left: 0;
        transition: border-bottom-color 0.25s ease-in;

        &:focus {
        border-bottom-color: #e5195f;
        outline: 0;
        }
    `;

    const StyledCatchForm = styled.div`
        position: fixed;
        
        background-color: rgba(0, 0, 0, 1);
        /* opacity: 0.5; */
        /* z-index: 4; */
        height: 100%;
        width: 100%;
    `;

    const CardButton = styled.button`
        display: block;
        width: 100%;
        padding: 12px 0;
        font-family: inherit;
        font-size: 14px;
        font-weight: 700;
        color: #fff;
        background-color: #e5195f;
        border: 0;
        border-radius: 35px;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
        cursor: pointer;
        transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

        &:hover {
        box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
        transform: translate(0, -5px);
        }
    `;

const StyledA = styled.div`
        position: block;
        /* top: 20rem; */
    `;

// export default function CatchForm({id, pokemon, url}) {
export default function CatchForm({id, pokemon}) {
    const {imageUrl} = useContext(ImageContext);
    const {myPokemon, dispatch} = useContext(PokemonContext);
    const [nickname, setnickname] = useState('')
    // const [arrayPokemon, setarrayPokemon] = useState(myPokemon.myPokemonList)
    const [newPokemon, setnewPokemon] = useState({
        id: id,
        nickname:'',
        pokemon: pokemon,
        url: imageUrl.dreamworld
    })

    // var existingNick;
    const [existingNick, setexistingNick] = useState()

    const handleChange = (e) => {
        
        // setnickname( e.target.value);
       setnewPokemon({...newPokemon, nickname:e.target.value});
        
    };
    
    const handleClick = (e) => {
        
        // setarrayPokemon([...arrayPokemon,newPokemon]);
        // setmyPokemon({...myPokemon, myPokemonList : arrayPokemon});
        // setmyPokemon({...myPokemon, count : myPokemon.count+1 })
        // setmyPokemon(prevMyPokemon =>({
        //     [...prevMyPokemon.myPokemonList,]
        // }))
        // setmyPokemon([...myPokemon.myPokemonList, newPokemon])
        // if(existingNick.indexOf(newPokemon.nickname)>-1){
            
        //     console.log("already exist")
        //     console.log(existingNick.indexOf(newPokemon.nickname))
            
        // }else{
        //     console.log("belum ada")
        //     console.log(existingNick.indexOf(newPokemon.nickname))
        //     // dispatch({type: ACTIONS.APPEND, payload: {caughtPokemon: newPokemon}})
        // }
        // console.log("nick:",newPokemon.nickname);
        // console.log("nick:",newPokemon.nickname);
        // console.log("uhuy:",existingNick.filter(eachNick=>eachNick))
        // console.log("ada?",existingNick.indexOf(newPokemon.nickname)>-1);

        console.log("yg udah ada:", existingNick)
        console.log("nick yg dipilih:", newPokemon.nickname)
        console.log(existingNick.indexOf(newPokemon.nickname))
        if(existingNick.indexOf(newPokemon.nickname) > -1){
            // console.log("makan")
            console.log("udah ada")
            
        }
        else{
            // console.log("berak")
            console.log("belum ada")
            dispatch({type: ACTIONS.APPEND, payload: {caughtPokemon: newPokemon}})
            
        }
        // if(existingNick.indexOf(newPokemon.nickname < 0)){
        
        // }else{
        
        // }
        

        
    };
    
    
    
    useEffect(() => {
        // console.log(nickname);
        // console.log("count dari form: ", myPokemon.count)
        console.log(newPokemon);
    }, [newPokemon])

    
    useEffect(() => {
        // console.log(nickname);
        // console.log("count dari form: ", myPokemon.count)
        console.log('context:',myPokemon);
        // console.log(pokemon);
        // 
        setexistingNick( myPokemon.filter(selectedPokemon => selectedPokemon.pokemon === pokemon).map(filteredPokemon=>filteredPokemon.nickname)
        )
        // console.log(myPokemon.filter(selectedPokemon => selectedPokemon.pokemon === pokemon));
        // console.log(newPokemon.nickname);
        // console.log("existing:",existingNick)
    }, [myPokemon])
    

    return (
        <StyledA>
            
            
                {/* // <StyledCatchForm> */}
                {myPokemon.filter(selectedPokemon => selectedPokemon.pokemon === pokemon).map((filteredPokemon,index) => (
                    <div key={index}>{filteredPokemon.nickname}</div>

                ))
                

                }
                <CardFieldset>
                    <CardInput placeholder="Nickname" type="text" required value={newPokemon.nickname} onChange={handleChange}/>
                </CardFieldset>

                <CardFieldset>
                    <CardButton onClick={handleClick} type="button">Save</CardButton>
                </CardFieldset>

                {/* // </StyledCatchForm> */}

                
            
            
          </StyledA>
    )
}
