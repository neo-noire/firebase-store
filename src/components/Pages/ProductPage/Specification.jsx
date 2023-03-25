import React, { useState } from 'react'
import styled from 'styled-components'
import { Container } from '../../Layout/Navbar/Navbar'
import { SlArrowDown } from 'react-icons/sl'

const SpecificationContainer = styled(Container)`
    position: relative;
    font-weight: 600;
    margin-top: 20px;
    padding: 1rem 2rem ;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    justify-content: space-between;
    cursor: pointer;
    z-index: 2;
`

const DropdownContainer = styled(Container)`
font-weight: 400;
margin-top: -.5rem;
position: relative;

padding: 1.5rem 2rem ;
background: #FFFFFF;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
border-radius: 0 0 15px 15px;
justify-content: space-between;
cursor: pointer;
`

const Arrow = styled.div`
    display: grid;
    place-content: center;
    transform: ${props => (props.open ? 'rotate(0deg)' : 'rotate(180deg)')};
    transition: all .2s ease-in-out;
`

export const Specification = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    return (
        <>
            <SpecificationContainer onClick={() => setDropdownOpen(!dropdownOpen)}>
                Specification
                <Arrow open={dropdownOpen}>
                    <SlArrowDown />
                </Arrow>
            </SpecificationContainer>
            {
                dropdownOpen &&
                <DropdownContainer>
                    Chcesz, aby Twoje nowe słuchawki były niezawodne? AirPods trzeciej generacji to bezprzewodowe
                    słuchawki dokanałowe.
                    
                    Będą towarzyszyć Ci podczas Twoich zmagań z codziennością bez
                    najmniejszych problemów! Ich waga to niewiele ponad 4 gramy tak więc sprawią,
                   
                    że poczujesz się komfortowo! Wykonane z najwyższą starannością słuchawki zamknięte w białej obudowie.
                </DropdownContainer>
            }
        </>
    )
}
