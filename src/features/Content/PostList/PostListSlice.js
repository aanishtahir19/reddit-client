

import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import { getSubredditPosts } from "../../../utils/api";

export const fetchSubreddiPosts = createAsyncThunk(
    'PostList/fetchSubreddiPosts',
    async (user, thunkAPI)=>{
        const subreddit = thunkAPI.getState().PostList.subreddit;
        const listing = thunkAPI.getState().PostList.listing;
        const response = await getSubredditPosts(subreddit, listing);
        return response;
    }
)

export const PostList = createSlice({
    name:"PostList",
    initialState:{
        isLoading: true,
        subreddit:"seduction",
        listing:"best",
        posts:[]

    },
    reducers:{
        changeListing: (state, action)=>{
            state.listing = action.payload;
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
export const {changeListing} = PostList.actions;
export default PostList.reducer;