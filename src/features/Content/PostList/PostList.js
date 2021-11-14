// Imporitng Styles
import './PostList.scss';
// Importing PostPreview Component
import PostPreview from './PostPreview/PostPreview.js';
// Import react skelton
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
// Import UseSelector
import { useSelector, useDispatch } from 'react-redux';
// import UseEffect
import { useEffect, useState } from 'react';
// import middleware thunk for fetching subreddit posts
import { fetchSubredditPosts } from './PostListSlice.js';
// Import Listing Selector Component
import ListingSelector from './ListingSelector/ListingSelector.js';
import { useParams } from 'react-router';
import { changeListing, changeSubreddit } from './PostListSlice.js';

import Post from '../Post/Post';
function PostList() {
  const dispatch = useDispatch();
const [scrollPosition, setScrollPosition] = useState(0)
const [stl, setStl] = useState({display:"block"})
  const currentPostId = useSelector(state=> state.PostList.currentPostId)
  const posts = useSelector((state) => state.PostList.posts);
  const listing = useSelector((state) => state.PostList.listing);
  const subreddit = useSelector((state) => state.PostList.subreddit);
  const defaultListing = useSelector((state) => state.PostList.defaultListing);
  const defaultSub = useSelector((state) => state.PostList.defaultSub);
  let { sub, list, id } = useParams();
  if (sub !== undefined && list !== undefined) {
    console.log('Flag1');
    dispatch(changeSubreddit(sub));
    dispatch(changeListing(list));
  } else if (sub !== undefined && list === undefined) {
    console.log('Flag2');
    dispatch(changeSubreddit(sub));
    dispatch(changeListing(defaultListing));
  } else {
    console.log('Flag3');
    dispatch(changeSubreddit(defaultSub));
    dispatch(changeListing(defaultListing));
  }
  useEffect(()=>{
    if (currentPostId){
      setScrollPosition(window.scrollY)
      setStl({visibility:"hidden", })
      // elem.style.height="100vh";
      // elem.style.overflow="hidden"
      // elem.style.visibility="hidden"
    }else{
      setStl({visibility:"inherit", overflow:"inherit", height:"inherit"})
    }
    
  }, [currentPostId,scrollPosition])
  useEffect(() => {
    
    dispatch(fetchSubredditPosts());
  }, [dispatch, listing, subreddit]);

  const loadingFlag = useSelector((state) => state.PostList.isLoading);
  if (loadingFlag) {
    return (
      <div className='post-list'>
        <p style={{ marginBottom: '20px' }}>{<Skeleton count={5} />}</p>
        <p>{<Skeleton count={5} />}</p>
      </div>
    );
  }
  return (
    <div className='cont'>
      {/* {id !== undefined ? <Post /> : null} */}
      {currentPostId && <Post y={scrollPosition}post={posts.filter(post=> post.id === currentPostId)[0]} />}
      {/* <Post /> */}
      <div className='post-list'id="postList" style={stl}>
        <ListingSelector />
        {posts.map((post, index) => (
          
          
            <PostPreview
              // post={null}
              post={post}
              key={index}
            />
        ))}
      </div>
    </div>
  );
}

export default PostList;
