import Grid from '@mui/material/Grid';
import  Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

function Services() {
  const isSmallScreen = useMediaQuery('(max-width:600px)'); // Define your breakpoint for small screens

  return (
    <Box
      style={{
        background: '#154D43',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '5%',
        width: '100%', // Make the component full-width, 
        lineHeight: "30px"
      }}
    >
      <Grid
        container
        spacing={isSmallScreen ? 2 : 10}
        disableGutters={true}
        alignContent="flex-start"
        justifyContent="center"
        style={{ position: 'relative' }}
      >
        <Grid item xs={12}>
          <h1
            style={{
              fontSize: '3rem', // Responsive font size
              color: 'white',
              fontFamily: 'yeseva one',
              paddingTop: '3%',
              paddingLeft: isSmallScreen ? '3%' : '3%', // Adjust padding for small screens
            }}
          >
            Services
          </h1>
        </Grid>
        <Grid item xs={12} sm={6} style={{ paddingTop: '0%' }}>
          <Box p={0}>
            <h1
              style={{
                color: 'white',
                fontSize: isSmallScreen ? '1.5rem' : '1.5rem', // Responsive font size
                fontFamily: 'yeseva one',
                paddingLeft: isSmallScreen ? '5%' : '6%', // Adjust padding for small screens
                paddingRight: isSmallScreen ? '5%' : '6%', // Adjust padding for small screens
              }}
            >
              Pitch Decks
            </h1>
          </Box>
          <Box p={0}>
            <p
              style={{
                fontFamily: 'josefin sans',
                fontSize: isSmallScreen ? '1.5rem' : '1.5rem', // Responsive font size
                color: 'white',
                paddingLeft: isSmallScreen ? '5%' : '6%', // Adjust padding for small screens
                paddingRight: isSmallScreen ? '5%' : '6%', // Adjust padding for small screens
              }}
            >
              I create beautiful presentations and pitch decks. With over 20
              pitch decks created in less than a year, I know what it takes to
              tell a good and convincing story to customers and investors.
            </p>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} style={{ paddingTop: '0%' }}>
          <Box p={0}>
            <h1
              style={{
                color: 'white',
                fontSize: isSmallScreen ? '1.5rem' : '1.5rem', // Responsive font size
                fontFamily: 'yeseva one',
                paddingRight: isSmallScreen ? '5%' : '6%', // Adjust padding for small screens
                paddingLeft: isSmallScreen ? '5%' : '6%', // Adjust padding for small screens
              }}
            >
              Business Plans and Development
            </h1>
          </Box>
          <Box p={0}>
            <p
              style={{
                fontFamily: 'josefin sans',
                fontSize: isSmallScreen ? '1.5rem' : '1.5rem', // Responsive font size
                color: 'white',
                paddingRight: isSmallScreen ? '5%' : '6%', // Adjust padding for small screens,
                paddingLeft: isSmallScreen ? '5%' : '6%', // Adjust padding for small screens
              }}
            >
              I’ve helped with business development and business plan creation. I
              conduct an assessment of your current business landscape, analyze
              your strengths, address weaknesses, capitalize on opportunities,
              and mitigate potential threats.
            </p>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} style={{ paddingTop: '0%' }}>
          <Box p={0}>
            <h1
              style={{
                fontFamily: 'yeseva one',
                fontSize: isSmallScreen ? '1.5rem' : '1.5rem', // Responsive font size
                color: 'white',
                paddingLeft: isSmallScreen ? '5%' : '6%', // Adjust padding for small screens
              }}
            >
              Market Research
            </h1>
          </Box>
          <Box p={0}>
            <p
              style={{
                fontFamily: 'josefin sans',
                fontSize: isSmallScreen ? '1.5rem' : '1.5rem', // Responsive font size
                color: 'white',
                paddingLeft: isSmallScreen ? '5%' : '6%', // Adjust padding for small screens
                paddingRight: isSmallScreen ? '5%' : '6%', // Adjust padding for small screens
              }}
            >
              I delve into market dynamics, customer behaviors, and industry
              trends. With comprehensive market research, your product
              development, marketing strategies, and sales approaches will be
              finely tuned to market and customer needs.
            </p>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} style={{ paddingTop: '1%' }}>
          <Box p={0} style = {{width: "100%"}}>
            <h1
              style={{
                fontFamily: 'yeseva one',
                fontSize: isSmallScreen ? '1.5rem' : '1.5rem', // Responsive font size
                color: 'white',
                paddingRight: isSmallScreen ? '5%' : '10%', // Adjust padding for small screens,
                paddingLeft: isSmallScreen ? '5%' : '6%', // Adjust padding for small screens
              }}
            >
              Branding and Strategy
            </h1>
          </Box>
          <Box p={0} style = {{width: "100%"}}>
            <p
              style={{
                fontFamily: 'josefin sans',
                fontSize: isSmallScreen ? '1.5rem' : '1.5rem', // Responsive font size
                color: 'white',
                paddingRight: isSmallScreen ? '5%' : '10%', // Adjust padding for small screens,
                paddingLeft: isSmallScreen ? '5%' : '6%', // Adjust padding for small screens
              }}
            >
              Marketing, branding, and strategic decisions are crafted to
              elevate your visibility and capture your target audience.
              Guidance includes improving design, branding, copy, and social
              media content.
            </p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Services;