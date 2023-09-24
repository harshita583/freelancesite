import './App.css';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import processImg from '../src/processImg.svg'

const isSmallScreen = window.innerWidth <= 960;

let med = false
if (window.innerWidth <= 1200 && window.innerWidth >=601){
  med = true
}

function Process() {
  return (
    <Container maxWidth="xl" 
   
    style={{ 
      background: '#F2E7D6', 
      position: "relative",
      flex: "flex-shrink"
      // flexDirection: isSmallScreen ? 'column' : 'row',
      }}>
     <Grid  container spacing = {4} alignContent="flex-end"  alignItems="flex-end" justifyContent="center" style = {{position: "relative"}} > 
      <Grid item xs={8}>
           <h1 style = {{fontSize: med ? 36 : 48, fontFamily: "yeseva one", position: "relative"}}>The Process</h1>
        </Grid>
        <Grid item xs={2}>
            <img className="my-svg" src = {processImg} height = "150px" width = {isSmallScreen ? "130": "150px" }style = {{position: "relative", "paddingLeft": isSmallScreen ? "20%": "10%", visibility: med ? "hidden": "visible"}}/>
        </Grid> 
    </Grid>
    <hr  style={{ width: isSmallScreen ? "120%" :'140%', borderColor: "black",  marginLeft: isSmallScreen ? "-5%" :'auto', visibility: med ? "hidden" : "visible" }}/>
    <Grid item>
        <Box p={0} sx = {{}}>
          <p style = {{ lineHeight: "30px", fontFamily:"josefin sans", fontSize: 24, position: "relative", width: isSmallScreen ? "100%": "130%", textAlign: isSmallScreen ? "center": "left", marginLeft: isSmallScreen ? "10%": "auto"}}>A customer-oriented consulting process. Whatever the challenge, time frame, and budget, I can help you on your journey to success.
            A process with the ultimate goal of making you happy. </p>
          </Box>
          </Grid>
    </Container>
  )
}
export default Process;