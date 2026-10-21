import { Box, Container, TextField, Typography, Button } from "@mui/material";
import { FormControlLabel, Checkbox,Link as MuiLink } from "@mui/material";
import Icon from "./Icon.png";

import { Link as RouterLink } from "react-router";
import { useEffect } from "react";

export default function Login() {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);


    return (
        <Container sx={{
            mt: 15, ml: "auto",
            mr: 8, height: 728, width: 540
        }}>

            <Box>
                <Typography component="h1" variant="h4">
                    Welcom back
                </Typography>
                <Typography sx={{}}>
                    Sign in to your account
                </Typography>
            </Box>
            <Box component={'form'} sx={{ mt: 5 }}>
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
                <FormControlLabel
                    sx={{
                        "& .MuiFormControlLabel-label": {
                            lineHeight: "21px",
                            letterSpacing: "0px",
                        }, py: 2
                    }}

                    control={<Checkbox />}
                    label={
                        <>
                            Keep me signed in
                        </>
                    }
                />

                <Button type="submit" variant="contained" fullWidth sx={{ height: 50, gap: 1, borderRadius:2}}
                    endIcon={
                        <img src={Icon} alt="Icon" width="12" height="12" color="FFFFFF" />
                    }>
                    Sign in

                </Button>
                <Typography variant="register-1" sx={{ mt: 10, display: 'block', textAlign: 'center' }}>Don't have an account?
                    <RouterLink to="/register">
                        Create one
                    </RouterLink>
                </Typography>
                             <Box
  sx={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    mt: 4,
  }}
>
  <Typography variant="body2">
    © 2025 IndigoStore Inc.
  </Typography>

  <Box sx={{ display: "flex", gap: 3 }}>
    <MuiLink href="/hhh" underline="none" sx={{ color: "#47464F" }}>
      
    </MuiLink>

    <MuiLink href="/about" underline="none" sx={{ color: "#47464F" }}>
      About
    </MuiLink>

    <MuiLink href="/contact" underline="none" sx={{ color: "#47464F" }}>
      Contact
    </MuiLink>
  </Box>
</Box>

            </Box>

        </Container>
    )
}