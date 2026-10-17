import { Box, Container, TextField, Typography, Button } from "@mui/material";
import { FormControlLabel, Checkbox, Link } from "@mui/material";
import Icon from "./Icon.png";
export default function Login() {

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

            </Box>

        </Container>
    )
}