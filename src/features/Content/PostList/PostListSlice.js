

import { createSlice } from "@reduxjs/toolkit";

export const PostList = createSlice({
    name:"PostList",
    initialState:{
        isLoading: true,

    },
    reducers:{
        loadPosts:(state)=>{
            console.log("aanish")
        }
    }
})

export default PostList.reducer;