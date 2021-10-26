// Importing Styles
import './Content.scss';
// Importing PostList Component
import PostList from './PostList/PostList.js';

function Content() {
    return ( 
        <div className="content">
            <div className="content-container">
                <PostList/>
            </div>
        </div>
     );
}

export default Content;