import { Box, Container, TextField, Typography, Button, Alert } from "@mui/material";
import { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";



export default function ResetPassword() {
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
        <Box>
          <TextField
          label = "Enter a 4-digit code"
          
          />
          
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
      </Container>

    </Box>

  );
}