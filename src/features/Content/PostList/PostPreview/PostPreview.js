// Importing Styles
import "./PostPreview.scss";
// Importing Upvotes Component
import PostUpvotes from "../../../PostUpvotes/PostUpvotes";
// Imporitng Arrows
function PostPreview({ post }) {
  const imagesrc = () => {
    if (post.thumbnail_width) {
      let src = post.preview.images[0].source.url.replace("preview", "i");
      return <div className="image-container">
        <img src={src} alt="nothing" style={{ maxWidth: "100%" }} />
      </div>
    }
    return null;
  };
  let utcSeconds = post.created_utc;
  // let d = new Date(0);
  // d.setUTCSeconds(utcSeconds)
  let today = new Date();
  // console.log(((today-d)/1000)/60/60/24)
  return (
    <div className="post-preview">
      <PostUpvotes />
      <div className="preview-content">
        <p>{`Posted by u/${post.author}`}</p>
        <h2>{post.title}</h2>

        {imagesrc()}
      </div>
    </div>
  );
}

export default PostPreview;
