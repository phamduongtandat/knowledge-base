import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isBlog: true,

}

// 
const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        activeBlog(state, action) {
            state.isBlog = action.payload
        },

    },
})

export const { activeBlog } = filterSlice.actions
export const filterReducer = filterSlice.reducer