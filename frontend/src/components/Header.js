import React from 'react'
import {AppBar, Box, Button, Toolbar, Typography} from '@mui/material'
const Header = () => {
  return (
	<AppBar position='sticky' sx={{background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"}}>
		<Toolbar>
			<Typography variant='h4'>
				BlogsApp
			</Typography>
			<Box display="flex" marginLeft="auto">
				<Button variant="contained" sx={{margin:1, borderRadius:10, background:"linear-gradient(90deg, rgba(37,26,219,0.5339805825242718) 0%, rgba(4,82,185,0.48058252427184467) 35%, rgba(37,20,161,0.4004854368932039) 100%)"}} color="warning">Login</Button>
				<Button variant="contained" sx={{margin:1,borderRadius:10}} color = "warning">SignUp</Button>
			</Box>
		</Toolbar>
	</AppBar>
  )
}

export default Header