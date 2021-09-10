import styled from '@emotion/styled';
import React, { useContext, useEffect, useState } from 'react'
import { ImageContext } from '../ImageContext';
import MyPokemonList from '../pages/MyPokemonList';
import { ACTIONS, PokemonContext } from '../PokemonContext';
import Cancel from './Cancel';
import FailNick from './FailNick';



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

    const CardInput = styled.input`
        padding: 0.75rem 1rem;
        margin: 0 1rem;
        width: 100%;
        /* width: 90%; */
        font-family: inherit;
        /* font-size: 14px; */
        font-size: 1.2rem;
        border-top: 0;
        border-right: 0;
        border-bottom: 1px solid #ddd;
        border-radius: 0.4rem;
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

    const SaveButton = styled.button`
        display: block;
        width: 100%;
        padding: 1rem 0;
        margin: 0 1rem;
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

    const CancelButton = styled.button`
        display: block;
        width: 100%;
        padding: 1rem 0;
        margin: 0 1rem;
        font-family: inherit;
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

const StyledA = styled.div`
        /* position: block; */
        position: fixed;
        /* z-index: 4; */
        border: 2px solid black;
        padding: 1rem 0;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        /* background-color: rgba(0, 0, 0, .6); */
        background-color: yellow;
    `;

const PokemonImg = styled.img`
height: 8rem;
/* background-color: green; */
/* width: 8rem; */
display: block;
margin-left: auto;
margin-right: auto;
`

const PokeName = styled.p`
    text-transform: capitalize;
    margin-right: 0.4rem;
`

const FirstLine = styled.div`
    display: flex;
    /* justify-items:end; */
    /* background-color: red; */
    /* text-align:; */
    font-weight: bold;
    font-size: larger;
    /* padding: 0; */
    color: #333333;
    
`

const TextWrapper= styled.div`
    display: flex;
    flex-direction: column;
    /* justify-items: center; */
    /* justify-content: space-between; */
    /* background-color: greenyellow; */
    align-items: center;
    font-size: large;
    /* font-family: ; */
    /* font-family: 'Pokemon Solid', sans-serif; */
    font-family: sans-serif;
    padding-bottom: 1rem;                           
`
const SecondLine = styled.div`
    color: #666666;
`

// export default function CatchForm({id, pokemon, url}) {
export default function CatchForm({id, pokemon, setsuccess}) {
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
    const [cancelState, setcancelState] = useState(false)
    const [failNick, setfailNick] = useState()
    const [msg, setMsg] = useState('')

    const handleChange = (e) => {
        
        // setnickname( e.target.value);
       setnewPokemon({...newPokemon, nickname:e.target.value});
        
    };

    const cancelCatch = (e)=>{
        // setsuccess(false)
        setcancelState(true)
    }
    
    // let msg;
    const handleClick = (e) => {
        
       

        console.log("yg udah ada:", existingNick)
        console.log("nick yg dipilih:", newPokemon.nickname)
        console.log(existingNick.indexOf(newPokemon.nickname))
        if(existingNick.indexOf(newPokemon.nickname) > -1){
            // console.log("makan")
            console.log("udah ada")
            setfailNick(true);
            setMsg("Nickname already exist")
            
            
        }
        else if(newPokemon.nickname === ''){
            console.log("ga boleh kosong")
            setfailNick(true);
            setMsg(`Please give the ${pokemon} a nickname`)
        }
        else{
            // console.log("berak")
            console.log("belum ada")
            dispatch({type: ACTIONS.APPEND, payload: {caughtPokemon: newPokemon}})
            // setsuccess(false)
            
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
                <PokemonImg src={imageUrl.artwork} alt="" />

                <TextWrapper>
                    <FirstLine>
                        <PokeName>{pokemon}</PokeName><p> is caught!</p>
                    </FirstLine>
                    
                    <SecondLine>Give a nickname to our new friend</SecondLine>
                </TextWrapper>
                {/* {myPokemon.filter(selectedPokemon => selectedPokemon.pokemon === pokemon).map((filteredPokemon,index) => (
                    <div key={index}>{filteredPokemon.nickname}</div>

                ))} */}
                <CardFieldset>
                    <CardInput placeholder="Nickname" type="text" required value={newPokemon.nickname} onChange={handleChange}/>
                </CardFieldset>

                <CardFieldset>
                    
                    <CancelButton onClick={cancelCatch} type="button">Cancel</CancelButton>
                    <SaveButton onClick={handleClick} type="button">Save</SaveButton>
                    
                </CardFieldset>

                {/* // </StyledCatchForm> */}

                {cancelState &&
                    <Cancel setsuccess={setsuccess} setcancelState={setcancelState}/>
                }

                {failNick &&
                <FailNick setfailNick={setfailNick} msg={msg}/>
                }



                
            
            
          </StyledA>
    )
}
