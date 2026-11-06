
import {
  Box,
  Stack,
  Typography,
  Paper,
  Chip,
} from "@mui/material";

import ShieldIcon from "../../assets/Icons/shield-icon.png";
import LightningIcon from "../../assets/Icons/lightning-icon.png";
import Logo from "../../assets/Icons/Logo.png";
import MemberIcon from "../../assets/Icons/Member-icon.png";
const RegisterSidePanel = () => {
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
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{gap:30}}
      >
        <Stack direction="row" alignItems="center" spacing={1.2}>
          <Box
            sx={{
              width: 30,
              height: 30,
              bgcolor: "#5146DF",
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: "bold",
            }}
          >
            <Box
      component="img"
      src={Logo}
      alt="Logo"
      sx={{height:30,width:30,position:"relative",top:2}}
    />
          </Box>

          <Box>
            <Typography fontSize={15} fontWeight={700}>
              IndigoStore
            </Typography>

            <Typography
              fontSize={9}
              letterSpacing={0.8}
              color="#C4C1FB"
            >
              CURATED RESERVE
            </Typography>
          </Box>
        </Stack>

        <Chip
          size="small"
          icon={
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                bgcolor: "#34D399",
                ml: 1,
              }}
            />
          }
          label="TLS 1.3 256-bit Secure"
          sx={{
            width:175,
            height:28,
            bgcolor: "rgba(255,255,255,0.07)",
            color: "#C4C1FB",
            fontSize: 9,
            height: 24,
            "& .MuiChip-icon": {
              mr: 0.5,
            },
          }}
        />
      </Stack>

      <Box sx={{ maxWidth: 430, width: "100%", mx: "auto" }}>

        <Chip
  icon={
    <Box
      component="img"
      src={MemberIcon}
      alt="Member"
      sx={{
        width: 12,
        height: 12,
        objectFit: "contain",
      }}
    />
  }
  label="MEMBER ONBOARDING"
  size="small"
  sx={{
    bgcolor: "rgba(105,93,218,0.2)",
    color: "#E1DFFF",
    fontSize: 9,
    fontWeight: 600,
    letterSpacing: 0.7,
    height: 23,
    mb: 2.5,
    "& .MuiChip-icon": {
      ml: 1,
      mr: 0.5,
    },
  }}
/>

        <Typography
          component="h1"
          sx={{
            fontSize: { xs: 34, md: 44 },
            lineHeight: 1.12,
            letterSpacing: "-1.8px",
            fontWeight: 750,
          }}
        >
          Everything you need,
          <Box
            component="span"
            display="block"
            color="#AAA5F5"
          >
            in one place.
          </Box>
        </Typography>

        <Typography
          sx={{
            mt: 2,
            maxWidth: 390,
            color: "#BDBCE0",
            fontSize: 14,
            lineHeight: 1.65,
          }}
        >
          Join IndigoStore today. Secure authentication keeps
          your orders, curations, and payment methods protected
          with end-to-end encryption.
        </Typography>

        <Paper
          elevation={0}
          sx={{
            mt: 3,
            p: 1.8,
            maxWidth: 370,
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            bgcolor: "rgba(255,255,255,0.07)",
            borderRadius: 2,
            color: "#FFFFFF",
          }}
        >
         
          <Box
            sx={{
              width: 48,
              height: 48,
              flexShrink: 0,
              borderRadius: 1,
              background: "linear-gradient(145deg,#77736B,#272639)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: 23,
                height: 32,
                borderRadius: 1,
                background: "linear-gradient(90deg,#151515,#66645B,#181818)",
                boxShadow: "0 5px 8px rgba(0,0,0,0.4)",
              }}
            />
          </Box>

          <Box sx={{ minWidth: 0 }}>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              <Typography
                fontSize={8}
                fontWeight={700}
                color="#C6C4E5"
                letterSpacing={0.5}
              >
                AUTONOMOUS SYNC
              </Typography>

              <Typography
                fontSize={8}
                fontWeight={700}
                color="#39D9AE"
              >
                Encrypted
              </Typography>
            </Stack>

            <Typography
              fontSize={11}
              fontWeight={600}
              mt={0.5}
            >
              Vault Architecture & Curation Engine
            </Typography>

            <Typography
              fontSize={10}
              color="#B8B7D8"
              mt={0.5}
            >
              Zero-trust credential shielding
            </Typography>
          </Box>
        </Paper>
      </Box>

      
<Stack
  direction={{ xs: "column", sm: "row" }}
  justifyContent="flex-start"
  alignItems={{ xs: "flex-start", sm: "center" }}
  sx={{gap:5}}
>
  <Stack direction="row" alignItems="center" sx={{gap:1}}>
    <Box
      component="img"
      src={ShieldIcon}
      alt="Shield"
      sx={{
        width: 12,
        height: 12,
        objectFit: "contain",
        flexShrink: 0,
        display: "block",
        position: "relative",
    top: "5px"
      }}
    />
    <Typography fontSize={10} lineHeight={1} color="#C4C1FB">
      Zero-Knowledge Storage
    </Typography>
  </Stack>

  <Stack direction="row" alignItems="center" sx={{gap:1}}>
    <Box
      component="img"
      src={LightningIcon}
      alt="Lightning"
      sx={{
        width: 12,
        height: 12,
        objectFit: "contain",
        flexShrink: 0,
        display: "block",
        position:"relative",
        top:"5px"
      }}
    />
    <Typography fontSize={10} lineHeight={1} color="#C4C1FB">
      Sub-second Checkout
    </Typography>
  </Stack>

  <Typography fontSize={10} lineHeight={1} color="#C4C1FB" whiteSpace="nowrap">
    © 2025 IndigoStore Inc.
  </Typography>
</Stack>
    </Box>
  );
};

export default RegisterSidePanel;
