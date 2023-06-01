import {configureStore} from '@reduxjs/toolkit'
import dataSlice from './dataSlice'

export const Store=configureStore({
    reducer:{
        dataSlice
    }
})