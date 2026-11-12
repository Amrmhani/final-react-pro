import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import react, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import SearchIcon from "../../assets/icons/search.png";
import InputBase from '@mui/material/InputBase';


export default function Navbar(){
    const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
const token = localStorage.getItem('token');
const Logout = () =>{
  localStorage.removeItem('token');
}
    return(
       <AppBar position="static">
        <Toolbar>
          <Typography variant='h6' component={Link} to='/' sx={{textDecoration:'none'}}>
            IndigoStore
          </Typography>
          <Box sx={{flexGrow:1}}>
            <Button sx={{color:"inherit"}} component={Link} to='/'>Home</Button>
             <Button sx={{color:"inherit"}} component={Link} to='/'>Shop</Button>
             <Button sx={{color:"inherit"}} component={Link} to='/'>Collections</Button>
             <Button sx={{color:"inherit"}} component={Link} to='/'>About</Button>
             <Button sx={{color:"inherit"}} component={Link} to='/'>Contact</Button>
             {token ? <>
             <Button sx={{color:"inherit"}} onClick={Logout}>Logout</Button>
             </> : <>
             <Button sx={{color:"inherit"}} component={Link} to='login'>Login</Button>
             </>
             }
          </Box>
          <Search>
  <SearchIconWrapper>
    <img src={SearchIcon} alt="search" width={20} height={20} />
  </SearchIconWrapper>
  <StyledInputBase
    placeholder="Search…"
    inputProps={{ 'aria-label': 'search' }}
  />
</Search>
        </Toolbar>
       </AppBar>
    )
}