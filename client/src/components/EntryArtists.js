import React, { useState } from "react";
import Paper from '@mui/material/Paper';
import {  styled } from '@mui/material/styles';
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import axios from "axios";

function EntryArtists(props)
{
    const [checked, setChecked] = useState(false);
var name=null;
    const handleChange = (event) => {
        setChecked(event.target.checked);
        name=event.target.value;
      if(checked===false)
      {

              try
              {
               axios.post('http://localhost:1821/artists',{
                  artistName:name})
              }
              catch(err)
              { console.log(err);
              }

              }
      };



    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        background: "linear-gradient(to right bottom, #ea5e0a, #f28200, #f5a500, #f2c700, #ebe812);",
        height: 60,
        lineHeight: '60px',
      }));

    return(
        <div>
    <Item>
      <FormControlLabel
      control={<Checkbox  checked={checked} onChange={handleChange} value={props.name}  />}
      label={props.name}
    />
    </Item>
        </div>
    )
}

export default EntryArtists;
