import './ListingSelector.scss';
import { Link } from 'react-router-dom';
import { changeListing } from '../PostListSlice.js';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
function ListingSelector() {
  const selectedListing = useSelector(
    (state) => state.PostList.listing
  );

  const dispatch = useDispatch();
  const subreddit = useSelector((state) => state.PostList.subreddit);
  const handleRisingClick = (e) => {
    dispatch(changeListing('rising'));
  };
  const handleHotClick = (e) => {
    dispatch(changeListing('hot'));
  };
  const handleNewClick = (e) => {
    dispatch(changeListing('new'));
  };
  const handleTopClick = (e) => {
    dispatch(changeListing('top'));
  };
  console.log();
  return (
    <ul className='listing-selector'>
      <Link
        to={`/r/${subreddit}/hot`}
        // state={{subreddit: subreddit, listing: selectedListing}}
      >
        {selectedListing === 'hot' ? (
          <li>
            <button className='active'>
              <i className='fas fa-rocket'></i>
              <span>Hot</span>
            </button>
          </li>
        ) : (
          <li>
            <button onClick={handleHotClick}>
              <i className='fas fa-rocket'></i>
              <span>Hot</span>
            </button>
          </li>
        )}
      </Link>

      <Link
        to={`/r/${subreddit}/new`}
        // state={{subreddit: subreddit, listing: selectedListing}}
      >
        {selectedListing === 'new' ? (
          <li>
            <button className='active'>
              <i class='fas fa-plus-square'></i>
              <span>New</span>
            </button>
          </li>
        ) : (
          <li>
            <button onClick={handleNewClick}>
              <i class='fas fa-plus-square'></i>
              <span>New</span>
            </button>
          </li>
        )}
      </Link>
      <Link
        to={`/r/${subreddit}/top`}
        // state={{subreddit: subreddit, listing: selectedListing}}
      >
        {selectedListing === 'top' ? (
          <li>
            <button className='active'>
              <i class='fas fa-arrow-circle-up'></i>
              <span>Top</span>
            </button>
          </li>
        ) : (
          <li>
            <button onClick={handleTopClick}>
              <i class='fas fa-arrow-circle-up'></i>
              <span>Top</span>
            </button>
          </li>
        )}
      </Link>
      <Link
        to={`/r/${subreddit}/rising`}
        // state={{subreddit: subreddit, listing: selectedListing}}
      >
        {selectedListing === 'rising' ? (
          <li>
            <button className='active'>
              <i class='fas fa-seedling'></i>
              <span>Rising</span>
            </button>
          </li>
        ) : (
          <li>
            <button onClick={handleRisingClick}>
              <i class='fas fa-seedling'></i>
              <span>Rising</span>
            </button>
          </li>
        )}
      </Link>
    </ul>
  );
}

export default ListingSelector;
