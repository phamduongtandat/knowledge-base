import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isMarkDownEdit: false,
    pagePath: '',
    itemEdit: {}
}

// 
const editSlice = createSlice({
    name: 'edit',
    initialState,
    reducers: {
        markdownEdit(state, action) {
            state.isMarkDownEdit = action.payload
        },
        getPagePath(state, action) {
            state.pagePath = action.payload
        },
        getItemEdit(state, action) {
            state.itemEdit = action.payload
        },

    },
})

export const { markdownEdit, getPagePath, getItemEdit } = editSlice.actions
export const editReducer = editSlice.reducer