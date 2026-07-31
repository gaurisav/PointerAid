import { Box, Typography } from "@mui/material";

function DashboardHeader() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h4" fontWeight={700}>
        👋 Welcome back, Gauri
      </Typography>

      <Typography
        color="text.secondary"
        sx={{ mt: 1 }}
      >
        Plan smarter. Forecast better. Graduate with confidence.
      </Typography>
    </Box>
  );
}

export default DashboardHeader;

