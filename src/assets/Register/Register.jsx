
import { Box, Container, TextField, Typography, Button, Alert } from "@mui/material";
import { FormControlLabel, Checkbox, Link as MuiLink } from "@mui/material";
import Icon from "./Icon.png";
import { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup"
import { registerSchema } from "../../validations/authSchemas";
import axios from "axios";

export default function Register() {

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);
    const navigate = useNavigate();
    const [serverError, setServerError] = useState(null);
    const [succes, setucces] = useState(false);

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(registerSchema), mode: "onBlur"
    })
    const onSubmit = async (data) => {
        console.log(data);
        try {
            const response = await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/Register', data)
            setucces(true);
            navigate('/login');
        } catch (err) {
            console.log(err.response);
            setServerError("Registeration Failed");
        }
    }



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

            {serverError ? <Alert severity="error">{serverError}</Alert> : null}

            <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="FullName"
                    fullWidth
                    margin="normal"
                    {...register('fullName')}
                    error={errors.fullName}
                    helperText={errors.fullName?.message}
                />

                <TextField
                    label="User Name"
                    fullWidth
                    margin="normal"
                    {...register('userName')}
                    error={errors.userName}
                    helperText={errors.userName?.message}
                />
                <TextField
                    label="Email address"
                    fullWidth
                    margin="normal"
                    {...register('email')}
                    error={errors.email}
                    helperText={errors.email?.message}
                />

                <TextField
                    label="Phone number"
                    fullWidth
                    margin="normal"
                    {...register('phoneNumber')}
                    error={errors.phoneNumber}
                    helperText={errors.phoneNumber?.message}
                />

                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    {...register("password")}
                    error={errors.password}
                    helperText={errors.password?.message}
                />

                <TextField
                    label="Confirm password"
                    type="password"
                    fullWidth
                    margin="normal"
                    {...register("confirmPassword")}
                    error={errors.confirmPassword}
                    helperText={errors.confirmPassword?.message}
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
                        <img src={Icon} alt="Icon" width="12" height="12" />
                    }
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Loading..." : "Register"}
                </Button>

                <Typography variant="register-1" sx={{ mt: 5, display: 'block', textAlign: 'center' }}>Already have an account?
                    <RouterLink to="/login">
                        Sign in
                    </RouterLink>
                </Typography>


            </Box>

        </Container>
    );
}
