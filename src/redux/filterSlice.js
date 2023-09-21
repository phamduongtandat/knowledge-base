import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isBlog: true,
    isAll: 'all'

}

// 
const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        activeBlog(state, action) {
            state.isBlog = action.payload
        },
        getHome(state, action) {
            state.isAll = action.payload
        },

    },
})

export const { activeBlog, getHome } = filterSlice.actions
export const filterReducer = filterSlice.reducer