import { Box, Container, TextField } from '@mui/material'
import React from 'react'




export default function SendCode() {
    return (
        <Box>
                <Container>
                    <Box sx={{ mb: 5 }}>
                        <Typography
                            className="font-Primary"
                            sx={{ fontSize: 40 }}
                        >
                            Verification Code
                        </Typography>

                        <Typography className=".Inter-login">
                            Enter your registered email address to receive a 6-digit confirmation code
                        </Typography>
                    </Box>
                    <Box>
                        <TextField 
                        label ="Email adress"
                        fullWidth
                        />
                    </Box>
                </Container>
        </Box>
    )
}
