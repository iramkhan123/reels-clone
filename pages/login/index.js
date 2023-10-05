import React from 'react'
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


function index() {
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
     <Image src={insta}/> 
     <TextField size="small" margin="dense" id="outlined-basic" fullWidth label="Email" variant="outlined" />
     <TextField size="small" margin="dense" id="outlined-basic" fullWidth label="Password" type="password" variant="outlined" />
    {/* <TextField size="small" margin="dense" id="outlined-basic" fullWidth label="Full Name" variant="outlined" />*/}
     <div style={{color:'red'}}>Error yha aaega</div>
      
      <Button variant="contained"  fullWidth style={{marginTop:'1rem'}}>Log In</Button>
      <div style={{color:'blue' , marginTop:'0.5rem'}}>Forgot Password ?</div>
      </div>
    <div className='bottom-card'>
      Don't Have an Account? <span style={{color:'blue'}}>Sign Up</span>
    </div>
    </div>
    </div>
  )
}

export default index