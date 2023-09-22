import React from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import Container from '@material-ui/core/Container'; // Import Box component
import Process from './Process'; // Import Process component
import Processsteps from './Processsteps';

function Processcomponent() {
  const isSmallScreen = window.innerWidth <= 600; // Define your breakpoint here
  return (
      <Container maxWidth="xl" style={{ background: '#F2E7D6', position: 'relative', padding: '2rem' }}>
        <Grid container spacing={6} alignContent="center" alignItems="center" justifyContent="center" style={{ position: 'relative', width: "100%", textAlign: isSmallScreen? "center": "left"}}>
          <Grid item xs={12} sm={3} disableGutters={true}>
            <Process />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Processsteps />
          </Grid>
        </Grid>
    </Container>
  );
}

export default Processcomponent;