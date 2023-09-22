import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';



const pages = ['harshitabhatt58@gmail.com', '262-271-4822', 'LinkedIn Account', 'Upwork Profile'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Footer() {
  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    console.log("hi")
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    console.log("hi")
  };

  function getPage(page){
    if(page.includes("262")){
      return ''
    }
    if (page.includes("@")){
      return ''
    }
    if (page.includes("work")){
      return 'https://www.upwork.com/freelancers/~018a84f99caa186205'
    }
    if (page.includes("ink")){
      return 'https://www.linkedin.com/in/harshita-bhatt/'
    }
  }
  

  return (
    <AppBar position="relative"  sx={{
      backgroundColor: '#CCA06F', 
      px: 0
      // width: "100%"
    }}>
      <Container maxWidth="xl" id = "contact">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'} }}>
            
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'montserrat',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "center" }}>
            {pages.map((page) => (
              <a target= "_top">
              <Button
                key={page}
                href = {getPage(page)}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' , fontFamily: "montserrat", mr: 1}}
              >
                {page}
              </Button>
              </a>
            ))}
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Footer;