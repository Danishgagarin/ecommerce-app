import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import './Home.css';

const Home = () => {
  return (
    
    <Grid container spacing={2}>
      <Grid size={{xs:6,md:7 }}>
        <div>
            
            <h1 id='heading1' style={{textAlign:"left"}}>Enhance Your<br></br>Shopping Experience</h1>
            <h3 id='heading2' style={{textAlign:"left"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h3>
        </div>
        
      </Grid>
      <Grid size={{xs:6,md:5}}>
         <item>
            <img style={{width:"18rem"}} src="/images/image1.png"></img>
         </item>
      </Grid>
    </Grid>
    
  )
}

export default Home