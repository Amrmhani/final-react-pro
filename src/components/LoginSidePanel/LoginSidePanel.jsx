import {
  Box,
  Stack,
  Typography,
  Paper,
  Chip,
} from "@mui/material";

import registerpicture from "../../assets/Pictures/register.png";
import Logo from "../../assets/Icons/Logo.png";

const LoginSidePanel = ()=>{
    return (
<Box
      sx={{
        width: "100%",
        minHeight: 710,
        height: "100%",
        boxSizing: "border-box",
        p: { xs: 3, md: 6 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "#FFFFFF",
        borderRadius: 2,
        background: `
          radial-gradient(
            ellipse at 15% 10%,
            rgba(93, 83, 190, 0.35),
            transparent 45%
          ),
          radial-gradient(
            ellipse at 90% 85%,
            rgba(63, 56, 145, 0.28),
            transparent 40%
          ),
          #1E1B4B
        `,
      }}
    >
        
    </Box>

    )
}

export default LoginSidePanel;
