import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isTree: false,
    isAddContent: 0,
    isRename: false,
    isProper: false,
    isShare: false,
    isMove: false,
    isTerminate: false,
    isSelect: false,
    isLogOut: false,
    itemInfo: {}
}

// 
const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        treePopup(state, action) {
            state.isTree = action.payload
        },
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
        movePopup(state, action) {
            state.isMove = action.payload
        },
        terminatePopup(state, action) {
            state.isTerminate = action.payload
        },
        selectEditorPopup(state, action) {
            state.isSelect = action.payload
        },
        getLogOut(state, action) {
            state.isLogOut = action.payload
        },
        getInfo(state, action) {
            state.itemInfo = action.payload
        }
    },
})

export const { treePopup, addContentPopup, renamePopup, properPopup, sharePopup, movePopup, selectEditorPopup, terminatePopup, getInfo, getLogOut } = popupSlice.actions
export const popupReducer = popupSlice.reducer