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

function PostPreview({ post }) {
  let [data, setData] = useState(null);
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
    if(data){
      setData(null)
    }else{
      if (post.selftext) {
        console.log(post.selftext.split("\n").join("<br/>"))
        setData(post.selftext.split("\n").join("<br/>"));
      }
    }
    
  };

  return (
    <div onClick={() => togglePostData()} className="post-preview">
      {<PostUpvotes upvotes={post.ups} />}
      <div className="preview-content">
        <p>{`Posted by u/${post.author} ${timePassed}`}</p>
        <h2>{post.title}</h2>
        {imagesrc()}
        <p className="post-text">{data}</p>
        <div id="extra-details">
          <p>{timePassed}</p>
        </div>
      </div>
    </div>
  );
}

export default PostPreview;
