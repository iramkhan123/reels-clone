import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Image from 'next/image'
import Button from '@mui/material/Button';
import insta from '../../asset/Instagram.jpeg'

function index() {
  return (
    <div className='signup-container'> 
    <div className='signup-card'>
     <Image src={insta}/> 
     <TextField size="small" margin="dense" id="outlined-basic" fullWidth label="Email" variant="outlined" />
     <TextField size="small" margin="dense" id="outlined-basic" fullWidth label="Password" type="password" variant="outlined" />
     <TextField size="small" margin="dense" id="outlined-basic" fullWidth label="Full Name" variant="outlined" />
     <Button variant="outlined" component="label" fullWidth style={{marginTop:'1rem'}}>
      <input type="file" accept='image/*' style={{display:'none'}}/>
      Upload</Button>
      <Button variant="contained"  fullWidth style={{marginTop:'1rem'}}>Sign Up</Button>

    </div>
    <div className='bottom-card'>
      Already Have an Account ? <span style={{color:'blue'}}>Login</span>
    </div>
    </div>
  )
}

export default index