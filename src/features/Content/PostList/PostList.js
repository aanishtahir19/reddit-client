// Imporitng Styles
import './PostList.scss';
// Importing PostPreview Component
import PostPreview from './PostPreview/PostPreview.js';
// Importing Post Data
import {data} from '../../../utils/querrydata.js';

function PostList() {

    return ( 
        <div className="post-list">
            {
                data.map((post, index) => (
                    <PostPreview post ={post.data} key={index}/>
                )

                )
            }
        </div>
     );
}

export default PostList;