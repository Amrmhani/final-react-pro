import { createTheme } from "@mui/material";


const lightPalette = {
        mode:'light',
        primary:{
          main:'#4E45D5'
        },
        secondary:{
         main:'#1E1B4B'
        },
        background:{
            default:'#FFFFFF'
        },
        text:{
            primary:'#070235'
        }
     }
     const darkPallete = {
        mode:'dark',
        primary:{
            main:'#8B83FF'
        },
        secondary:{
            main:'#A5A0D6'
        },
        background:{
            default:'#171010'
        },
        text:{
            primary:'#FFFFFF'
        }
     }

     export const getTheme = (mode) => {
        return createTheme({
            palette:mode == 'light' ?  lightPalette : darkPallete,
            typography:{
                button:{
                    textTransform:"capitalize"
                }
            }
        })
         

    }

