import React from 'react'
import {Button, IconButton, Stack,ToggleButton,ToggleButtonGroup} from '@mui/material'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import SendIcon from '@mui/icons-material/Send';
const MuiButton = () => {
  return (
    <Stack spacing={4}>
    <Stack spacing={2} direction='row'>
        <Button variant='text' href='https://google.com'>Text</Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
    </Stack>
    
    <Stack spacing={2} direction='row'>
        <Button variant='contained' color='primary'>Primary Button</Button>
        <Button variant='contained' color='secondary'>Secondary Button</Button>
        <Button variant='contained' color='error'>Error Button</Button>
        <Button variant='contained' color='warning' onClick={()=>alert('clicked')}>Warning Button</Button>
        <Button variant='contained' color='info'>Info Button</Button>
        <Button variant='contained' color='success'>Success Button</Button>
    </Stack>
    <Stack display={'block'} direction='row' spacing={2}>
        <Button variant='contained' size='small'>Small</Button>
        <Button variant='contained' size='medium'>Medium</Button>
        <Button variant='contained' size='large'>Large</Button>
    </Stack>
    <Stack spacing={2} direction='row'>
        <Button variant='contained' startIcon={<SendIcon/>} disableElevation>Send</Button>
        <Button variant='contained' endIcon={<SendIcon/>} disableRipple>Send</Button>
        <IconButton aria-label='send' color='success' size='small'>
            <SendIcon/>
        </IconButton>
    </Stack>
    <Stack direction='row'>
    <ToggleButtonGroup>
        <ToggleButton>
            <FormatBoldIcon/>
        </ToggleButton>
        <ToggleButton>
            <FormatItalicIcon/>
        </ToggleButton>
        <ToggleButton>
            <FormatUnderlinedIcon/>
        </ToggleButton>
    </ToggleButtonGroup>
    </Stack>
    </Stack>
  )
}

export default MuiButton