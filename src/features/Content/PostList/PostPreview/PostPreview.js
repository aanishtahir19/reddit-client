// Importing Styles
import './PostPreview.scss';
// Importing Upvotes Component
import PostUpvotes from '../../../PostUpvotes/PostUpvotes';
// Importing Time Passes since postd funciton
import { timePassedPosted } from '../../../../utils/utils.js';
// Import react skelton
// import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import { useState } from 'react';
import Showdown from 'showdown';
import { Markup } from 'interweave';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { setScroll } from '../PostListSlice';
import { useDispatch } from 'react-redux';
function PostPreview({ post }) {
  let dispatch = useDispatch();
  let [data, setData] = useState(null);
  let { sub, list, id } = useParams();
  let subreddit = useSelector((state) => state.PostList.subreddit);
  if (sub === undefined) {
    sub = subreddit;
  }
  let showThumbnail = true;
  let converter = new Showdown.Converter();
  const imagesrc = () => {
    if (post.preview !== undefined) {
      let src;
      if (post.preview.images[0].source.url.match('external-preview')) {
        return null;
      }
      src = post.preview.images[0].source.url.replace('preview', 'i');
      showThumbnail = false;
      return (
        <div className='image-container'>
          <img
            src={src}
            alt='nothing'
            style={{
              width: '100%',
              borderRadius: '5px',
              height: '100%',
              objectFit:'cover'
            }}
          />
        </div>
      );
    }
    return null;
  };
  let timePassed = timePassedPosted(post.created);

  const togglePostData = () => {
    // console.log(post.url.match("reddit"));
    if (data) {
      setData(null);
    } else {
      if (post.selftext) {
        setData(converter.makeHtml(post.selftext));
      }
    }
  };
  const getPostExtraImages = () => {
    if (post.media_metadata) {
      let data = post.media_metadata;
      return Object.keys(data).map((key) => {
        if (data[key].status === 'valid') {
          if (data[key].e === 'Image') {
            let url = data[key].s.u.replace('preview', 'i');
            return <img src={url} alt='Image' style={{ padding: '10px' }} />;
          }
        }
      });
    }
  };
  const openPost = () => {
    console.log(window.scrollY);
    dispatch(setScroll(window.scrollY));
  };
  return (
    <div onClick={openPost} >
      <Link to={`/r/${sub}/id/${post.id}`}>
      <div className='post-preview'>
        {<PostUpvotes upvotes={post.ups} />}
        <div className='preview-content'>
          <p>{`Posted by u/${post.author} ${timePassed}`}</p>

          <h2>{post.title}</h2>

          {/* Post Url */}
          {post.url && post.url.match('www.reddit.com') === null ? (
            <a href={post.url} target='_blank' id='postUrl'>
              {post.url}
            </a>
          ) : null}

          {/* Post Image */}
          {imagesrc()}

          {/* extra Images */}
          {/* {getPostExtraImages()} */}
          {/* Reddit Video */}
          {post.secure_media &&
          post.secure_media.reddit_video &&
          post.secure_media.reddit_video.fallback_url ? (
            <h2 id="containsMedia">Contains Media/Gif</h2>
          ) : // <iframe
          //   clsssName='reddit-video'
          //   height='512px'
          //   width='100%'
          //   src={post.secure_media.reddit_video.fallback_url}
          //   allowFullScreen
          // ></iframe>
          null}
          {/* Post Text */}
          {/* <div className='post-text'>
              <Markup content={data} /> */}

          {/* {post.selftext ? (
                <button onClick={() => togglePostData()}>
                  Show Text
                </button>
              ) : null} */}
          {/* </div> */}
          {/* Other Videos or gifs */}
          {post.secure_media_embed.media_domain_url ? (
            <h2>Contains Media/Gif</h2>
          ) : // <div id='videos'>
          //   <iframe
          //     src={post.secure_media_embed.media_domain_url}
          //     width='100%'
          //     height='200px'
          //     allowFullScreen
          //   ></iframe>
          // </div>
          null}
          {/* Extra details */}
          <div id='extra-details'>
            <p>{timePassed}</p>
          </div>
        </div>
        {/* Thumbnail */}
        {showThumbnail &&
        (post.thumbnail !== undefined) | null &&
        post.thumbnail !== 'self' &&
        post.thumbnail !== 'nsfw'&&
        post.thumbnail!== ''&&
        post.thumbnail !== 'default' ? (
          <img
            id="thumbnail"
            // width={post.thumbnail_width}
            // height={post.thumbnail_height}
            src={post.thumbnail}
          ></img>
        ) : null}
      </div>
      </Link>
    </div>
  );
}

export default PostPreview;
