import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userId: ''
}

// 
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getUserId(state, action) {
            state.userId = action.payload
        },

    },
})

export const { getUserId } = authSlice.actions
export const authReducer = authSlice.reducer