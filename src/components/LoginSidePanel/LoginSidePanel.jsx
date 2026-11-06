
import {
    Box,
    Stack,
    Typography,
    Paper,
    Chip,
} from "@mui/material";

import registerpicture from "../../assets/Pictures/register.png";
import Logo from "../../assets/Icons/Logo.png";
import ShieldIcon from "../../assets/Icons/Login-shield.png";
import LockIcon from "../../assets/Icons/lock-icon.png";

const LoginSidePanel = () => {
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
                justifyContent: "flex-start",
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
                direction="column"
                sx={{
                    alignItems: "flex-start",
                    gap: 2,
                }}
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
                            sx={{
                                height: 30,
                                width: 30,
                                position: "relative",
                                top: 2,
                            }}
                        />
                    </Box>

                    <Box>
                        <Typography
                            className="font-Primary"
                            sx={{
                                fontSize: 15,
                                fontWeight: 700,
                            }}
                        >
                            IndigoStore
                        </Typography>

                        <Typography
                            className="font-secondery"
                            sx={{
                                fontSize: 9,
                                letterSpacing: 0.8,
                                color: "#C4C1FB",
                            }}
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
                                bgcolor: "#6860EF",
                                ml: 1,
                            }}
                        />
                    }
                    label="Curated Catalog v4.2"
                    sx={{
                        width: 175,
                        height: 24,
                        color: "#C4C1FB",
                        fontSize: 9,
                        "& .MuiChip-icon": {
                            mr: 0.5,
                        },
                    }}
                />
            </Stack>

            <Box
                sx={{
                    width: "100%",
                    maxWidth: 532,
                    display: "flex",
                    flexDirection: "column",
                    mt: 10,
                }}
            >
                <Typography
                    className="font-Primary"
                    component="h1"
                    sx={{
                        fontSize: 56,
                        lineHeight: 1.12,
                        letterSpacing: "-1.68px",
                        fontWeight: 750,
                    }}
                >
                    Everything you need,

                    <Box
                        className="font-Primary"
                        component="span"
                        sx={{
                            display: "block",
                            color: "#AAA5F5",
                        }}
                    >
                        in one place.
                    </Box>
                </Typography>

                <Typography
                    className="font-Primary"
                    sx={{
                        mt: 2,
                        width: "100%",
                        maxWidth: 500,
                        color: "#BDBCE0",
                        fontSize: 18,
                        lineHeight: 1.65,
                        fontWeight: 400,
                    }}
                >
                    Join IndigoStore today. Secure authentication keeps
                    your orders, curations, and payment methods protected
                    with end-to-end encryption.
                </Typography>
            </Box>

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
                        overflow: "hidden",
                    }}
                >
                    <Box
                        component="img"
                        src={registerpicture}
                        alt="Autonomous Sync"
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                        }}
                    />
                </Box>

                <Box sx={{ minWidth: 0 }}>
                    <Stack
                        direction="row"
                        spacing={1}
                        sx={{ flexWrap: "wrap" }}
                    >
                        <Typography
                            className="font-secondery"
                            sx={{
                                fontSize: 10,
                                fontWeight: 700,
                                color: "#C6C4E5",
                                letterSpacing: 0.66,
                            }}
                        >
                            Architectural Essentials
                        </Typography>


                    </Stack>

                    <Typography
                        className="font-Primary"
                        sx={{
                            fontSize: 11,
                            fontWeight: 600,
                            mt: 0.5,
                        }}
                    >
                        New Spring allocation ready for dispatch
                    </Typography>


                </Box>
            </Paper>
            <Stack
  direction="row"
  spacing={1.5}
  sx={{
    mt: "auto",
    pt: 3,
    flexWrap: "wrap",
    gap: 1,
  }}
>
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1,
      px: 1.5,
      py: 0.8,
      borderRadius: 2,
      bgcolor: "rgba(255,255,255,0.09)",
    }}
  >
    <Box
      component="img"
      src={ShieldIcon}
      alt="Verified Security"
      sx={{
        width: 16,
        height: 16,
        objectFit: "contain",
      }}
    />

    <Typography
      className="font-secondery"
      sx={{
        fontSize: 12,
        color: "#FFFFFF",
      }}
    >
      Verified Security
    </Typography>
  </Box>

  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1,
      px: 1.5,
      py: 0.8,
      borderRadius: 2,
      bgcolor: "rgba(255,255,255,0.09)",
    }}
  >
    <Box
      component="img"
      src={LockIcon}
      alt="Encrypted Sessions"
      sx={{
        width: 16,
        height: 16,
        objectFit: "contain",
      }}
    />

    <Typography
      className="font-secondery"
      sx={{
        fontSize: 12,
        color: "#FFFFFF",
      }}
    >
      End-to-end encrypted sessions
    </Typography>
  </Box>
</Stack>
        </Box>
    );
};

export default LoginSidePanel;
