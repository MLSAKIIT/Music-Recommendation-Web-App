//After sawo login we will ask if the user is logged in for the first time or not
//if for 1st time will redirect to artists selection page 
//if not then will redirect to music library page

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Navbar from '../Navbar/Navbar';
const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',

};

export default function ListDividers() {

  return (
    <>
    <Navbar/>
    <div className='container-fluid' style={{display:"flex",justifyContent:"center",alignItems:"center" ,paddingTop:"10%"}}>
    <List alignItems="center" sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <Button variant="outlined" href="/artists" style={{textAlign:"center" ,backgroundColor:"black",color:"red"}}> first time visit? Choose your favourite artists here</Button>
      </ListItem>
      <Divider />
      <ListItem button divider>
      <Button variant="outlined" href="/library" style={{textAlign:"center",backgroundColor:"black",color:"red"}}>no? LET'S Listen to some songs then</Button>
      </ListItem>
    </List>
    </div>
    </>
  );
}
