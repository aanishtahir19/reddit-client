// Importing Styles
import "./PostPreview.scss";
// Importing Upvotes Component
import PostUpvotes from "../../../PostUpvotes/PostUpvotes";
// Importing Time Passes since postd funciton
import {timePassedPosted} from '../../../../utils/utils.js';
// Import react skelton
// import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function PostPreview({ post}) {
  const imagesrc = () => {
    if (post.thumbnail_width) {
      let src = post.preview.images[0].source.url.replace("preview", "i");
      return <div className="image-container">
        <img src={src} alt="nothing" style={{ maxWidth: "100%" , borderRadius:"5px", height:"400px"}} />
      </div>
    }
    return null;
  };
  // return(
  //   <div>
  //     {post.author}
  //   </div>
  // )
  let timePassed = timePassedPosted(post.created);
    return (
      <div className="post-preview">
        {<PostUpvotes /> }
        <div className="preview-content">
          <p>{`Posted by u/${post.author} ${timePassed}`}</p>
          <h2>{post.title}</h2>
          {imagesrc()}
          <div id="extra-details">
            <p>{timePassed}</p>
  
          </div>
        </div>
      </div>
    );
  
  
  
}

export default PostPreview;
