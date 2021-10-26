// Import styles
import './Sidebar.scss';

function Sidebar() {
    return ( 
        <div className="sidebar">
            <h2>Subreddits</h2>
            <ul className="subredditList">
                <li>
                    <button>
                        <img src="https://b.thumbs.redditmedia.com/EndDxMGB-FTZ2MGtjepQ06cQEkZw_YQAsOUudpb9nSQ.png" alt="" />
                        Ask Reddit

                    </button>
                </li>
                <li>
                    <button>
                        <img src="https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png" alt="" />
                        Funny

                    </button>
                </li>
            </ul>
        </div>
     );
}

export default Sidebar;