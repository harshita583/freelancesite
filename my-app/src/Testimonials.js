import Grid from '@mui/material/Grid';
import Box  from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import notion1 from '../src/notion1.svg';
import notion2 from '../src/notion2.svg';
import notion3 from '../src/notion3.svg';

function Testimonials() {
  const isSmallScreen = useMediaQuery('(max-width:600px)'); // Define your breakpoint for small screens

  return (
    <Box
      id="testimonials"
      sx = {{
        paddingBottom:{
          xs: '4%',
          sm: '4%',
          md: "4%",
          lg: "4%",
          xl: "4%"
        },
        paddingLeft:{
          xs: '4%',
          sm: '14%',
          md: "4%",
          lg: "4%",
          xl: "4%"
        }
      }}
      style={{
        paddingTop: "-15%",
        background: '#F2E7D6',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        lineHeight: "30px"
        // width: '100%', // Adjusted width to fit the entire screen
        // paddingBottom: isSmallScreen ? '2%' : '4%', // Adjusted padding for small screens
      }}
    >
      <h1
        style={{
          fontFamily: 'yeseva one',
          fontSize: isSmallScreen ? '2rem' : '3rem', // Responsive font size
          lineHeight: "40px"
          // paddingBottom: isSmallScreen ? '2%' : '4%', // Adjusted padding for small screens
        }}
      >
        Top Rated on Upwork with 100% Job Success Rate
      </h1>
      <Grid
        container
        spacing={isSmallScreen ? 2 : 5} // Adjusted spacing for small screens
        alignContent="flex-start"
        justifyContent="center"
      >
        <Grid item xs={12} sm={4} style={{ padding: isSmallScreen ? '6%' : '6%' }}> {/* Adjusted padding for small screens */}
          <Box p={0}>
            <img
              className="my-svg"
              src={notion1}
              height="auto"
              width="100%"
            />
          </Box>
          <Box p={0}>
            <h1
              style={{
                fontFamily: 'yeseva one',
                fontSize: isSmallScreen ? '1.125rem' : '1.5rem', // Responsive font size
              }}
            >
              XADES Multimedia
            </h1>
          </Box>
          <Box p={0}>
            <p
              style={{
                fontFamily: 'josefin sans',
                fontSize: isSmallScreen ? '1.125rem' : '1.5625rem', // Responsive font size
              }}
            >
              “There are only a handful of freelancers I can rely on and
              Harshita is one of them. Anything I throw her way, she is able to
              come through. Will hire her again in the near future, for sure!”
            </p>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} style={{ padding: isSmallScreen ? '2%' : '6%' }}> {/* Adjusted padding for small screens */}
          <Box p={0}>
            <img
              className="my-svg"
              src={notion2}
              height="auto"
              width="100%"
            />
          </Box>
          <Box p={0}>
            <h1
              style={{
                fontFamily: 'yeseva one',
                fontSize: isSmallScreen ? '1.125rem' : '1.5rem', // Responsive font size
              }}
            >
              John H Ernst & Associates
            </h1>
          </Box>
          <Box p={0}>
            <p
              style={{
                fontFamily: 'josefin sans',
                fontSize: isSmallScreen ? '1.125rem' : '1.5625rem', // Responsive font size
              }}
            >
              "She exceeded our expectations. Our team was positively surprised
              by how quickly she became dedicated to our project and finished it
              very quickly... Will be hiring her again!”
            </p>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} style={{ padding: isSmallScreen ? '2%' : '6%' }}> {/* Adjusted padding for small screens */}
          <Box p={0}>
            <img
              className="my-svg"
              src={notion3}
              height="auto"
              width="100%"
            />
          </Box>
          <Box p={0}>
            <h1
              style={{
                fontFamily: 'yeseva one',
                fontSize: isSmallScreen ? '1.125rem' : '1.5rem', // Responsive font size
              }}
            >
              She is Royal
            </h1>
          </Box>
          <Box p={0}>
            <p
              style={{
                fontFamily: 'josefin sans',
                fontSize: isSmallScreen ? '1.125rem' : '1.5625rem', // Responsive font size
              }}
            >
              “Awesome job really loved working with her. Had a great experience.
              Very patient, creative, and knowledgeable. Highly recommend!!!
            </p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Testimonials;