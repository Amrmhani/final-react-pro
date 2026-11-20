import { Alert, Box, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link as RouterLink, useNavigate } from "react-router";
import { sendCodeSchema } from '../../validations/authSchemas';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomButton from '../../components/UI/Button/Button';
import axios from 'axios';





export default function SendCode() {
    const navigate = useNavigate();
    const [serverError, setServerError] = useState(null);
    const [succes, setsucces] = useState(false);

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(sendCodeSchema), mode: "onBlur"
    })
    const onSubmit = async (data) => {
        console.log(data);
        try {
            const response = await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/SendCode', data)
            setsucces(true);
            sessionStorage.setItem("resetEmail", data.email);
            navigate('/ResetPassword');
        } catch (err) {
            console.log(err.response);
            setServerError("Sending Code Failed");
        }
    }

    return (
        <Box>
            <Container
                maxWidth={false}
                sx={{
                    width: "100%",
                    maxWidth: 448,
                    p: 0,
                    m: 0,
                }}>
                <Box sx={{ mb: 5 }}>
                    <Typography
                        className="font-Primary"
                        sx={{ fontSize: 40 }}
                    >
                        Verification Code
                    </Typography>

                    <Typography className="font-secondery">
                        Enter your registered email address to receive a 6-digit confirmation code
                    </Typography>
                </Box>
                {serverError && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {serverError}
                    </Alert>
                )}
                <Box 
                 component="form"
                 onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        label="Email adress"
                        fullWidth
                        {...register("email")}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                    <CustomButton
                        type="submit"
                        fullWidth
                        sx={{
                            height: 50,
                            gap: 1,
                            mt: 5,
                        }}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Sending..." : "Send Code"}
                    </CustomButton>
                </Box>
            </Container>
        </Box>
    )
}
