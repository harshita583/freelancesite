import './App.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import processImg from '../src/processImg.svg'

const isSmallScreen = window.innerWidth <= 600;

function Process() {
  return (
    <Container maxWidth="xl" 
    style={{ 
      background: '#F2E7D6', 
      position: "relative"}}>
     <Grid container spacing = {4} alignContent="flex-end"  alignItems="flex-end" justifyContent="center" style = {{position: "relative"}} > 
      <Grid item xs={8}>
           <h1 style = {{fontSize: 48, fontFamily: "yeseva one", position: "relative"}}>The Process</h1>
        </Grid>
        <Grid item xs={4}>
            <img className="my-svg" src = {processImg} height = "150px" width = {isSmallScreen ? "130": "150px" }style = {{position: "relative"}}/>
        </Grid> 
    </Grid>
    <hr  style={{ width: isSmallScreen ? "100%" :'130%', borderColor: "black"}}/>
    <Grid item>
        <Box p={0}>
          <p style = {{ lineHeight: "30px", fontFamily:"josefin sans", fontSize: 24, position: "relative", width: isSmallScreen ? "100%": "130%"}}>A customer-oriented consulting process. Whatever the challenge, time frame, and budget, I can help you on your journey to success.
            A process with the ultimate goal of making you happy. </p>
          </Box>
          </Grid>
    </Container>
  )
}
export default Process;