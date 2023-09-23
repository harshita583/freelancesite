import Grid  from '@mui/material/Grid';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import payment from '../src/payment.svg';

function Price() {
  const isSmallScreen = useMediaQuery('(max-width:600px)'); // Define your breakpoint for small screens

  return (
    <Box
      style={{
        background: '#F2E7D6',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '100%', // Make the component full-width
      }}
    >
      <Grid
        id = "price"
        container
        spacing={isSmallScreen ? 2 : 10}
        alignContent="flex-start"
        alignItems="center"
        justifyContent="center"
        style={{ paddingRight: "5%", paddingLeft: "5%" }}
      >
        <Grid item xs={12} sm={6}  style={{ paddingLeft: "5%" , paddingRight: "5%"}}>
          <img
            className="my-svg"
            src={payment}
            height="auto"
            width="100%"
          />
        </Grid>
        <Grid item xs={12} sm={6} 
           >
          <Box p={0}
            alignItems={isSmallScreen ? 'center' : 'left'} // Center alignment for small screens
            style={{
              background: '#CCA06F',
              padding: isSmallScreen ? '4%' : '4%', // Adjust padding for smaller screens
              borderRadius: '20px',
              
            }}
          >
            <h1
              style={{
                fontFamily: 'yeseva one',
                fontSize: isSmallScreen ? '1.125rem' : '1.5rem', // Responsive font size
                color: 'white',
                paddingRight: "5%", 
                paddingLeft: "5%" 
              }}
            >
              $45/hr
            </h1>
            <p
              style={{
                fontFamily: 'josefin sans',
                fontSize: isSmallScreen ? '1.125rem' : '1.5625rem', // Responsive font size
                color: 'white',
                paddingRight: "5%", 
                paddingLeft: "5%" 
              }}
            >
              *Starting rate. Rate is dependent on project, timeline, and
              requirements.
            </p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Price;