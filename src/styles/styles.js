import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { devices } from './breakpoints';



export const Body = styled.div`
    min-width: 100vw;
    min-height:100vh;
    background: #EAEAEA;
    `
export const Wrapper = styled.div`
    min-height:100vh;
    display: flex;
    flex-direction: column;
    max-width: 1135px;
    margin: 0 auto; 
    padding: 0 1rem;
`

export const Texth2 = styled.h2`
    margin-top: 30px;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;

    color: #1C1C27;
`
export const Texth3 = styled.h3`
   font-weight: 500;
    font-size: 17px;
    line-height: 21px;

    color: #1C1C27;
`

export const TextComponent = styled.span`
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
`

export const FlexContainer = styled.div`
    width: ${p => p.width || 'initial'};
    height: ${p => p.height || 'initial'};
    display: flex;
    align-items: ${p => p.alignItems || 'center'};
    flex-direction: ${p => p.flexDirection || 'row'};
    justify-content: ${p => p.justifyContent || 'initial'};
    gap: ${p => p.gap || 0};
    margin: ${p => p.margin || '0'};
    flex: ${p => p.flex || 'initial'};
    flex-wrap: ${p => p.wrap || 'no-wrap'};
    @media ${devices.tabletS} {
        flex-direction: ${p => p.directionMobile || 'row'};
    }
`

export const AbsoluteContainer = styled.div`
    position:absolute;
    top: ${p => p.top || "auto"};
    left: ${p => p.left || "auto"};
    bottom: ${p => p.bottom || "auto"};
    right: ${p => p.right || "auto"};
`

export const RoundedContainer = styled.div`
    display: flex;
    align-items: center;
    height: fit-content;

    padding: ${p => p.p || '1rem'};
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 30px;

`

export const ImgComponent = styled.img`
    object-fit: cover;
    width: 100%;
`

export const ButtonMain = styled.button`
    display: flex;
    align-items:center;
    justify-content:center;
   
    border-radius: .2rem;
    border: none;
    
    padding: 1rem 2rem;
   
    color: white;
    background: #101010;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        background: #101010cc;  
    }
`

export const ResetButton = styled(ButtonMain)`
    background-color: red;
    &:hover{
        background-color: #cc2626;
    }
`

export const IconButton = styled.button`
    position: relative;
    display: flex;
    align-items:center;
    justify-content:center;
    padding: 8px;
    cursor: pointer;
    background-color: transparent;
    color: ${p => p.color || "inherit"};

    border-radius: 50%;
    border: none;

    &:hover {
        color: ${p => p.colorHover || "#FFA542"};
    }

`
export const Counter = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(20%, -20%);
    height: 16px;
    width: 16px;
    font-size: .8rem;
    padding: 10px;
    border-radius: 50%;
    background-color: #FFA542;
 
    color: white;
`

export const LogoLink = styled(NavLink)`
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    text-transform: uppercase;
    color: inherit;
    text-decoration: none;
    grid-area: ${p => p.area};
    @media ${devices.tabletS} {
        text-align: center;
    }
`

export const Label = styled.label`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: .5rem;
    &:hover {
        color: lightsalmon;
    }
`