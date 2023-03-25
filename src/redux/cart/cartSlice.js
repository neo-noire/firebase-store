import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id)
            item
                ? item.ordered += action.payload.ordered
                : state.items.push(action.payload)
        },
        removeFromCart: (state, action) => {
            state.items = state.items
                .filter(item => item.id !== action.payload)
        },
        minusOneFromCart: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id)
            if (item.ordered > 1) {
                item.ordered -= 1
            } else {
                state.items = state.items.filter(item => item.id !== action.payload.id)
            }
        },
        pulsOneInCart: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id)
            item.ordered += 1;
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, minusOneFromCart, pulsOneInCart } = cartSlice.actions

export default cartSlice.reducer