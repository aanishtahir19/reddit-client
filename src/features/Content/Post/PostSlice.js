import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getPostData} from '../../../utils/api';
export const fetchPostData = createAsyncThunk(
    'PostData/fetchPostData',
    async(user, thunkAPI)=>{
        
        const response = await getPostData(user);
        
        return response;
    }
)

export const PostData = createSlice({
    "name": "PostData",
    initialState:{
        isLoading:true,
        data:{}
    },
    reducers:{

    },
    extraReducers:{
        [fetchPostData.pending]:(state)=>{
            state.isLoading = true;
        },
        [fetchPostData.fulfilled]:(state, action)=>{
            state.isLoading = false;
            state.data = action.payload;
        }
    }
})

export default PostData.reducer;