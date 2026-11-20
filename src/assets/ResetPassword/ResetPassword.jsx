import { Box, Container, TextField, Typography, Button, Alert } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPasswordSchema } from '../../validations/authSchemas';
import axios from "axios";
import CustomButton from '../../components/UI/Button/Button';
import ResetPasswordSidePanel from "../../components/ResetPasswordSidePanel/ResetPasswordSidePanel";



export default function ResetPassword() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState(null);
  const [succes, setsucces] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(resetPasswordSchema), mode: "onBlur"
  })


  const onSubmit = async (data) => {
    setServerError(null);

    try {
      const email = sessionStorage.getItem("resetEmail");

      if (!email) {
        navigate("/send-code");
        return;
      }

      await axios.patch(
        "https://knowledgeshop.runasp.net/api/auth/Account/ResetPassword",
        {
          email: email,
          code: data.code,
          newPassword: data.newPassword
        }
      );

      sessionStorage.removeItem("resetEmail");
      navigate("/login");

    } catch (err) {
      console.log(err.response);
      setServerError("Password Reset Failed");
    }
  };

  const [resendLoading, setResendLoading] = useState(false);
  const [resendMessage, setResendMessage] = useState("");
  const [resendError, setResendError] = useState("");

  const handleResendCode = async () => {
    setResendLoading(true);
    setResendMessage("");
    setResendError("");

    try {
      const email = sessionStorage.getItem("resetEmail");

      if (!email) {
        navigate("/send-code");
        return;
      }

      await axios.post(
        "https://knowledgeshop.runasp.net/api/auth/Account/SendCode",
        { email }
      );

      setResendMessage("A new verification code has been sent to your email.");

    } catch (err) {
      console.log(err.response);
      setResendError("Failed to resend verification code.");
    } finally {
      setResendLoading(false);
    }
  };
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
        <ResetPasswordSidePanel />
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
          <Box>
            <Typography className="font-Primary"
              sx={{ fontSize: 40, mb: 1 }}>
              Reset Password
            </Typography>
            <Typography className="font-secondery" sx={{ mb: 4 }}>
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
              slotProps={{
                htmlInput: {
                  maxLength: 4,
                  inputMode: "numeric",
                },
              }}
              sx={{ mb: 2 }}
              {...register("code")}
              error={!!errors.code}
              helperText={errors.code?.message}
            />
            <Box sx={{ mb: 2 }}>
              <Button
                type="button"
                onClick={handleResendCode}
                disabled={resendLoading}
                sx={{ textTransform: "none" }}
              >
                {resendLoading ? "Sending..." : "Resend Code"}
              </Button>

              {resendMessage && (
                <Alert severity="success" sx={{ mt: 1 }}>
                  {resendMessage}
                </Alert>
              )}

              {resendError && (
                <Alert severity="error" sx={{ mt: 1 }}>
                  {resendError}
                </Alert>
              )}
            </Box>
            <TextField
              label="New Password"
              type="password"
              fullWidth
              sx={{ mb: 2 }}
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
    </Box>

  );
}