

import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import { getSubredditPosts } from "../../../utils/api";

export const fetchSubreddiPosts = createAsyncThunk(
    'PostList/fetchSubreddiPosts',
    async (user, thunkAPI)=>{
        const response = await getSubredditPosts(user.subreddit);
        return response;
    }
)

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
    },
    extraReducers:{
        [fetchSubreddiPosts.pending]:(state)=>{
            state.isLoading = true;
        },
        [fetchSubreddiPosts.fulfilled]:(state,action)=>{
            state.posts = action.payload;
            state.isLoading = false;
        }
    }
})
export const {addLoadedPosts} = PostList.actions;
export default PostList.reducer;