import { useContext } from "react";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { ForecastContext } from "../../context/ForecastContext";

function InsightsCard() {
  const { subjects } = useContext(ForecastContext);

  if (subjects.length === 0) {
    return (
      <Paper sx={{ mt: 4, p: 3, borderRadius: 3 }}>
        <Typography variant="h6" gutterBottom>
          Academic Insights
        </Typography>

        <Typography color="text.secondary">
          Add subjects to generate insights.
        </Typography>
      </Paper>
    );
  }

  const validSubjects = subjects.filter(
    (subject) =>
      subject.name &&
      subject.target !== "" &&
      !isNaN(Number(subject.target))
  );

  if (validSubjects.length === 0) {
    return (
      <Paper sx={{ mt: 4, p: 3, borderRadius: 3 }}>
        <Typography variant="h6">
          Academic Insights
        </Typography>

        <Typography color="text.secondary">
          Complete subject details to view insights.
        </Typography>
      </Paper>
    );
  }

  const strongest = validSubjects.reduce((a, b) =>
    Number(a.target) > Number(b.target) ? a : b
  );

  const weakest = validSubjects.reduce((a, b) =>
    Number(a.target) < Number(b.target) ? a : b
  );

  const average =
    (
      validSubjects.reduce(
        (sum, s) => sum + Number(s.target),
        0
      ) / validSubjects.length
    ).toFixed(2);

  const totalCredits = validSubjects.reduce(
    (sum, s) => sum + (Number(s.credits) || 0),
    0
  );

  let classification = "Needs Improvement";

  if (average >= 90)
    classification = "Outstanding";

  else if (average >= 75)
    classification = "First Class";

  else if (average >= 60)
    classification = "Second Class";

  return (
    <Paper sx={{ mt: 4, p: 3, borderRadius: 3 }}>
      <Typography variant="h6" gutterBottom>
        Academic Insights
      </Typography>

      <List>

        <ListItem>
          <ListItemText
            primary={`🏆 Strongest Subject: ${strongest.name}`}
            secondary={`${strongest.target}%`}
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary={`📉 Weakest Subject: ${weakest.name}`}
            secondary={`${weakest.target}%`}
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary={`📊 Average Marks: ${average}%`}
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary={`🎓 Total Credits: ${totalCredits}`}
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary={`⭐ Predicted Classification: ${classification}`}
          />
        </ListItem>

      </List>
    </Paper>
  );
}

export default InsightsCard;

