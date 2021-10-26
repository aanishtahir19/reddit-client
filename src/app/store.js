import { configureStore } from '@reduxjs/toolkit';
import PostListReducer from '../features/Content/PostList/PostListSlice';
export default configureStore({
  reducer: {
    PostList: PostListReducer,
  },
});
