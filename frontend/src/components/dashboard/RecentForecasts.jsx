import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

function RecentForecasts() {
  const forecasts = [
    "Semester 5 - Target 9.1",
    "Semester 6 - Target 9.0",
    "Semester 7 - Target 8.9",
  ];

  return (
    <Paper sx={{ p: 3, mt: 4, borderRadius: 3 }}>
      <Typography variant="h6" gutterBottom>
        Recent Forecasts
      </Typography>

      <List>
        {forecasts.map((forecast) => (
          <ListItem key={forecast}>
            <ListItemText primary={forecast} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default RecentForecasts;

