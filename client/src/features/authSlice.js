import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from '../Services/authService'


const initialState = {


}

//create async thunks
export const register = createAsyncThunk('', async(user, thunkAPI) => {


})


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

    }
})
export const { reset } = authSlice.actions
export default authSlice.reducer