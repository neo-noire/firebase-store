import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { FlexContainer, IconButton, ImgComponent, RoundedContainer, Texth3, TextComponent, AbsoluteContainer } from '../../../styles/styles'
import pods from '../../../assets/airpodsPro.png'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { minusOneFromCart, pulsOneInCart, removeFromCart } from '../../../redux/cart/cartSlice';

const CartCard = styled(RoundedContainer)`
    position: relative;
    min-width: 300px;
    max-width: 600px;
    flex: 1;
    &:not(:first-child) {
        margin-top: 1rem;
    }
`

const ImgDiv = styled.div`
    width: 150px;
`


export const ItemCard = ({ data, setCheckoutPrice }) => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.items)
    const [items, setItems] = useState(1)
    const [totalPrice, setTotalPrice] = useState(data?.price);


    useEffect(() => {
        const item = cart.find(item => item.id === data.id)
        setTotalPrice(data?.price * item?.ordered)
        setItems(item?.ordered)
    }, [cart])

    const removeItem = () => {
        dispatch(removeFromCart(data?.id))
    }

    const plusItem = () => {
        dispatch(pulsOneInCart(data))
    }

    const minusItem = () => {
        dispatch(minusOneFromCart(data))
    }

    return (
        <CartCard>
            <FlexContainer flexDirection='column' directionMobile='column'>
                <ImgDiv>
                    <ImgComponent src={data?.image[0]} />
                </ImgDiv>
                <FlexContainer>
                    <IconButton onClick={minusItem}>
                        <AiFillMinusCircle size={24} />
                    </IconButton>
                    <span>{items}</span>
                    <IconButton onClick={plusItem}>
                        <AiFillPlusCircle size={24} />
                    </IconButton>
                </FlexContainer>
            </FlexContainer>
            <FlexContainer flexDirection='column' alignItems='flex-start' gap='1rem' directionMobile='column'>
                <Texth3>
                    {data?.name}
                </Texth3>
                <TextComponent>
                    {data?.price} $
                </TextComponent>
            </FlexContainer>
            <AbsoluteContainer top='1rem' right='1.5rem'>
                <IconButton onClick={removeItem} color='red'>
                    <BsTrash size={24} />
                </IconButton>
            </AbsoluteContainer>
            <AbsoluteContainer bottom='1rem' right='1.5rem'>
                <TextComponent>
                    {totalPrice} $
                </TextComponent>
            </AbsoluteContainer>
        </CartCard>
    )
}
