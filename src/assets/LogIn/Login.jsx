
import { Box, Container, TextField, Typography, Button, Alert } from "@mui/material";
import Icon from "./Icon.png";
import { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from "../../validations/authSchemas";
import axios from "axios";
import CustomButton from "../../components/UI/Button/Button";
import LoginSidePanel from "../../components/LoginSidePanel/LoginSidePanel";

export default function Register() {

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);
    const navigate = useNavigate();
    const [serverError, setServerError] = useState(null);
    const [succes, setsucces] = useState(false);

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(loginSchema), mode: "onBlur"
    })
    const onSubmit = async (data) => {
        console.log(data);
        try {
            const response = await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/Login', data)
            setsucces(true);
            navigate('/');
            localStorage.setItem('token',response.data.accessToken);
        } catch (err) {
            console.log(err.response);
            setServerError("Registeration Failed");
        }
    }



return (
    <Box
        sx={{
            minHeight: "100vh",
            width: "100%",
            display: "flex",
        }}
    >
        <Box
            sx={{
                width: "50%",
                minHeight: "100vh",
                display: { xs: "none", md: "block" },
            }}
        >
            <LoginSidePanel/>
        </Box>

        <Box
            sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                px: { xs: 2, md: 4 },
                py: 4,
            }}
        >
            <Container
                maxWidth={false}
                sx={{
                    width: "100%",
                    maxWidth: 448,
                    p: 0,
                    m: 0,
                }}
            >
                <Box sx={{ mb: 5 }}>
                    <Typography
                        className="font-Primary"
                        sx={{ fontSize: 40 }}
                    >
                        Welcome back
                    </Typography>

                    <Typography className=".Inter-login">
                        Sign in to your account
                    </Typography>
                </Box>

                {serverError && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {serverError}
                    </Alert>
                )}

                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <TextField
                        label="Email address"
                        fullWidth
                        {...register("email")}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            mt: 7,
                            mb: 1,
                        }}
                    >
                        <RouterLink
                            to="/forgotpassword"
                            style={{
                                color: "#4E45D5",
                                textDecoration: "none",
                            }}
                        >
                            Forgot password?
                        </RouterLink>
                    </Box>

                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        {...register("password")}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />

                    <CustomButton
                        type="submit"
                        fullWidth
                        sx={{
                            height: 50,
                            gap: 1,
                            mt: 5,
                        }}
                        endIcon={
                            <img
                                src={Icon}
                                alt="Icon"
                                width="12"
                                height="12"
                            />
                        }
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Loading..." : "Login"}
                    </CustomButton>

                    <Typography
                        variant="Login-1"
                        sx={{
                            mt: 5,
                            display: "block",
                            textAlign: "center",
                        }}
                    >
                        Don't have an account?{" "}
                        <RouterLink to="/register">
                            Create one
                        </RouterLink>
                    </Typography>
                </Box>
            </Container>
        </Box>
    </Box>
);

}
