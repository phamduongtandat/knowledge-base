import { configureStore } from '@reduxjs/toolkit'
import { popupReducer } from './popupSlice'
import { authReducer } from './authSlice'
import { editReducer } from './editSlice'
import { filterReducer } from './filterSlice'
import { optionReducer } from './optionSlice'


const store = configureStore({
    reducer: {
        auth: authReducer,
        popup: popupReducer,
        edit: editReducer,
        filter: filterReducer,
        option: optionReducer,
    }
})
export default store