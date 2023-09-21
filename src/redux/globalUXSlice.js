import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isDummmyMainMenu: true,

}

// 
const globalUXSlice = createSlice({
    name: 'globalUX',
    initialState,
    reducers: {
        dummmyMainMenu(state, action) {
            state.isDummmyMainMenu = action.payload
        },



    },
})

export const { dummmyMainMenu } = globalUXSlice.actions
export const globalUXReducer = globalUXSlice.reducer