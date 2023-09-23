import React from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import one from '../src/one.svg';
import two from '../src/two.svg';
import three from '../src/three.svg';
import four from '../src/four.svg';

const isSmallScreen = window.innerWidth <= 670;

function Processsteps() {
  return (
    <Container
      maxWidth="xl"
      style={{
        position: 'relative',
        background: '#F2E7D6',
        // padding: isSmallScreen ? '2rem 0' : '2rem', // Adjust padding for small screens
        lineHeight: '30px',
        display: 'flex', // Use flexbox to vertically center content
        flexDirection: isSmallScreen ? 'column' : 'row', // Stack items vertically for small screens
        alignItems: isSmallScreen ? 'center' : 'flex-start', // Center items horizontally for small screens
        width: isSmallScreen ? '100%' : '80%',
      }}
    >
      <Grid
        container
        spacing={0}
        alignItems={isSmallScreen ? 'center' : 'flex-start'} // Center items vertically for small screens
        justifyContent="center"
        style={{
          fontSize: '1.5rem',
          fontFamily: 'josefin sans',
          textAlign: isSmallScreen ? 'center' : 'left',
          paddingTop: isSmallScreen ? '0' : '-20%', // Adjust paddingTop for small screens
        }}
      >
        <Grid item xs={8} sm={2}>
          <img src={one} height="80px" width="80px" alt="Step 1" />
        </Grid>
        <Grid item xs={12} sm={10}>
          <p >
            <strong>Requirement Gathering</strong>: Initial focus on collecting necessary information on the business, founder, and project. This includes an initial meeting and client intake form. Here is where the scope of work is defined.
          </p>
        </Grid>
        <Grid item xs={8} sm={2}>
          <img src={two} height="80px" width="80px" alt="Step 2" />
        </Grid>
        <Grid item xs={12} sm={10}>
          <p>
            <strong>Prototyping</strong>: Development of proposal and initial draft of deliverables. Clients can get a feel for the quality of provided work.
          </p>
        </Grid>
        <Grid item xs={8} sm={2}>
          <img src={three} height="80px" width="80px" alt="Step 3" />
        </Grid>
        <Grid item xs={12} sm={10}>
          <p>
            <strong>Creation & Delivery</strong>: Project is developed and delivered for clients. Clients can provide their feedback and ask for edits. There is no set number of revisions; the focus is on revising until the client is happy.
          </p>
        </Grid>
        <Grid item xs={8} sm={2}>
          <img src={four} height="80px" width="80px" alt="Step 4" />
        </Grid>
        <Grid item xs={12} sm={10}>
          <p>
            <strong>Next Steps & FAQ</strong>: Clients can ask questions regarding the deliverables and determine if any next steps are necessary.
          </p>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Processsteps;
