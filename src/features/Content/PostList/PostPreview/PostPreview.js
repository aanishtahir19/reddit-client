// Importing Styles
import "./PostPreview.scss";
// Importing Upvotes Component
import PostUpvotes  from "../../../PostUpvotes/PostUpvotes";
// Imporitng Arrows
function PostPreview({ post }) {
  return (
    <div className="post-preview">
      <PostUpvotes/>
      <div className="preview-content">danish</div>

    </div>
  );
}

export default PostPreview;
