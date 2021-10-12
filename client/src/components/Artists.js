
import React from "react";
import artists from "../data/sample-artists";
import EntryArtists from "./EntryArtists";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@material-ui/core/Typography'


function createEntry(artistsTerm)
{
return(
    
    <Grid item xs={2} sm={4} md={4} key={artistsTerm.id}>
    <EntryArtists key={artistsTerm.id} name={artistsTerm.artists} />
    </Grid>
)
}


function Artists()
{
  

return( 
  <div style={{padding:"30px"}}>
<Typography align="center" variant="h4" style={{padding:"15px"}}>Choose your favourite Artists</Typography>

    <Box sx={{ flexGrow: 1 }}>
 <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  {artists.map(createEntry)}
  </Grid>
    </Box>
    </div>

)    
}

export default Artists;