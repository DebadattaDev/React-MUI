import {React,useState} from 'react'
import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
const MuiRadio = () => {
    const [value,setValue]=useState('')
    const handleChange=(e)=>{
        // console.log("value" +value)
        setValue(e.target.value)
    }

  return (
    <Box>
        <FormControl>
            <FormLabel id='job-experience-in-Years'>
                Years Of Experience
            </FormLabel>
            <RadioGroup
            name='job-experience-group'
            value={value}
            onChange={handleChange}

            >

                <FormControlLabel control={<Radio/>} label='0-2' value='0-2'/>
                <FormControlLabel control={<Radio/>} label='3-5' value='3-5'/>
                <FormControlLabel control={<Radio/>} label='6-10' value='6-10'/>
            </RadioGroup>
        </FormControl>
    </Box>
  )
}

export default MuiRadio