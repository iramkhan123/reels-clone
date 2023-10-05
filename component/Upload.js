import React from 'react'
import {Button} from '@mui/material'
import MovieIcon from '@mui/icons-material/Movie';
import LinearProgress from '@mui/material/LinearProgress';
function Upload() {
  return (
    <div className="upload-btn">
        <Button variant="outlined" component="label" fullWidth 
        startIcon={<MovieIcon/>}  style={{marginTop:'0.6rem'}}>
      <input type="file" accept='image/*' style={{display:'none'}}/>
      Upload</Button>
      <LinearProgress variant="determinate" value={50} style={{marginTop:"1rem"}}/>
    </div>
  )
}

export default Upload