import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isTurnOnOpt: false,
}

// 
const optionSlice = createSlice({
    name: 'option',
    initialState,
    reducers: {
        turnOnOpt(state, action) {
            state.isTurnOnOpt = action.payload
        },


    },
})

export const { turnOnOpt } = optionSlice.actions
export const optionReducer = optionSlice.reducer