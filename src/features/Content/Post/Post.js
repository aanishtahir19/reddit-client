import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchPostData } from './PostSlice';
import { timePassedPosted } from '../../../utils/utils.js';
import PostUpvotes from '../../PostUpvotes/PostUpvotes';
import Showdown from 'showdown';
import { useState } from 'react';
import { Markup } from 'interweave';
import './Post.scss';
import { Link } from 'react-router-dom';
function Post() {
  let { sub, list, id } = useParams();
  let post = useSelector((state) => state.PostData.data);
  // let [data, setData] = useState(null);
  // let subreddit = useSelector(state=> state.PostList.subreddit);
  // let listing
  let converter = new Showdown.Converter();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostData(id));
    window.scrollTo(0, 0);
  }, [dispatch]);

  let timePassed = timePassedPosted(post.created);
  const imagesrc = () => {
    if (post.preview !== undefined) {
      let src;
      if (
        post.preview.images[0].source.url.match('external-preview')
      ) {
        return null;
      }
      src = post.preview.images[0].source.url.replace('preview', 'i');

      return (
        <div className='image-container'>
          <img
            src={src}
            alt='nothing'
            style={{
              maxWidth: '100%',
              borderRadius: '5px',
              height: '400px',
            }}
          />
        </div>
      );
    }
    return null;
  };
  let data = null;
  if (post.selftext) data = converter.makeHtml(post.selftext);
  // const togglePostData = () => {
  //   // console.log(post.url.match("reddit"));
  //   if (data) {
  //     setData(null);
  //   } else {
  //     if (post.selftext) {
  //       setData(converter.makeHtml(post.selftext));
  //     }
  //   }
  // };
  const getPostExtraImages = () => {
    if (post.media_metadata) {
      let data = post.media_metadata;
      return Object.keys(data).map((key) => {
        if (data[key].status === 'valid') {
          if (data[key].e === 'Image') {
            let url = data[key].s.u.replace('preview', 'i');
            return (
              <img
                src={url}
                alt='Image'
                style={{ padding: '10px' }}
              />
            );
          }
        }
      });
    }
  };
  return (
    <div className='post'>
      {<PostUpvotes upvotes={post.ups} />}
      <div className='preview-content'>
        <p>{`Posted by u/${post.author} ${timePassed}`}</p>
        <h2>{post.title}</h2>

        {/* Post Url */}
        {post.url && post.url.match('www.reddit.com') === null ? (
          <a href={post.url} target='_blank'>
            {post.url}
          </a>
        ) : null}

        {/* Post Image */}
        {imagesrc()}

        {/* extra Images */}
        {getPostExtraImages()}

        {/* Post Text */}
        <div className='post-text'>
          <Markup content={data} />

          {/* Reddit Video */}
          {post.secure_media &&
          post.secure_media.reddit_video &&
          post.secure_media.reddit_video.fallback_url ? (
            <iframe
              clsssName='reddit-video'
              height='512px'
              width='100%'
              src={post.secure_media.reddit_video.fallback_url}
              allowFullScreen
            ></iframe>
          ) : null}
          {/* {post.selftext ? (
            <button onClick={() => togglePostData()}>
              Show Text
            </button>
          ) : null} */}

          {/* Other Videos or gifs */}
          {post.secure_media_embed &&
          post.secure_media_embed.media_domain_url ? (
            <div id='videos'>
              <iframe
                src={post.secure_media_embed.media_domain_url}
                width='100%'
                height='200px'
                allowFullScreen
              ></iframe>
            </div>
          ) : null}
        </div>

        {/* Extra details */}
        <div id='extra-details'>
          <p>{timePassed}</p>
        </div>
      </div>
      <Link to={`/r/${sub}`}>
        <button className='back'>Back</button>
      </Link>
    </div>
  );
}

export default Post;
