
import { Box, Container, TextField, Typography, Button, Alert } from "@mui/material";
import { FormControlLabel, Checkbox, Link as MuiLink } from "@mui/material";
import Icon from "./Icon.png";
import { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from "../../validations/authSchemas";
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
        resolver: yupResolver(loginSchema), mode: "onBlur"
    })
    const onSubmit = async (data) => {
        console.log(data);
        try {
            const response = await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/Login', data)
            setucces(true);
            navigate('/home');
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
            <Box sx={{mb:5}}>
                <Typography component="h1" variant="h4">
                Welcome back
                </Typography>
            </Box>

            {serverError ? <Alert severity="error">{serverError}</Alert> : null}

            <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>

                <TextField
                    label="Email address"
                    fullWidth
                    {...register('email')}
                    error={errors.email}
                    helperText={errors.email?.message}

                />
                <Box sx={{display:"flex",justifyContent:"flex-end",mt:7,mb:1}}  >
                  <RouterLink to={"/forgotpassword"} style={{color:"#4E45D5",textDecoration:"none"}}>
                      Forgot password?

                  </RouterLink>
                </Box>
                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    {...register("password")}
                    error={errors.password}
                    helperText={errors.password?.message}

                />

                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ height: 50, gap: 1,mt:5 }}
                    endIcon={
                        <img src={Icon} alt="Icon" width="12" height="12" />
                    }
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Loading..." : "Login"}
                </Button>
                <Typography variant="Login-1" sx={{ mt: 5, display: 'block', textAlign: 'center' }}>Don't have ac account?
                    <RouterLink to="/register">
                     Create one
                    </RouterLink>
                </Typography>

            </Box>

        </Container>
    );
}
