import Grid from '@mui/material/Grid';
import  Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import me from '../src/me.svg';
import interviews from '../src/interviews.svg';

function Whoami() {
  const isSmallScreen = useMediaQuery('(max-width:600px)'); // Define your breakpoint for small screens

  return (
    <Box
      style={{
        background: '#154D43',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: isSmallScreen ? '10%' : '5%', // Adjust padding for small screens
        width: '100%', // Make the component full-width
      }}
    >
      <Grid
        container
        spacing={isSmallScreen ? 2 : 4}
        alignContent="flex-start"
        alignItems="center"
        justifyContent="center"
        sx = {{
          paddingTop: {
            xs: '20%',
            sm: '18%',
            md: "8%",
            lg: "3%",
            xl: "0%"
          }
        }}
      >
        <Grid item xs={12} sm={6}>
          <Box p={0}>
            <img className="my-svg" src={me} height="auto" width="80%" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} id="about">
          <Box p={0}>
            <h1
              style={{
                lineHeight: "30px",
                fontFamily: 'yeseva one',
                fontSize: isSmallScreen ? 20 : 24,
                color: 'white',
                paddingRight: isSmallScreen ? "5%" : "10%", // Adjust padding for small screens
                paddingLeft: isSmallScreen ? "5%" : "10%", // Adjust padding for small screens
              }}
            >
              Who Am I?
            </h1>
          </Box>
          <Box p={0}>
            <p
              style={{
                lineHeight: "30px",
                fontFamily: 'josefin sans',
                fontSize: isSmallScreen ? 18 : 25,
                color: 'white',
                paddingRight: isSmallScreen ? "5%" : "10%", // Adjust padding for small screens
                paddingLeft: isSmallScreen ? "5%" : "10%", // Adjust padding for small screens
              }}
            >
              A software developer and a top-rated startup business consultant
              specializing in startup development. With experience in
              consulting, venture capital, and technology, I am constantly
              gaining more exposure to business growth and the intersection of
              technology and business.
            </p>
          </Box>
          <Box p={0}>
            <p
              style={{
                paddingBottom: "10%",
                fontFamily: 'josefin sans',
                fontSize: isSmallScreen ? 18 : 25,
                lineHeight: "30px",
                color: 'white',
                paddingRight: isSmallScreen ? "5%" : "10%", // Adjust padding for small screens
                paddingLeft: isSmallScreen ? "5%" : "10%", // Adjust padding for small screens
              }}
            >
              Together embark on a journey where your venture’s potential knows
              no bounds.
            </p>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} style={{ marginTop: isSmallScreen ? '0%' : '-10%' }}>
          <Box p={0}>
            <h1
              style={{
                fontFamily: 'yeseva one',
                fontSize: isSmallScreen ? 20 : 24,
                color: 'white',
                paddingLeft: isSmallScreen ? "5%" : "10%", // Adjust padding for small screens
              }}
            >
              What do I do?
            </h1>
          </Box>
          <Box p={0}>
            <p
              style={{
                fontFamily: 'josefin sans',
                lineHeight: "30px",
                fontSize: isSmallScreen ? 18 : 25,
                color: 'white',
                paddingRight: isSmallScreen ? "5%" : "10%", // Adjust padding for small screens
                paddingLeft: isSmallScreen ? "5%" : "10%", // Adjust padding for small screens
              }}
            >
              I serve as an experienced guide, helping startups and new ventures
              navigate the complex journey from inception to growth. I bring my
              expertise, experience, data-focused strategies, and unique and
              strategic mindset to maximize chances of success.
            </p>
          </Box>
          <Box p={0}>
            <p
              style={{
                fontFamily: 'josefin sans',
                fontSize: isSmallScreen ? 18 : 25,
                color: 'white',
                paddingRight: isSmallScreen ? "5%" : "10%", // Adjust padding for small screens
                paddingLeft: isSmallScreen ? "5%" : "10%", // Adjust padding for small screens
              }}
            >
              Whatever you throw my way, consider it done!
            </p>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} style={{ marginTop: isSmallScreen ? '0%' : '-10%' }}>
          <Box p={0}>
            <img
              className="my-svg"
              src={interviews}
              height="auto"
              width="80%"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Whoami;