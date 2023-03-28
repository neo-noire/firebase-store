import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { checkoutSession } from '../../../hooks/checkoutSession';
import { devices } from '../../../styles/breakpoints';
import { FlexContainer, IconButton, ImgComponent, RoundedContainer, Texth2, Texth3, TextComponent, AbsoluteContainer, ButtonMain } from '../../../styles/styles'
import { ItemCard } from './ItemCard';

const CheckoutContainer = styled.div`
    position: sticky;
    top: 1rem;
    height: fit-content;
    @media ${devices.tabletS} {
        bottom: 0rem;
    }
`

const CheckoutBtn = styled(ButtonMain)`
     @media ${devices.tabletS} {
        width: 100%;
        margin: 0 auto;
    }
`
export const FullCart = () => {
    const cart = useSelector(state => state.cart.items)
    const [checkoutPrice, setCheckoutPrice] = useState(0)


    useEffect(() => {
        setCheckoutPrice(cart.reduce((acc, val) => acc += (val.price * val.ordered), 0))
    }, [cart])

    const handleCheckoutSession = () => {
        const ordered = cart.map(item => {
            return {
                name: item.name,
                category: item.category,
                quantity: item.ordered,
                image: item.image[0],
            }
        })
        console.log(ordered);
        checkoutSession(ordered)
    }
    return (
        <div style={{ flex: '1' }} >
            <Texth2>
                Cart
            </Texth2>
            <FlexContainer margin='30px 0 0' justifyContent='space-between' alignItems='initial' gap='2rem' directionMobile='column'>
                <div style={{ flex: '1' }}>
                    {
                        cart && cart?.map((item, idx) => <ItemCard key={idx} data={item} setCheckoutPrice={setCheckoutPrice} />)
                    }
                </div>
                <CheckoutContainer >
                    <RoundedContainer p='1rem 1rem 2.5rem'>
                        <FlexContainer width='100%' justifyContent='space-between'>
                            <TextComponent>
                                Total:
                            </TextComponent>
                            <TextComponent>
                                {checkoutPrice} $
                            </TextComponent>
                        </FlexContainer>
                    </RoundedContainer>
                    <div style={{ position: 'relative', top: '-2rem' }}>
                        <CheckoutBtn onClick={handleCheckoutSession}>
                            Procceed to checkout
                        </CheckoutBtn>
                    </div>
                </CheckoutContainer>
            </FlexContainer>
        </div>
    )
}
