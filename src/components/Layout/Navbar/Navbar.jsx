import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { Counter, IconButton, LogoLink } from '../../../styles/styles'
import { useSelector } from 'react-redux'
import { devices } from '../../../styles/breakpoints'

const Header = styled.header`
    background-color: ${props => props.backgroundColor || "inherit"};
    height: 72px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Container = styled.div`
    margin: ${props => props.margin || '0px'};
    width: ${props => props.width || 'initial'};
    height: ${props => props.height || '100%'};
    display: flex;
    flex-direction: ${props => props.flexDirection || 'row'};
    align-items: ${props => props.alignItems || 'center'};
    justify-content: ${props => props.justifyContent || 'stretch'};
    gap: ${props => props.gap || '1rem'};
    grid-area: ${p => p.area};
    @media ${devices.tabletS} {
        align-items: ${p => p.alignMobile}; 
    };
    @media ${devices.mobileL} {
        flex-direction: ${props => props.derectionMobile || 'row'};
    };
`



export const Navbar = () => {
    const cart = useSelector(state => state.cart.items)
    const favorite = useSelector(state => state.fav.items)
    return (
        <Header>
            <LogoLink to='/'>
                QPICK
            </LogoLink>
            <NavLink to='/admin'>
                Admin Panel
            </NavLink>
            <Container>
                <IconButton as={NavLink} to='/favourite'>
                    <AiOutlineHeart size={20} />
                    {
                        favorite.length > 0 &&
                        <Counter>
                            {favorite.length}
                        </Counter>
                    }
                </IconButton>
                <IconButton as={NavLink} to='/cart'>
                    <AiOutlineShoppingCart size={20} />
                    {
                        cart.length > 0 &&
                        <Counter>
                            {cart.length}
                        </Counter>
                    }
                </IconButton>
            </Container>
        </Header>

    )
}
