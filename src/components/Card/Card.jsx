import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '../Layout/Navbar/Navbar'
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai'
import { IconButton } from '../../styles/styles'
import img from '../../assets/airpodsPro.png'

const CardContainer = styled.div`
    position: relative;
    padding: 20px;
    width: calc(33.33% - .7rem);
    min-width:300px;
    display: flex;
    flex-direction: column;
    align-items: center;

    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    gap: 30px;
`

const CardIMG = styled.img`
    object-fit: cover;
    z-index: 1;
    height: 100%;
`

const ProdName = styled(NavLink)`
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    text-decoration: none;
    color: inherit;
`

const ProdPrice = styled.span`
    color: #FFA542;
    `

export const Absolute = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    `


export const Card = ({ data }) => {


    return (
        <CardContainer>
            <CardIMG src={img} />
            <Container width='100%' justifyContent='space-between'>
                <ProdName to={`/product/${data.category}&${data.name}`}>
                    {data.name}
                </ProdName>
                <ProdPrice>
                    {data.price}$
                </ProdPrice>
            </Container>
            <Container gap='.25rem' width='100%'>
                <AiFillStar color='#FFA542' />
                {data.rating}
            </Container>
            <Absolute>
                <IconButton>
                    <AiOutlineHeart size={20} />
                </IconButton>
            </Absolute>
        </CardContainer>
    )
}
