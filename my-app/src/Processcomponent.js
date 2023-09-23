import React, { useEffect } from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'; // Import Box component
import Process from './Process'; // Import Process component
import Processsteps from './Processsteps';
import { Box } from '@mui/material';

function Processcomponent() {
  const isSmallScreen = window.innerWidth <= 600; // Define your breakpoint here

  useEffect(() => {
    // Set the HTML and body elements to full viewport height
    document.documentElement.style.height = '100%';
    document.body.style.height = '100%';

    // Remove the height styles when the component unmounts
    return () => {
      document.documentElement.style.height = '';
      document.body.style.height = '';
    };
  }, []);

  return (
    <Box
    id = "process"
      style={{
        background: '#F2E7D6',
        position: 'relative',
        padding: '2rem',
        // minHeight: '100vh', // Set the minimum height to 100% of viewport height
      }}
    >
      <Grid
        container
        spacing={6}
        alignContent="center"
        alignItems="center"
        justifyContent="center"
        style={{ position: 'relative', width: "100%", textAlign: isSmallScreen ? "center" : "left" }}
      >
        <Grid item xs={12} sm={3} disableGutters={true}>
          <Process />
        </Grid>
        <Grid item xs={12} sm={9} alignContent={"center"} style = {{alignItems: "center"}}>
          <Processsteps />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Processcomponent;
