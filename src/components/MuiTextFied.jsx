import React from 'react'
import { Stack, TextField,InputAdornment } from '@mui/material'
const MuiTextFied = () => {
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
    </Stack>
  )
}

export default MuiTextFied