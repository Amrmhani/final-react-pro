import { Button as MuiButton } from "@mui/material";

const CustomButton = ({ children, onClick, type = "button", fullWidth = false }) => {
  return (
    <MuiButton
      variant="contained"
      className="primary-color"
      onClick={onClick}
      type={type}
      fullWidth={fullWidth}
    >
      {children}
    </MuiButton>
  );
};

export default CustomButton;