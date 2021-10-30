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
import {fetchSubredditPosts} from './PostListSlice.js';
// Import Listing Selector Component
import ListingSelector from './ListingSelector/ListingSelector.js'

function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector((state)=> state.PostList.posts);
  const listing = useSelector((state)=> state.PostList.listing);
  const subreddit = useSelector(state=> state.PostList.subreddit)
  useEffect(()=>{
    dispatch(fetchSubredditPosts());
  }, [dispatch , listing, subreddit])

  let listingSelectorValue = {
    [listing]: true
  }
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
      <ListingSelector selectedListing={listingSelectorValue}/>
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
