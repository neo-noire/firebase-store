import React from 'react'
import styled from 'styled-components'
import hero from '../../../assets/hero-logo.png'

const HeroSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-height: 200px;
    background-color: #101010;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    overflow: hidden;
`

const Text = styled.h1`
    max-width: 250px;
    color: ${props => props.color || 'inherit'};
`

const ImageStyled = styled.img`
    object-fit: cover;
    z-index: 1;
    height: 100%;
`
export const Hero = () => {
    return (
        <HeroSection>
            <Text color="white">
                Аксессуары для
                Iphone 13 Pro Max
            </Text>
            <ImageStyled src={hero} />
        </HeroSection>
    )
}
