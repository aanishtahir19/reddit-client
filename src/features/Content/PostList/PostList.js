// Imporitng Styles
import "./PostList.scss";
// Importing PostPreview Component
import PostPreview from "./PostPreview/PostPreview.js";
// Importing Post Data
import { data } from "../../../utils/querrydata.js";
// Import react skelton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// Import UseSelector
import {useSelector} from 'react-redux';
function PostList() {
    const loadingFlag = useSelector((state)=> state.PostList.isLoading);
    
    if(loadingFlag){
      return (
        <div className="post-list">
          <p style={{marginBottom:"20px"}}>{<Skeleton count={5}/>}</p>
          <p>{<Skeleton count={5}/>}</p>
        </div>
      )
    }
  return (
    <div className="post-list">
      {
        data.map((post, index) => (
            <PostPreview
            // post={null}
                post ={post.data}
                key={index}
            />
        ))
      }
    </div>
  );
}

export default PostList;
