import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import heroImage from './hero.svg';

function Hero() {
  const isSmallScreen = useMediaQuery('(max-width:670px)'); // Define your breakpoint for small screens

  return (
    <Box
      id="hero"
      style={{
        background: '#F2E7D6',
        position: 'relative',
        minHeight: '800px',
        paddingBottom: isSmallScreen ? '20%' : '10%',
        paddingTop: isSmallScreen ? '10%' : '5%',
      }}
    >
      <Grid
        container
        alignContent="flex-start"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} sm={6}>
          <Box p={0}>
            <img src={heroImage} height="auto" width="100%" alt="Hero Image" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            p={0}
            display="flex"
            flexDirection="column"
            alignItems={isSmallScreen ? 'center' : 'flex-start'}
          >
            <h1
              style={{
                marginTop: isSmallScreen ? '-4%' : '15%',
                fontFamily: 'yeseva one',
                fontSize: isSmallScreen ? 32 : 80,
                textAlign: isSmallScreen ? 'center' : 'left',
                width: isSmallScreen ? '80%' : '70%',
              }}
            >
              Ideas that build exceptional growth!
            </h1>
            <p
              style={{
                fontFamily: 'josefin sans',
                fontSize: isSmallScreen ? 18 : 25,
                textAlign: isSmallScreen ? 'center' : 'left',
                width: isSmallScreen ? '80%' : '70%',
                lineHeight: '30px',
              }}
            >
              There’s a smarter way to do business. A way that includes
              next-level services, a determined, relentless, and passionate
              consultant, and a unique perspective to help startups, founders,
              and visionaries get to the next level.
            </p>
            <Box
              p={0}
              style={{
                textAlign: isSmallScreen ? 'center' : 'left',
                // marginTop: '20px',
                marginTop: isSmallScreen ? "0%": "20px",
              }}
            >
              <a href="https://calendly.com/harshitabhatt58/30min">
                <Button
                  style={{
                    fontFamily: 'montserrat',
                    color: 'white',
                    backgroundColor: '#154D43',
                    borderRadius: 10,
                    display: 'inline-block',
                    width: '100%', // Use 100% width on small screens
                  }}
                >
                  Schedule a Meeting
                </Button>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box
        style={{
          backgroundColor: '#CCA06F',
          borderRadius: 10,
          position: 'absolute',
          left: 0,
          right: 0,
          // bottom:  isSmallScreen ? '0' : '',
          marginLeft: 'auto',
          marginRight: 'auto',
          zIndex: 3,
          height: '180px',
          
          // bottom: isSmallScreen ? '-15%' : '-8%', // Adjust bottom positioning for small screens
        }}
        sx = {{
          width: {
            xs: '90%',
            sm: '80%',
            md: "60%",
            lg: "80%",
            xl: "30%"
        },
        bottom: {
          xs: '-13%',
          sm: '-15%',
          md: "-15%",
          lg: "-12%",
          xl: "-8%"
        }
        }}
      >
        <p
          style={{
            padding: isSmallScreen? "3%" : '5%',
            color: 'white',
            fontFamily: 'josefin sans',
            fontSize: '22px',
            lineHeight: '25px',
            textAlign: 'center'
          }}
        >
          An unwavering commitment to helping entrepreneurs, leaders, and those
          with big ideas achieve new heights and success.
        </p>
      </Box>
    </Box>
  );
}

export default Hero;