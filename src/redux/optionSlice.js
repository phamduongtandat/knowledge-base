import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isTurnOnOpt: false,
    isTurnOnArtOpt: false,
    isTurnOnFileOpt: false
}

// 
const optionSlice = createSlice({
    name: 'option',
    initialState,
    reducers: {
        turnOnOpt(state, action) {
            state.isTurnOnOpt = action.payload
        },
        turnOnArtOpt(state, action) {
            state.isTurnOnArtOpt = action.payload
        },
        turnOnFiletOpt(state, action) {
            state.isTurnOnFileOpt = action.payload
        },


    },
})

export const { turnOnOpt, turnOnArtOpt, turnOnFiletOpt } = optionSlice.actions
export const optionReducer = optionSlice.reducer