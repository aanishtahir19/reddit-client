import "./ListingSelector.scss";
import { Link } from "react-router-dom";
import { changeListing } from "../PostListSlice.js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function ListingSelector() {
  const selectedListing = useSelector(state=> state.PostList.listing)
  
  const dispatch = useDispatch();
  const subreddit = useSelector((state)=> state.PostList.subreddit);
  const handleBestClick = (e) => {
    dispatch(changeListing("best"));
  };
  const handleHotClick = (e) => {
    dispatch(changeListing("hot"));
  };
  const handleNewClick = (e) => {
    dispatch(changeListing("new"));
  };
  const handleTopClick = (e) => {
    dispatch(changeListing("top"));
  };
  console.log()
  return (
    <ul className="listing-selector">
      <Link 
        to={`/${subreddit}/best`}
        // state={{subreddit: subreddit, listing: selectedListing}}
      >
        {selectedListing=== "best"? (
          <li>
            <button className="active">
              <i className="fas fa-rocket"></i>
              <span>Best</span>
            </button>
          </li>
        ) : (
          <li>
            <button onClick={handleBestClick}>
              <i className="fas fa-rocket"></i>
              <span>Best</span>
            </button>
          </li>
        )}
      </Link>
    <Link 
        to={`/${subreddit}/hot`}
        // state={{subreddit: subreddit, listing: selectedListing}}
    >
      {selectedListing=== "hot" ? (
        <li>
          <button className="active">
            <i class="fas fa-fire-alt"></i>
            <span>Hot</span>
          </button>
        </li>
      ) : (
        <li>
          <button onClick={handleHotClick}>
            <i class="fas fa-fire-alt"></i>
            <span>Hot</span>
          </button>
        </li>
      )}
      </Link>
      <Link 
        to={`/${subreddit}/new`}
        // state={{subreddit: subreddit, listing: selectedListing}}
      
      >
      {selectedListing === "new"? (
        <li>
          <button className="active">
            <i class="fas fa-plus-square"></i>
            <span>New</span>
          </button>
        </li>
      ) : (
        <li>
          <button onClick={handleNewClick}>
            <i class="fas fa-plus-square"></i>
            <span>New</span>
          </button>
        </li>
      )}
      </Link>
      <Link 
        to={`/${subreddit}/top`}
        // state={{subreddit: subreddit, listing: selectedListing}}
      
      >
      {selectedListing=== "top"? (
        <li>
          <button className="active">
            <i class="fas fa-arrow-circle-up"></i>
            <span>Top</span>
          </button>
        </li>
      ) : (
        <li>
          <button onClick={handleTopClick}>
            <i class="fas fa-arrow-circle-up"></i>
            <span>Top</span>
          </button>
        </li>
      )}
      </Link>
    </ul>
  );
}

export default ListingSelector;
