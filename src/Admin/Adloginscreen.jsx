import { Avatar, Button, Grid, Link, Paper, TextField, Typography, } from '@mui/material'
import React from 'react'
import MasksIcon from '@mui/icons-material/Masks';


const Adloginscreeen = () => {


  const btstyle1={margin :'8px 0'}
  const paperStyle={padding :20,height: '70vh',width :400,margin :"20px auto"}
  const avatar1Style={backgroundColor:'green'}

  return (
    <div>
<Grid>
    <Paper elevation={10} style={paperStyle}>
      <Grid align='center'> 
      <Avatar style={avatar1Style}><MasksIcon/></Avatar>
<h2>Log in</h2>
</Grid>
<TextField id="filled-basic" label="Email" variant="filled"  fullWidth/>
<TextField id="filled-basic" label="Password" variant="filled" type='password' fullWidth/>
<Button type='Submit' color='primary' fullWidth variant='contained' style={btstyle1}>Login</Button>

<Typography align='left'><Link href="#" underline="always">
  {'Forgot Password ?'}
</Link></Typography><p align='left'>Do you have an account ?</p>
<Typography align='left'><Link href="#" underline="always">{'Sign up'}
</Link></Typography>
    </Paper>
</Grid>


    </div>
  );
}

  



export default Adloginscreeen