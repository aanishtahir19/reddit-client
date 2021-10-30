import { useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import { useParams } from "react-router";
import {fetchPostData} from './PostSlice';
import {timePassedPosted} from '../../../utils/utils.js';
function Post() {
    let {id} = useParams();
    let post = useSelector(state=> state.PostData.data)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchPostData(id))
    }, [dispatch])
    
    let timePassed = timePassedPosted(post.created);
    return ( 
        <div>
            <p>{`r/${post.subreddit}`}</p>
            <br/>
            <p>{`Posted by u/${post.author} ${timePassed}`}</p>
            <br/>
            <h2>{post.title}</h2>
            <br/>
            <p>{(post.selftext)}</p>
        </div>
     );
}

export default Post;