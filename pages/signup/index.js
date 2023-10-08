
import React, { useContext, useEffect ,useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Image from 'next/image'
import Button from '@mui/material/Button';
import insta from '../../asset/Instagram.jpeg'
import { AuthContext } from '../../context/auth';
import Link from 'next/link'
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db,storage } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";

function index() {

  const router = useRouter();
  const [email,setEmail]=useState('')
  const [password,setPassword] =useState('');
  const [error,setError]=useState('');
  const [loading,setLoading]=useState(false);
  const [name, setName] = useState('');

 
  const [file, setFile] = React.useState(null);

  const { signup ,user}=useContext(AuthContext);
  
  const handleClick=async()=>{
    try{
     setLoading(true)
     setError('');
     const userInfo=await signup(email,password);
     console.log("signed in");
     const storageRef = ref(storage, `${userInfo.user.uid}/Profile`);

     const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    }, 
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      
        console.log(error)
    
    },
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
        console.log("File available at", downloadURL);
        let userData = {
          name,
          email,
          password,
          profilePhoto: downloadURL,
          uid: userInfo.user.uid,
          posts:[]
        };

        await setDoc(doc(db, "users", userInfo.user.uid), userData);
      });
    }
  );
    console.log("user signed up");
    }
    catch(err){
     console.log(err);
     setError(err.message);
     setTimeout(()=>{
       setError('')
     },2000)
    }
    setLoading(false); 
 }

  useEffect(() => {
    if (user) {
        router.push('/')
    }
    else {
        console.log("Not logged in");
    }
}, [user])

  return (
    <div className='signup-container'> 
    <div className='signup-card'>
     <Image src={insta} className="back"/> 

     <TextField size="small" margin="dense" id="outlined-basic" fullWidth label="Email" variant="outlined" 
     value={email} onChange={(e) => setEmail(e.target.value)} />

     <TextField size="small" margin="dense" id="outlined-basic" fullWidth label="Password" type="password"
      variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)}  />
     
     <TextField size="small" margin="dense" id="outlined-basic" fullWidth label="Full Name" 
     variant="outlined" value={name} onChange={(e) => setName(e.target.value)}/>

     <Button variant="outlined" component="label" fullWidth style={{marginTop:'1rem'}}>

      <input type="file" accept='image/*' style={{display:'none'}} onChange={(e) =>setFile(e.target.files[0])}/>
      Upload</Button>

      <Button variant="contained"  fullWidth style={{marginTop:'1rem'}}
      onClick={handleClick} disabled={loading}>Sign Up</Button>

    </div>
    <div className='bottom-card'>
      Already Have an Account? <Link href="/login"><span style={{ color: 'blue' }}>Login</span></Link>
    </div>
    </div>
  )
}

export default index