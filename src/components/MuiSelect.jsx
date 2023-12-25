import {React,useState} from 'react'
import { MenuItem,TextField } from '@mui/material'

const MuiSelect = () => {
    const [country,setCountry]=useState('')
    const handleChange=(event)=>{
        console.log(event.target.value)
        setCountry(...country,event.target.value)
    }
  return (
    <TextField label='Select Country'
    select
    value={country}
    onChange={handleChange}>
        <MenuItem value='IN'>India</MenuItem>
        <MenuItem value='US'>USA</MenuItem>
        <MenuItem value='AUS'>Australia</MenuItem>
    </TextField>
  )
}

export default MuiSelect