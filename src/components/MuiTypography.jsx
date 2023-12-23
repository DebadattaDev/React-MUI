import React from 'react'
import { Typography } from '@mui/material'
const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1'>h1 Heading</Typography>
        <Typography variant='h2'>h2 Heading</Typography>
        <Typography variant='h3'>h3 Heading</Typography>
        <Typography variant='h4' component='h1' gutterBottom>h4 Heading</Typography>
        <Typography variant='h5'>h5 Heading</Typography>
        <Typography variant='subtitle1'>SubTitle 1</Typography>
        <Typography variant='subtitle2'>SubTitle 2</Typography>

        <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ante at magna fermentum, vitae fringilla justo.</Typography>
        <Typography variant='body2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ante at magna fermentum, vitae fringilla justo.</Typography>

    </div>
  )
}

export default MuiTypography