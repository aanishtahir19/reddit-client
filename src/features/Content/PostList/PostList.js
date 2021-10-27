// Imporitng Styles
import "./PostList.scss";
// Importing PostPreview Component
import PostPreview from "./PostPreview/PostPreview.js";
// Import react skelton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// Import UseSelector
import { useSelector , useDispatch} from "react-redux";
// import UseEffect
import { useEffect } from "react";
// import middleware thunk for fetching subreddit posts
import {fetchSubreddiPosts} from './PostListSlice.js';

function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector((state)=> state.PostList.posts);
  const subreddit = useSelector((state)=> state.PostList.subreddit);

  useEffect(()=>{
    const user = {subreddit: subreddit};
    dispatch(fetchSubreddiPosts(user));
  }, [subreddit, dispatch])

  const loadingFlag = useSelector((state) => state.PostList.isLoading);
  if (loadingFlag) {
    return (
      <div className="post-list">
        <p style={{ marginBottom: "20px" }}>{<Skeleton count={5} />}</p>
        <p>{<Skeleton count={5} />}</p>
      </div>
    );
  }
  return (
    <div className="post-list">
      {posts.map((post, index) => (
        <PostPreview
          // post={null}
          post={post}
          key={index}
        />
      ))}
    </div>
  );
}

export default PostList;
