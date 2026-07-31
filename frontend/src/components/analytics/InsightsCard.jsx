import {
  Paper,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useContext } from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WarningIcon from "@mui/icons-material/Warning";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { ForecastContext } from "../../context/ForecastContext";
import { calculateRequiredSGPA } from "../../utils/cgpaCalculator";
import { calculateSGPA } from "../../utils/gradeCalculator";

function InsightsCard() {
  const { student, subjects } = useContext(ForecastContext);

  const requiredSGPA = calculateRequiredSGPA(student);
  const predictedSGPA = calculateSGPA(subjects);
  const subjectCount = (subjects || []).length;

  const insights = [];

  if (requiredSGPA !== null && requiredSGPA !== undefined) {
    if (Number(requiredSGPA) <= 10) {
      insights.push({
        icon: <EmojiEventsIcon color="success" />,
        text: `Your target CGPA (${student.targetCGPA}) is achievable. You need an SGPA of ${requiredSGPA} this semester.`,
      });
    } else {
      insights.push({
        icon: <WarningIcon color="warning" />,
        text: `Your target CGPA (${student.targetCGPA}) requires an SGPA of ${requiredSGPA}, which exceeds the maximum of 10. Consider revising your goal.`,
      });
    }
  }

  if (predictedSGPA !== null && predictedSGPA !== undefined) {
    const diff = Number(predictedSGPA) - Number(requiredSGPA || 0);
    if (diff >= 0) {
      insights.push({
        icon: <TrendingUpIcon color="success" />,
        text: `Based on your current subject marks, your predicted SGPA (${predictedSGPA}) is on track to meet the required SGPA (${requiredSGPA}).`,
      });
    } else {
      insights.push({
        icon: <WarningIcon color="warning" />,
        text: `Your predicted SGPA (${predictedSGPA}) is below the required SGPA (${requiredSGPA}). Consider focusing on weaker subjects.`,
      });
    }
  }

  if (subjectCount === 0) {
    insights.push({
      icon: <WarningIcon color="warning" />,
      text: "Add subjects in the Forecast page to unlock detailed performance insights.",
    });
  }

  return (
    <Paper sx={{ p: 3, mt: 4, borderRadius: 3 }}>
      <Typography variant="h6" gutterBottom>
        Insights
      </Typography>

      {insights.length > 0 ? (
        <List>
          {insights.map((insight, index) => (
            <ListItem key={index} sx={{ px: 0 }}>
              <ListItemIcon>{insight.icon}</ListItemIcon>
              <ListItemText primary={insight.text} />
            </ListItem>
          ))}
        </List>
      ) : (
        <Box sx={{ py: 4, textAlign: "center" }}>
          <Typography color="text.secondary">
            Complete your student details to see personalized insights.
          </Typography>
        </Box>
      )}
    </Paper>
  );
}

export default InsightsCard;

