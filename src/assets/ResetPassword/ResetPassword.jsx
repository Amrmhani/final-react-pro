import { Box, Container, TextField, Typography, Button, Alert } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPasswordSchema } from '../../validations/authSchemas';
import axios from "axios";


export default function ResetPassword() {
  const navigate = useNavigate();
const [serverError, setServerError] = useState(null);
const [succes, setsucces] = useState(false);
const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
  resolver: yupResolver(resetPasswordSchema), mode: "onBlur"
})

const onSubmit = async (data) => {
  console.log(data);

  setServerError(null);

  try {
    const email = sessionStorage.getItem("resetEmail");

    const response = await axios.patch(
      'https://knowledgeshop.runasp.net/api/auth/Account/ResetPassword',
      {
        email: email,
        code: data.code,
        newPassword: data.newPassword
      }
    );

    sessionStorage.removeItem("resetEmail");
    navigate('/login');

  } catch (err) {
    console.log(err.response);
    setServerError("Password Reset Failed");
  }
};
  return (
    <Box >
      <Container>
        <Box>
          <Typography className="font-Primary">
            Reset Password
          </Typography>
          <Typography className="font-secondery">
            Create a strong new password for your IndigoStore account.
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
            label="Enter a 4-digit code"
            type="text"
            inputProps={{ maxLength: 4, inputMode: "numeric" }}
             {...register("code")}
              error={!!errors.code}
              helperText={errors.code?.message}
          />

          <TextField
            label="New Password"
            type="password"
            fullWidth
            {...register("newPassword")}
              error={!!errors.newPassword}
              helperText={errors.newPassword?.message}
          />
          <TextField
            label="Confirm new Password"
            type="password"
            fullWidth
            {...register("confirmPassword")}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
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
                        {isSubmitting ? "Resetting..." : "Reset Password"}
                    </CustomButton>
        </Box>
      </Container>

    </Box>

  );
}