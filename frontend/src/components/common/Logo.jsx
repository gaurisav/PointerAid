import { Box, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

function Logo() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      <SchoolIcon color="primary" />

      <Typography
        variant="h5"
        fontWeight={700}
        color="primary"
      >
        PointerAid
      </Typography>
    </Box>
  );
}

export default Logo;

