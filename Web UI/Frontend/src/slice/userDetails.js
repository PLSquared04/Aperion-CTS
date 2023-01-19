import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    uid:"789"
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        signedin(state,action){
            state.uid = action.payload;
        }
    }    
})

export const {signedin} = userSlice.actions
export default userSlice.reducer;