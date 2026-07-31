import { Paper, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

function QuickActions() {
  const navigate = useNavigate();

  return (
    <Paper sx={{ p: 3, mt: 4, borderRadius: 3 }}>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          onClick={() => navigate("/forecast")}
        >
          New Forecast
        </Button>

        <Button variant="outlined">
          Semester Planner
        </Button>

        <Button variant="outlined">
          View Analytics
        </Button>
      </Stack>
    </Paper>
  );
}

export default QuickActions;

