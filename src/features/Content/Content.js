// Importing Styles
import './Content.scss';
// Importing PostList Component
import PostList from './PostList/PostList.js';
// Import Sidebar component
import Sidebar from './Sidebar/Sidebar.js';
// import useSelector
import {useSelector} from 'react-redux';
import { Route } from 'react-router';

function Content() {
    const postIsLoading = useSelector(state=> state.PostList.isLoading);
    const sidebar = ()=>{
        if(postIsLoading){
            return null
        }
        return <Sidebar/>
    }
    return ( 
        <div className="content">
            <div className="content-container">
                <Route exact path="/">
                <PostList/>
                </Route>
                <Route path="/:sub/:list">
                    <PostList/>
                </Route>
                
                {sidebar()}
            </div>
        </div>
     );
}

export default Content;