
import { Box, Container, TextField, Typography, Button } from "@mui/material";
import { FormControlLabel, Checkbox, Link as MuiLink } from "@mui/material";
import Icon from "./Icon.png";
import { useEffect } from "react";
import { Link as RouterLink } from "react-router";
export default function Register() {

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return (

        <Container sx={{
            mt: 10, ml: "auto",
            mr: 8, height: 805, width: 448
        }}>
            <Box>
                <Typography component="h1" variant="h4">
                    Create your account
                </Typography>
            </Box>

            <Box component={'form'} sx={{ display: "flex", gap: 2 }}>
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
            <Box component={'form'}>
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
                    sx={{
                        "& .MuiFormControlLabel-label": {
                            lineHeight: "21px",
                            letterSpacing: "0px",
                        }, py: 2
                    }}

                    control={<Checkbox />}
                    label={
                        <>
                            I agree to the{" "}
                            <MuiLink href="/terms" underline="hover">
                                Terms of Service
                            </MuiLink>
                            {" "}and{" "}
                            <MuiLink href="/privacy" underline="hover">
                                Privacy Policy
                            </MuiLink>
                        </>
                    }
                />


                <Button type="submit" variant="contained" fullWidth sx={{ height: 50, gap: 1 }}
                    endIcon={
                        <img src={Icon} alt="Icon" width="12" height="12" color="FFFFFF" />
                    }>
                    Create account

                </Button>

                <Typography variant="register-1" sx={{ mt: 10, display: 'block', textAlign: 'center' }}>Already have an account?
                    <RouterLink to="/login">
                        Sign in
                    </RouterLink>
                </Typography>
            </Box>

        </Container>
    );
}
