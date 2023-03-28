import React, { memo, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '../Layout/Navbar/Navbar'
import { AiFillStar, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { FlexContainer, IconButton } from '../../styles/styles'
import { useDispatch, useSelector } from 'react-redux'
import { addToFav, removeFromFav } from '../../redux/favorite/favSlice'
import { devices } from '../../styles/breakpoints'

const CardContainer = styled.div`
    position: relative;
    padding: 20px;
    width: calc(25% - 1rem);
    min-width:250px;
    display: flex;
    flex-direction: column;
    align-items: center;

    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    gap: 30px;
    @media ${devices.laptop} {
        width: calc(33.33% - .7rem)
    }

    @media ${devices.tablet} {
        width: calc(50% - 1rem)
    }
    @media ${devices.tabletS} {
        width: 70%;
    }
`

const CardIMG = styled.img`
    object-fit: cover;
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
    const dispatch = useDispatch()
    const favourite = useSelector(state => state.fav.items)
    const [isFavorite, setIsFavorite] = useState(false)

    const addToFavouriteHandler = () => {
        dispatch(addToFav(data))
    }

    const removeFromFavouriteHandler = () => {
        dispatch(removeFromFav(data.id))
    }

    useEffect(() => {
        const item = favourite.find(item => item.id === data.id)
        item
            ? setIsFavorite(true)
            : setIsFavorite(false)
    }, [favourite])
    
    return (
        <CardContainer>
            <FlexContainer height={'250px'}>
                <CardIMG src={data?.image[0]} />
            </FlexContainer>
            <Container width='100%' justifyContent='space-between'>
                <ProdName to={`/product/${data.category}&${data.id}`}>
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
                {
                    isFavorite
                        ? <IconButton onClick={removeFromFavouriteHandler}>
                            <AiFillHeart size={20} />
                        </IconButton>
                        : <IconButton onClick={addToFavouriteHandler}>
                            <AiOutlineHeart size={20} />
                        </IconButton>
                }
            </Absolute>
        </CardContainer >
    )
}

