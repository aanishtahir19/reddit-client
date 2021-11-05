// Importing Styles
import "./PostPreview.scss";
// Importing Upvotes Component
import PostUpvotes from "../../../PostUpvotes/PostUpvotes";
// Importing Time Passes since postd funciton
import { timePassedPosted } from "../../../../utils/utils.js";
// Import react skelton
// import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useState } from "react";
import Showdown from "showdown";
import { Markup } from "interweave";
function PostPreview({ post }) {
  let [data, setData] = useState(null);
  let converter = new Showdown.Converter();
  const imagesrc = () => {
    if (post.preview !== undefined) {
      let src;
      if (post.preview.images[0].source.url.match("external-preview")) {
        return null;
      }
      src = post.preview.images[0].source.url.replace("preview", "i");

      return (
        <div className="image-container">
          <img
            src={src}
            alt="nothing"
            style={{ maxWidth: "100%", borderRadius: "5px", height: "400px" }}
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
        // setData(post.selftext.split("\n").map((para, index)=> {
        //   return <div><p key={index}>{para}</p><br/></div>
        // }));c

        setData(converter.makeHtml(post.selftext));
      }
    }
  };
  const getPostExtraImages = ()=>{
    if (post.media_metadata ){
      let data = post.media_metadata;
      return Object.keys(data).map(key=>{
        if ( data[key].status === "valid"){
          if (data[key].e === "Image"){
            let url = data[key].s.u.replace("preview", "i");
            return <img src={url} alt="Image"  style={{padding:"10px"}} />
          }
          
        }
        
      })
      
    }
  }
  const testing = ()=>{
    console.log(post.secure_media_embed)
  }
  return (
    <div className="post-preview"  onClick={testing}>
      {<PostUpvotes upvotes={post.ups} />}
      <div className="preview-content" >
        <p>{`Posted by u/${post.author} ${timePassed}`}</p>
        <h2>{post.title}</h2>

        {/* Post Url */}
        {(post.url&& post.url.match("www.reddit.com")===null) ? (
          <a href={post.url} target="_blank">
            {post.url}
          </a>
        ) : null}


        {/* Post Image */}
        {imagesrc()}

          {/* extra Images */}
          {getPostExtraImages()}
        

        {/* Post Text */}
        <div className="post-text">
          <Markup content={data} />

          {/* Reddit Video */}
        {post.secure_media && post.secure_media.reddit_video  && post.secure_media.reddit_video.fallback_url ? 
            <iframe clsssName="reddit-video" height="512px" width="100%" src={post.secure_media.reddit_video.fallback_url}  allowFullScreen></iframe>
           : null}
        {post.selftext ? (
          <button onClick={() => togglePostData()}>Show Text</button>
        ) : null}
        
        {/* Other Videos or gifs */}
          {post.secure_media_embed.media_domain_url ? (
            <iframe
              src={post.secure_media_embed.media_domain_url}
              height="210px"
              width="400px"
              allowFullScreen
            ></iframe>
            
          ) : null}
        </div>

        {/* Extra details */}
        <div id="extra-details">
          <p>{timePassed}</p>
        </div>
      </div>
    </div>
  );
}

export default PostPreview;
