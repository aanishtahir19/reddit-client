import './Header.scss';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import { changeSubreddit } from '../Content/PostList/PostListSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { setScroll } from '../Content/PostList/PostListSlice';
function Header() {
  let [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const handleClick = () => {
    console.log(searchTerm);
    dispatch(setScroll(0))
    dispatch(changeSubreddit(searchTerm.toLowerCase()));
    setSearchTerm('');
  };

  return (
    <div id='header'>
      <div className='header-container'>
        <div className='logo-container'>
          <Link to='/'>
            <img src={logo} alt='Logo' className='logo' />
            <span className='logo-highlight'>Reddit</span>
            <span>Minimal</span>
          </Link>
        </div>

        <div className='search-container'>
          <form action='javascript:void(0);'>
            <input
              type='text'
              name='search'
              id='search'
              placeholder='Search Subreddit'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Link to={`/r/${searchTerm}/hot`}>
              <button type='submit' onClick={() => handleClick()}>
                <i class='fas fa-search'></i>
              </button>
            </Link>
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default Header;
