import { changeSubreddit} from "../../PostList/PostListSlice";
import { useDispatch } from "react-redux";
function SubredditTabs({src, subText, subreddit}) {
    const dispatch = useDispatch();
    const handleClick = (data) => {
        dispatch(changeSubreddit(data.toLowerCase()))
        
      };

    
    return ( 
        <li
        className={subreddit? "active": null}>
                    <button onClick={()=> handleClick(subText)}
                    
                    >
                        <img src={src} alt="" />
                        r/{subText}

                    </button>
                </li>
     );
}

export default SubredditTabs;