import React from 'react';
import styled from '@emotion/styled'
import { Link, NavLink } from 'react-router-dom';


const MenuWrapper = styled.div`
    position: fixed;
    height: 100vh;
    background-color:red;
`
    



// const Ul = styled.ul`
const Ul = styled.div`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    /* background-color: #0D2538; */
    background-color: rgba(0, 0, 0, .6);
    /* z-index: 10; */

    
    position: fixed;
    /* position: relative; */
    /* transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'}; */
    transform: ${({ open }) => open ? 'translate(0, 4rem)' : 'translate(100%, 4rem)'};
    top: 0;
    right: 0;
    height: 100vh;
    /* width: 300px; */
    width: 100%;
    /* padding-top: 3.5rem; */
    /* padding-top: 1rem; */
    transition: transform 0.3s ease-in-out;
    overflow-y: hidden;
    li {
      color: #fff;
    }
    p{
        color: red;
    }
  }
`;

const LinkContainer = styled.div`
  position: relative;
  background-color: #0D2538;
  height: 50%;
`

const StyledLink = styled(NavLink)`
 color: red;
 padding: 1rem 2rem;
 /* background-color: indigo; */
 margin: 0;
 position: relative;
 /* border-left: 0.5rem solid red; */
 display: flex;
 /* opacity: 1; */

 &.active{
  color: white;
  border-left: 2px solid white;
  border-radius: 0.5rem;
  background-color: indigo;
 }
 div{
   background-color: red;
   width: 1rem;
   height: 100%;

 }
`

const RightNav = ({ open, setOpen }) => {
  return (
    // <MenuWrapper>
        <Ul open={open}>
          <LinkContainer>
            <StyledLink exact to="/" activeClassName="active" style={{textDecoration:'none'}} onClick={() => setOpen(!open)}>
                {/* <p> */}
                {/* <div className=""></div> */}
                  Pokemon List
                {/* </p>  */}
            </StyledLink>
        
        
            <StyledLink activeClassName="active" to="/my_pokemon_list" style={{textDecoration:'none'}} onClick={() => setOpen(!open)}>
                My Pokemon List
            </StyledLink>
          </LinkContainer>
       
        </Ul>
    // </MenuWrapper>
  )
}

export default RightNav