

import { createSlice } from "@reduxjs/toolkit";

export const PostList = createSlice({
    name:"PostList",
    initialState:{
        isLoading: true,
        subreddit:"jokes",
        posts:[]

    },
    reducers:{
        addLoadedPosts:(state, action)=>{
            state.posts = action.payload;
            state.isLoading = false
        }
    }
})
export const {addLoadedPosts} = PostList.actions;
export default PostList.reducer;