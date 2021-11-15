// Importing Styles
import './Content.scss';
// Importing PostList Component
import PostList from './PostList/PostList.js';
// Import Sidebar component
import Sidebar from './Sidebar/Sidebar.js';
// import useSelector
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import Post from './Post/Post';
function Content() {
  const postIsLoading = useSelector(
    (state) => state.PostList.isLoading
  );
  const sidebar = () => {
    if (postIsLoading) {
      return null;
    }
    return <Sidebar />;
  };
  return (
    <div className='content'>
      <div className='content-container'>
        <Switch>
          <Route exact path='/r/:sub/id/:id'>
            <PostList />
          </Route>

          <Route path='/r/:sub/:list'>
            <PostList />
            {/* {sidebar()} */}
          </Route>
          <Route path='/r/:sub'>
            <PostList />
            {/* {sidebar()} */}
          </Route>
          <Route exact path='/'>
            <PostList />
            {/* {sidebar()} */}
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Content;
