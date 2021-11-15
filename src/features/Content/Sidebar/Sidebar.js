// Import styles
import './Sidebar.scss';
import SubredditTabs from './SubredditTabs/SubredditTabs';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchSubreddits } from '../PostList/PostListSlice';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
function Sidebar() {
  let dispatch = useDispatch();
  let subredditList = useSelector(
    (state) => state.PostList.subredditList
  );
  let subreddit = useSelector((state) => state.PostList.subreddit);
  let listing = useSelector((state) => state.PostList.listing);
  let { id } = useParams();
  useEffect(() => {
    dispatch(fetchSubreddits());
  }, [dispatch]);
  let vis = 'inherit';
  if (id !== undefined) {
    vis = 'hidden';
  }
  if (subredditList) {
    return (
      <div className='sidebar' style={{ visibility: vis }}>
        <h2>Subreddits</h2>

        <ul className='subredditList'>
          {subredditList.map((sub, index) => (
            <SubredditTabs
              key={index}
              subreddit={sub.display_name.toLowerCase() === subreddit}
              src='https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png'
              subText={sub.display_name}
              listing={listing}
            />
          ))}
        </ul>
      </div>
    );
  }
  return null;
}

export default Sidebar;
