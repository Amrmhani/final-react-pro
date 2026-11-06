import { Button as MuiButton } from "@mui/material";

const CustomButton = ({
  children,
  onClick,
  type = "button",
  fullWidth = false,
  sx = {},
  endIcon,
  disabled = false,
}) => {
  return (
    <MuiButton
      variant="contained"
      className="primary-color"
      onClick={onClick}
      type={type}
      fullWidth={fullWidth}
      sx={sx}
      endIcon={endIcon}
      disabled={disabled}
    >
      {children}
    </MuiButton>
  );
};

export default CustomButton;