import {createSlice} from '@reduxjs/toolkit'

const rocketsData=createSlice({
    name:'data',
    initialState:{
        data:[],
        
        
    },
    reducers:{
        getRocketsData:(state,action)=>{
            state.data=action.payload
        },
       
        
    }
    
})
export const {getRocketsData}=rocketsData.actions
export default rocketsData.reducer