import React from 'react'
import cart from '../../../assets/cart.svg'
import { Container } from '../../Layout/Navbar/Navbar'
import { TextCat } from '../MainPage/Category'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { ButtonMain } from '../../../styles/styles'
import { devices } from '../../../styles/breakpoints'

const EmptyCartContainer = styled(Container)`
    flex: 1;
    width: 100%;
    justify-content: center;
`

const Image = styled.img`
    object-fit: contain;
    height: 100%;
    @media ${devices.mobileL} {
        height: 80%;
        width: 100%;
    }
`

const Text = styled(TextCat)`
    text-align: center;
    color: ${p => p.color || '#101010'};
    text-transform: initial;
    margin: 1rem 0;
    font-weight: 400;
`
const ButtonCart = styled(ButtonMain)`
    width: 50%;
    max-width: 250px;
    @media ${devices.mobileL} {
        width: 100%;
    }
`
export const EmptyCart = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', flex: '1' }}>
            <EmptyCartContainer>
                <Image src={cart} />
            </EmptyCartContainer>
            <Text>
                Cart is Empty
            </Text>
            <Text color='grey'>
                It's never to late to fix this :)))
            </Text>
            <ButtonCart as={NavLink} to='/'>
                Go buy something
            </ButtonCart>
        </div>
    )
}
