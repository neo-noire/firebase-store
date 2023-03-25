import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '../Navbar/Navbar'
import { FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa'
import { IconButton, LogoLink } from '../../../styles/styles'

const FooterContainer = styled.footer`
    display:flex;
    justify-content:space-between;
    margin-top: 30px;
    padding: 25px;
    background-color: white;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 30px 30px 0px 0px;
`

export const Footer = () => {
    return (
        <FooterContainer>
            <LogoLink>
                QPICK
            </LogoLink>
            <Container alignItems='flex-start' flexDirection='column'>
                <NavLink>
                    Favorite
                </NavLink>
                <NavLink>
                    Cart
                </NavLink>
                <NavLink>
                    Contacts
                </NavLink>
            </Container>
            <Container alignItems='flex-start' flexDirection='column'>
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
            <Container alignItems='flex-start'>
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
