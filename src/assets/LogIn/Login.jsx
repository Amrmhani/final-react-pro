import { Box, Container, TextField, Typography, Button } from "@mui/material";
import { FormControlLabel, Checkbox ,Link } from "@mui/material";

export default function Login(){

    return(
        <Container sx={{mt:15, ml: "auto",
    mr: 8, height:728 , width:540}}>
          
          <Box>
        <Typography component="h1" variant="h4">
          Welcom back
        </Typography>
        <Typography sx={{}}>
         Sign in to your account
        </Typography>
      </Box>
      <Box component={'form'} sx={{mt:5}}>
      <TextField
        label="Email address"
        fullWidth
        margin="normal"
      />

      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
      />
   
      </Box>

        </Container>
    )
}