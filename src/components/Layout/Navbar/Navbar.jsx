import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { IconButton, LogoLink } from '../../../styles/styles'

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
`



export const Navbar = () => {
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
                </IconButton>
                <IconButton as={NavLink} to='/cart'>
                    <AiOutlineShoppingCart size={20} />
                </IconButton>
            </Container>
        </Header>

    )
}
