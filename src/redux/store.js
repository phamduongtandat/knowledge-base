import { configureStore } from '@reduxjs/toolkit'
import { popupReducer } from './popupSlice'
import { authReducer } from './authSlice'
import { editReducer } from './editSlice'
import { filterReducer } from './filterSlice'


const store = configureStore({
    reducer: {
        auth: authReducer,
        popup: popupReducer,
        edit: editReducer,
        filter: filterReducer,
    }
})
export default store