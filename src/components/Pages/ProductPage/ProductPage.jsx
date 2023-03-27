import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Container } from '../../Layout/Navbar/Navbar'
import { TextCat } from '../MainPage/Category'
import { Slider } from './Slider'
import { IsAvailable } from './IsAvailable'
import { Specification } from './Specification'
import { ButtonMain } from '../../../styles/styles'
import { useParams } from 'react-router-dom'
import { useOneProductData } from '../../../hooks/useOneProductData'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/cart/cartSlice'
import { devices } from '../../../styles/breakpoints'

export const ProductContainer = styled(Container)`
    padding: 20px;
    background-color: white;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    align-items: stretch;
    @media ${devices.tabletM} {
        flex-direction: column;
        padding: 8px 12px;
    }
`

const DescriptionContainer = styled(Container)`
    padding: 3rem 0;
    height: initial;
    width: 50%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    @media ${devices.tabletM} {
        width: 100%;
        padding: 1rem 0;
    }

`

const TextProductName = styled(TextCat)`
    color: black;
    margin: 0;
`

const TextProductPrice = styled(TextCat)`
    color:  #FFA542;
    margin: 0;

`

export const TextProductDescription = styled.span`
    display: block;
    max-width: 350px;
    color: gray;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 1rem;
`

const ButtonProduct = styled(ButtonMain)`
    width: 50%;
    max-width: 250px;
`

export const ProductPage = () => {
    const dispatch = useDispatch()
    const id = useParams().id
    const path = id.split('&').join('/items/')
    const [product, loading, error] = useOneProductData(path)

    const addToCartHandler = () => {
        dispatch(addToCart({ ...product, ordered: 1 }))
    }

    return (
        <div>
            <TextCat>
                {product?.category}
            </TextCat>
            <ProductContainer>
                <Slider image={product?.image} />
                <DescriptionContainer >
                    <div>
                        <TextProductName>
                            {product?.name}
                        </TextProductName>
                        <IsAvailable quantity={product?.quantity} />
                    </div>
                    <TextProductPrice>
                        {product?.price} $
                    </TextProductPrice>
                    <TextProductDescription>
                        {product?.description}
                    </TextProductDescription>
                    <Container height='initial' width='100%' >
                        <ButtonProduct>Buy</ButtonProduct>
                        <ButtonProduct onClick={addToCartHandler}>Add To Cart</ButtonProduct>
                    </Container>
                </DescriptionContainer>
            </ProductContainer>
            <Specification />
        </div>
    )
}
