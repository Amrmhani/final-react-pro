import { Box, Container, TextField, Typography, Button, Alert } from "@mui/material";
import { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import "./forgotPassword.css";



export default function ForgotPassword() {
  return (
    <Box className="forgot-password">
      <Box className="forgot-password-content">
        <Box>
          <Typography className="plus-jakarta-forgot">
            Reset Password
          </Typography>
          <Typography className="Inter-forgot">
            Create a strong new password for your IndigoStore account.
          </Typography>
        </Box>
        <Box className="forgot-password-form">
          <TextField
            label="New Password"
            type="password"
            fullWidth
             />
              <TextField
            label="Confirm new Password"
            type="password"
            fullWidth
             />

        </Box>
      </Box>

    </Box>

  );
}