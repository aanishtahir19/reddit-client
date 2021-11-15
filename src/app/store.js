import { configureStore } from '@reduxjs/toolkit';
import PostListReducer from '../features/Content/PostList/PostListSlice';
import PostDataReducer from '../features/Content/Post/PostSlice';
export default configureStore({
  reducer: {
    PostList: PostListReducer,
    PostData: PostDataReducer
  },
});
