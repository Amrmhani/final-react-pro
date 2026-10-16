
import { Box, Container, TextField, Typography, Button } from "@mui/material";
import { FormControlLabel, Checkbox ,Link } from "@mui/material";
import Icon from "./Icon.png";
export default function Register() {
  return (
    <Container maxWidth="sm">
      <Box>
        <Typography component="h1" variant="h4">
          Create your account
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: 2 }}>
        <TextField
          label="First name"
          margin="normal"
          sx={{ flex: 1 }}
        />

        <TextField
          label="Last name"
          margin="normal"
          sx={{ flex: 1 }}
        />
      </Box>
      <Box>
        <TextField
        label="Email address"
        fullWidth
        margin="normal"
      />

      <TextField
        label="Phone number"
        fullWidth
        margin="normal"
      />

      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
      />

      <TextField
        label="Confirm password"
        type="password"
        fullWidth
        margin="normal"
      />
      
<FormControlLabel
  control={<Checkbox />}
  label={
    <>
      I agree to the{" "}
      <Link href="/terms" underline="hover">
        Terms of Service
      </Link>
      {" "}and{" "}
      <Link href="/privacy" underline="hover">
        Privacy Policy
      </Link>
    </>
  }
/>

       <Button type="submit" variant="contained" fullWidth sx={{height:50}} 
       endIcon={
    <img src={Icon} alt="Icon" width="12" height="12" color="FFFFFF" />
  }>
        Create account
        
         </Button>
      </Box>
      
    </Container>
  );
}
