

import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import { getSubredditPosts } from "../../../utils/api";
import { getSubreddits } from "../../../utils/api";
export const fetchSubredditPosts = createAsyncThunk(
    'PostList/fetchSubredditPosts',
    async (user, thunkAPI)=>{
        const subreddit = thunkAPI.getState().PostList.subreddit;
        const listing = thunkAPI.getState().PostList.listing;
        const response = await getSubredditPosts(subreddit, listing);
        return response;
    }
)

export const fetchSubreddits = createAsyncThunk(
    'PostList/fetchSubreddits',
    async()=>{
        const response = await getSubreddits();
        return response;
    }
)
export const PostList = createSlice({
    name:"PostList",
    initialState:{
        isLoading: true,
        subredditListLoading:true,
        subredditList:[],
        defaultSub:"home",
        defaultListing:"hot",
        subreddit:"home",
        listing:"hot",
        posts:[]

    },
    reducers:{
        changeListing: (state, action)=>{
            state.listing = action.payload;
        },
        changeSubreddit:(state, action)=>{
            
            state.subreddit= action.payload;
        }
    },

    extraReducers:{
        [fetchSubredditPosts.pending]:(state)=>{
            state.isLoading = true;
        },
        [fetchSubredditPosts.fulfilled]:(state,action)=>{
            state.posts = action.payload;
            state.isLoading = false;
        },
        [fetchSubreddits.pending]:(state)=>{
            state.subredditListLoading = true;
        },
        [fetchSubreddits.fulfilled]:(state, action)=>{
            state.subredditListLoading = false;
            state.subredditList = action.payload;
        }

    }
})
export const {changeListing, changeSubreddit} = PostList.actions;
export default PostList.reducer;