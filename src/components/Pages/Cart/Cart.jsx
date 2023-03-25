import React from 'react'
import { useSelector } from 'react-redux'
import { EmptyCart } from './EmptyCart'
import { FullCart } from './FullCart'

export const Cart = () => {
    const cart = useSelector(state => state.cart.items)

    if (cart.length > 0) {
        return <FullCart />
    } else {
        return (<EmptyCart />)
    }
}
