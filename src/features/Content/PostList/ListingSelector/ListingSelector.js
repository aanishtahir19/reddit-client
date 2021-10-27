import './ListingSelector.scss';
import {changeListing} from '../PostListSlice.js';
import { useDispatch} from "react-redux";
function ListingSelector({selectedListing}) {
    const dispatch = useDispatch();
    const handleBestClick = (e)=>{
        dispatch(changeListing("best"));
    }
    const handleHotClick = (e)=>{
        dispatch(changeListing("hot"));
    }
    const handleNewClick = (e)=>{
        dispatch(changeListing("new"));
    }
    const handleTopClick = (e)=>{
        dispatch(changeListing("top"));
    }
    
    return ( 
        <ul className="listing-selector">
            {selectedListing["best"]===true? (<li><button className="active"><i className="fas fa-rocket"></i><span>Best</span></button></li>):(<li><button onClick={handleBestClick}><i className="fas fa-rocket"></i><span>Best</span></button></li>)}
            {selectedListing["hot"]===true? (<li><button className="active"><i class="fas fa-fire-alt"></i><span>Hot</span></button></li>): (<li><button onClick={handleHotClick}><i class="fas fa-fire-alt"></i><span >Hot</span></button></li>)}
            {selectedListing["new"]===true? (<li><button className="active"><i class="fas fa-plus-square"></i><span>New</span></button></li>):(<li><button onClick={handleNewClick}><i class="fas fa-plus-square"></i><span>New</span></button></li>)}
            {selectedListing["top"]===true? (<li><button className="active"><i class="fas fa-arrow-circle-up"></i><span>Top</span></button></li>): (<li><button onClick={handleTopClick}><i class="fas fa-arrow-circle-up"></i><span>Top</span></button></li>)}
        </ul>
     );
}

export default ListingSelector;