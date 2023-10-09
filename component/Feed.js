import React from 'react'
import NavBar from './NavBar';
import Upload from './Upload';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Avatar from '@mui/material/Avatar';
import { db } from '../firebase';
import { AuthContext } from '../context/auth';

function Feed() {
  const {user}=React.useContext(AuthContext);
  return (
    <div className="feed-container">
       <NavBar/>
       <Upload/>
      <div className="videos-container">
        
        <div className='post-container'>
          <video/>
          <div className="videos-info">
            <div className="avatar-container"> <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"  sx={{margin:"0.5rem"}}/>
           <p> Name</p>
            </div>
          <div className="post-like">
            <FavoriteIcon fontSize="large"/>10
          </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Feed
