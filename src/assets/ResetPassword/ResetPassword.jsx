import { Box, Container, TextField, Typography, Button, Alert } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

    const navigate = useNavigate();
const [serverError, setServerError] = useState(null);
    const [succes, setsucces] = useState(false);

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
          type="text"
          inputProps={{ maxLength: 4, inputMode: "numeric" }} 
          
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