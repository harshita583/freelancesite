import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';

const pages = ['About', 'The Process', 'Services', 'Pricing', 'Testimonials', 'Contact Me'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [fontSize, setFontSize] = React.useState(24); // Initial font size

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const checkComponent = (page) => {
    // Function to determine the active section
    if (page.includes("About")) {
      return "about";
    }
    if (page.includes("Process")) {
      return "process";
    }
    if (page.includes("Services")) {
      return "services";
    }
    if (page.includes("Pricing")) {
      return "price";
    }
    if (page.includes("Testimonials")) {
      return "testimonials";
    }
    if (page.includes("Contact")) {
      return "contact";
    }
  };

  React.useEffect(() => {
    // Function to dynamically adjust font size based on available space
    const handleResize = () => {
      const containerWidth = document.getElementById('menu-container').offsetWidth;
      const menuItemCount = pages.length;
      const maxMenuItemWidth = containerWidth / menuItemCount;

      // Calculate the maximum font size based on the available space
      const maxFontSize = Math.floor(maxMenuItemWidth / 10); // Adjust as needed

      // Set the font size to the smaller of the two (initial or maximum)
      const newFontSize = Math.min(fontSize, maxFontSize);

      // Update the font size
      setFontSize(newFontSize);

      // If the menu is open, force it to remain open
      if (anchorElNav) {
        handleOpenNavMenu(anchorElNav);
      }
    };

    // Initial font size adjustment
    handleResize();

    // Listen for window resize events to update font size dynamically
    window.addEventListener('resize', handleResize);

    return () => {
      // Remove the event listener on component unmount
      window.removeEventListener('resize', handleResize);
    };
  }, [fontSize]);

  const isSmallScreen = useMediaQuery('(max-width:670px)'); // Define your breakpoint for small screens

  return (
    <AppBar sx={{ backgroundColor: '#CCA06F', px: 0 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            {isSmallScreen ? (
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#"
                sx={{
                  fontFamily: 'montserrat',
                  fontWeight: 700,
                  fontSize: '18px',
                  textAlign: "center",
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  display: 'flex',
                  justifyContent: 'center', // Center text horizontally
                }}
              >
                Consulting with Harshita
              </Typography>
            ) : (
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#"
                sx={{
                  fontFamily: 'montserrat',
                  fontWeight: 700,
                  fontSize: '24px',
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Consulting with Harshita
              </Typography>
            )}
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              {/* <MenuIcon /> */}
            </IconButton>
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
                <MenuItem key={page}>
                  <Button
                    href={"#" + checkComponent(page)}
                    sx={{ color: 'inherit', width: '100%' }}
                    style={{ fontSize: `${fontSize}px` }} // Set the dynamic font size
                  >
                    {page}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            id="menu-container" // Add an ID for calculating available space
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
          >
            {pages.map((page) => (
              <Button
                href={"#" + checkComponent(page)}
                key={page}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  fontFamily: "montserrat",
                  mx: 1,
                  fontSize: `${fontSize}px`, // Set the dynamic font size
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
