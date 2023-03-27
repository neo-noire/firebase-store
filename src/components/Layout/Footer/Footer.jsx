import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '../Navbar/Navbar'
import { FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa'
import { IconButton, LogoLink } from '../../../styles/styles'
import { devices } from '../../../styles/breakpoints'

const FooterContainer = styled.footer`
    display:flex;
    justify-content:space-between;
    margin-top: 30px;
    padding: 25px;
    background-color: white;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 30px 30px 0px 0px;
    @media ${devices.tabletS} {
        display: grid;
        grid-template-areas: 'logo links1 links2'
                            'social links1 links2';
        align-items: center;
        padding-bottom: 1rem;
    }
    @media ${devices.mobileL} {
        gap: 1rem;
        grid-template-areas: 'logo social '
                            ' links1 links1'
                            'links2 links2';
    }
`

export const Footer = () => {

    return (
        <FooterContainer>
            <LogoLink area='logo' >
                QPICK
            </LogoLink>
            <Container area='links1' alignItems='flex-start' flexDirection='column'>
                <NavLink to='/favourite'>
                    Favorite
                </NavLink>
                <NavLink to='/cart'>
                    Cart
                </NavLink>
                <NavLink to='/contacts'>
                    Contacts
                </NavLink>
            </Container>
            <Container area='links2' alignItems='flex-start' flexDirection='column'>
                <NavLink>
                    Favorite
                </NavLink>
                <NavLink>
                    Favorite
                </NavLink>
                <NavLink>
                    Favorite
                </NavLink>
            </Container>
            <Container area='social' alignItems='flex-start' alignMobile='center'>
                <IconButton as='a' href='#' target='_blank'>
                    <FaInstagram size={24} />
                </IconButton>
                <IconButton as='a' href='#' target='_blank'>
                    <FaTelegram size={24} />
                </IconButton>
                <IconButton as='a' href='#' target='_blank'>
                    <FaWhatsapp size={24} />
                </IconButton>
            </Container>
        </FooterContainer>
    )
}
