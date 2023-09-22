import React from 'react'; // Add any other necessary import statements
import Button from '@mui/material/Button';
import './App.css';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import one from '../src/one.svg';
import two from '../src/two.svg';
import three from '../src/three.svg';
import four from '../src/four.svg';


const isSmallScreen = window.innerWidth <= 600;

function Processsteps() {
  return (
    <Container maxWidth="xl" style={{ position: 'relative', background: '#F2E7D6', marginLeft: 'auto', marginRight: 'auto', padding: '2rem', lineHeight: '30px', width: isSmallScreen ? "100%": "80%"}}>
      <Grid container spacing={0} alignItems='center' justifyContent="center" style={{ fontSize: '1.5rem', fontFamily: 'josefin sans' , top: isSmallScreen ? "50%": "0%",  top: isSmallScreen ? "50%": "0%",  transform: isSmallScreen ? "50%": "", textAlign: isSmallScreen ? "center" : "left"}}>
        <Grid item xs={8} sm={2}>
          <img src={one} height="80px" width="80px" />
        </Grid>
        <Grid item xs={12} sm={10}>
          <p>
            <strong>Requirement Gathering</strong>: Initial focus on collecting necessary information on the business, founder, and project. This includes an initial meeting and client intake form. Here is where the scope of work is defined.
          </p>
        </Grid>
        <Grid item xs={12} sm={2}>
          <img src={two} height="80px" width="80px" />
        </Grid>
        <Grid item xs={12} sm={10}>
          <p>
            <strong>Prototyping</strong>: Development of proposal and initial draft of deliverables. Clients can get a feel on the quality of provided work.
          </p>
        </Grid>
        <Grid item xs={12} sm={2}>
          <img src={three} height="80px" width="80px" />
        </Grid>
        <Grid item xs={12} sm={10}>
          <p>
            <strong>Creation & Delivery</strong>: Project is developed and delivered for clients. Clients can provide their feedback and ask for edits. There is no set number of revisions; the focus is on revising until the client is happy.
          </p>
        </Grid>
        <Grid item xs={12} sm={2}>
          <img src={four} height="80px" width="80px" />
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