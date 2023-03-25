import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { FlexContainer, IconButton, ImgComponent, RoundedContainer, Texth2, Texth3, TextComponent, AbsoluteContainer, ButtonMain } from '../../../styles/styles'
import { ItemCard } from './ItemCard';


export const FullCart = () => {
    const cart = useSelector(state => state.cart.items)
    const [checkoutPrice, setCheckoutPrice] = useState(0)

    return (
        <div>
            <Texth2>
                Cart
            </Texth2>
            <FlexContainer margin='30px 0 0' justifyContent='space-between' alignItems='initial' gap='2rem'>
                <div style={{ flex: '1' }}>
                    {
                        cart && cart?.map((item, idx) => <ItemCard key={idx} data={item} setCheckoutPrice={setCheckoutPrice}/>)
                    }
                </div>
                <div style={{ position: 'sticky', top: '1rem', height: 'fit-content' }}>
                    <RoundedContainer p='1rem 1rem 2.5rem'>
                        <FlexContainer width='100%' justifyContent='space-between'>
                            <TextComponent>
                                Total:
                            </TextComponent>
                            <TextComponent>
                                6000 $
                            </TextComponent>
                        </FlexContainer>
                    </RoundedContainer>
                    <div style={{ position: 'relative', top: '-2rem' }}>
                        <ButtonMain>
                            Procceed to checkout
                        </ButtonMain>
                    </div>
                </div>
            </FlexContainer>
        </div>
    )
}
