import React, { useContext, useState, useEffect } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Image from 'next/image'
import Button from '@mui/material/Button';

import insta from '../../asset/Instagram.jpeg'
import { Carousel } from 'react-responsive-carousel';
import bg1 from '../../asset/bg1.jpg'
import bg2 from '../../asset/bg2.jpg'
import bg3 from '../../asset/bg3.jpg'
import bg4 from '../../asset/bg4.jpg'
import bg5 from '../../asset/bg5.jpg'
import { AuthContext } from '../../context/auth';

import { useRouter } from 'next/router';
import Link from 'next/link'

function Index() {
  const router=useRouter()
  const [email,setEmail]=useState('')
  const [password,setPassword] =useState('');
  const [error,setError]=useState('');
  const [loading,setLoading]=useState(false);
  const { login ,user}=useContext(AuthContext)
  const handleClick=async()=>{
    try{
     setLoading(true)
     setError('');
     await login(email,password);
     console.log("Logged in");
     }
     catch(err){
     console.log(err);
     setError(err.message)
     setTimeout(()=>{
       setError('')
     },2000)
    }
    setLoading(false); 
 }
 useEffect(()=>{
  console.log("login aaya")
  if(user?.uid){
      console.log(user)
      console.log(user=="")
      console.log(user==null)
      console.log("user not equal to null")
      router.push('/')
  }
  else{
      console.log("Not logged in");
  }
},[user])
  return (
    <div className='login-container'> 
    
    <div className="carbg">
    <div className="car">
          <Carousel
            autoPlay={true}
            interval={2000}
            infiniteLoop
            showArrows={false}
            showThumbs={false}
            showIndicators={false}
            stopOnHover
            showStatus={false}
          >
            <Image src={bg1} />

            <Image src={bg2} />

            <Image src={bg3} />

            <Image src={bg4} />

            <Image src={bg5} />
          </Carousel>
        </div>
      
    </div>
    <div>
    <div className='login-card'>
     <Image src={insta} className="back"/> 
     <TextField size="small" margin="dense" id="outlined-basic" fullWidth label="Email" variant="outlined" 
      value={email} onChange={(e) => setEmail(e.target.value)}/>
     <TextField size="small" margin="dense" id="outlined-basic" fullWidth label="Password" type="password" variant="outlined"
     value={password} onChange={(e)=> setPassword(e.target.value)} />
      {error != "" && <div style={{ color: "red" }}>{error}</div>}
   
      
      <Button variant="contained"  fullWidth style={{marginTop:'1rem'}} onClick={handleClick} disabled={loading}>Log In</Button>
      <div style={{color:'blue' , marginTop:'0.5rem'}}> <Link href="/forgotPassword"><span style={{ color: 'blue' }}>Forgot Password ?</span></Link></div>
      </div>
      <div className='login-bottom-card'>
            Don&apos;t Have an Account? <Link href="/signup"><span style={{ color: 'blue' }}>Sign Up</span></Link>
      </div>
    </div>
    </div>
  )
}

export default Index