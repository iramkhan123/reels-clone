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
  const { forgot ,user}=useContext(AuthContext)
  const handleClick = async() => {
    try{
        setLoading(true)
        setError('')
        await forgot(email)
        console.log("Email Sent")
        router.push('/login')
    }catch(err){
        console.log(err)
        setError(err.message)
        setTimeout(()=>{
            setError('')
        },2000)
    }
    setLoading(false)
}

  useEffect(()=>{
    if(user){
      router.push('/')
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
    <div className='forgot-card'>
     <Image src={insta} className="back"/> 
     <TextField size="small" margin="dense" id="outlined-basic" fullWidth label="Email" variant="outlined" 
      value={email} onChange={(e) => setEmail(e.target.value)}/>
     {/*<TextField size="small" margin="dense" id="outlined-basic" fullWidth label="Password" type="password" variant="outlined"
     value={password} onChange={(e)=> setPassword(e.target.value)} />*/}

      {error != "" && <div style={{ color: "red" }}>{error}</div>}
   
      
      <Button variant="contained"  fullWidth style={{marginTop:'1rem'}} onClick={handleClick} disabled={loading}>Send Email</Button>
      {/*<div style={{color:'blue' , marginTop:'0.5rem'}}>Forgot Password ?</div>*/}
      </div>
      <div className='bottom-card'>
            Don&apos;t Have an Account? <Link href="/signup"><span style={{ color: 'blue' }}>Sign Up</span></Link>
      </div>
    </div>
    </div>
  )
}

export default Index