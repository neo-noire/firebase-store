import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

export const favSlice = createSlice({
    name: 'fav',
    initialState,
    reducers: {
        addToFav: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id)
            item
                ? null
                : state.items.push(action.payload)
        },
        removeFromFav: (state, action) => {
            state.items = state.items
                .filter(item => item.id !== action.payload)
        },

    },
})

// Action creators are generated for each case reducer function
export const { addToFav, removeFromFav } = favSlice.actions

export default favSlice.reducer