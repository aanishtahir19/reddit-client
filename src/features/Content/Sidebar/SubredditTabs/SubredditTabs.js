import { changeSubreddit } from '../../PostList/PostListSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
function SubredditTabs({ src, subText, subreddit, listing }) {
  const dispatch = useDispatch();

  const handleClick = (data) => {
    dispatch(changeSubreddit(data.toLowerCase()));
  };

  return (
    <Link
      to={`/r/${subText}/${listing}`}
      // state={{subreddit: subreddit, listing: listing}}
    >
      <li className={subreddit ? 'active' : null}>
        <button onClick={() => handleClick(subText)}>
          <img src={src} alt='' />
          r/{subText}
        </button>
      </li>
    </Link>
  );
}

export default SubredditTabs;
