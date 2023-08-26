import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAddContent: 0,
    isRename: false,
    isProper: false,
    isShare: false,
    itemInfo: {}
}

// 
const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        addContentPopup(state, action) {
            state.isAddContent = action.payload
        },
        renamePopup(state, action) {
            state.isRename = action.payload
        },
        properPopup(state, action) {
            state.isProper = action.payload
        },
        sharePopup(state, action) {
            state.isShare = action.payload
        },
        getInfo(state, action) {
            state.itemInfo = action.payload
        }
    },
})

export const { addContentPopup, renamePopup, properPopup, sharePopup, getInfo } = popupSlice.actions
export const popupReducer = popupSlice.reducer