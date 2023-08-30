import { configureStore } from '@reduxjs/toolkit'
import { popupReducer } from './popupSlice'
import { authReducer } from './authSlice'
import { editReducer } from './editSlice'


const store = configureStore({
    reducer: {
        auth: authReducer,
        popup: popupReducer,
        edit: editReducer,
    }
})
export default store