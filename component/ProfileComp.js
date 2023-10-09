import React, { useContext, useEffect, useState } from 'react'
import NavBar from './NavBar';
function ProfileComp(){
  return (
    <div>
        <NavBar/>
        <div>
            <div className="profile_upper">
                <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                style={{height:"8rem",width:"8rem",borderRadius:"50%"}}/>
                <div style={{flexBasis:"40%"}}>
                    <h1>Name</h1>
                    <h3>Posts :10</h3>
                </div>
            </div>
            <hr/>
            <div className="profile_videos">
               <video src="https://youtu.be/stjZKBhQ3lg"/>
               <video src="https://youtu.be/stjZKBhQ3lg"/>
               <video src="https://youtu.be/stjZKBhQ3lg"/>
            </div>       
        </div>
    </div>
  )
}

export default ProfileComp
