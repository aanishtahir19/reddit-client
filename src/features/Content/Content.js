// Importing Styles
import './Content.scss';
// Importing PostList Component
import PostList from './PostList/PostList.js';
// Import Sidebar component
import Sidebar from './Sidebar/Sidebar.js';

function Content() {
    return ( 
        <div className="content">
            <div className="content-container">
                <PostList/>
                <Sidebar/>
            </div>
        </div>
     );
}

export default Content;