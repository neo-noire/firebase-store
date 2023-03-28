import React from 'react'
import styled from 'styled-components'
import hero from '../../../assets/hero-logo.png'
import { devices } from '../../../styles/breakpoints'

const HeroSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    max-height: 200px;
    background-color: #101010;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    overflow: hidden;
    padding: 0 1rem;
`

const Text = styled.h1`
    max-width: 230px;
    color: ${props => props.color || 'inherit'};
    @media ${devices.mobileL} {
        font-size: 1.2rem;
        font-weight: 600;
        line-height: 24px;
    }
`

const ImageStyled = styled.img`
    object-fit: cover;
    z-index: 1;
    height: 100%;
    max-width: 50%;
    position: relative;
    bottom: -.5rem;
`
export const Hero = () => {
    return (
        <HeroSection>
            <Text color="white">
                Accessories for
                Iphone 13 Pro Max
            </Text>
            <ImageStyled src={hero} />
        </HeroSection>
    )
}
