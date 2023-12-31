import { Avatar } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useContext, useEffect, useState ,useRef} from 'react'
import { AuthContext } from '../context/auth';
import { arrayUnion, doc, serverTimestamp, setDoc, updateDoc,arrayRemove } from 'firebase/firestore';
import { db } from '../firebase';


function Post({ postData, userData }) {

    const { user } = useContext(AuthContext)
    const [like, setLike] = useState(false)
    const [isVideoPlaying,setIsVideoPlaying]=useState(false);
    const videoRef=useRef(null);
    const onVideoPress=()=>{
        if(isVideoPlaying){
           videoRef.current.pause();
           setIsVideoPlaying(false);
        }
        else{
          videoRef.current.play();
          setIsVideoPlaying(true);
        }
    }

    useEffect(() => {
        if (postData.likes.includes(user.uid)) {
            setLike(true)
        } else {
            setLike(false)
        }
    }, [postData])

    const handleLike = async() => {
        if (!like) {
            await updateDoc(doc(db, "posts", postData.postId), {
                likes: arrayUnion(user.uid)
            })
        } else {
            await updateDoc(doc(db, "posts", postData.postId), {
                likes: arrayRemove(user.uid)
            })
        }
    }

    return (
        <div className="post-container">
            <video src={postData.postUrl} ref={videoRef} onClick={onVideoPress}/>
            <div className="videos-info">
                <div className="avatar_container">
                    <Avatar alt="Remy Sharp" src={postData.profilePhoto} sx={{ margin: "0.5rem" }} />
                    <p style={{ color: "white", fontWeight: "bold" }}>{postData.profileName}</p>
                </div>

                <div className="post-like">
                    <FavoriteIcon fontSize="large" style={like ? { color: "red" } : { color: "white" }} onClick={handleLike} />
                    {postData.likes.length > 0 && postData.likes.length}
                </div>
            </div>
        </div>
    )
}

export default Post