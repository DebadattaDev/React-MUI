import React, { useState } from 'react'
import { Stack, TextField,InputAdornment } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
const MuiTextFied = () => {
    const[showPassword,setshowPassword]=useState(true)
    const handleClickShowPassword=()=>{

    }
    const handleMouseDownPassword=()=>{
        setshowPassword(!showPassword)
    }
  return (
    <Stack>
        <Stack spacing={5} direction='row'>
        <TextField label='Name' variant='standard'/>
        <TextField label='Name' variant='filled'/>
        <TextField label='Name' variant='outlined'/>
        </Stack>
        <Stack direction='row' spacing={4}>
            <TextField label='small Secondary' size='small' color='secondary'/>
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Form Input' required helperText='Do not share your password'/>
        </Stack>
        <Stack>
            <TextField label='read only' InputProps={{readOnly:true}}/>
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField
            label='Amount'
            InputProps={{startAdornment: <InputAdornment position='start'>$</InputAdornment>}}/>
            <TextField
            
            InputProps={{endAdornment:<InputAdornment position='end'>Kg</InputAdornment>}}/>
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Password' 
            variant='outlined'
            type={!showPassword ? 'text' :'password'}
            InputProps={{endAdornment:
            <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>}}/>
        </Stack>
    </Stack>
  )
}

export default MuiTextFied