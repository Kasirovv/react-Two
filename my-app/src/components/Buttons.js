import React from 'react'
import Button from '@mui/material/Button';

function Buttons(props) {
  return (
    <Button sx={{backgroundColor:'#263238', color:'white'}}>{props.title}</Button>
  )
}

export default Buttons