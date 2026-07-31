import { Paper, Typography, Box } from "@mui/material";
import { useContext } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { ForecastContext } from "../../context/ForecastContext";

const GRADES = [
  { label: "S (90-100)", min: 90, color: "#22C55E" },
  { label: "A (80-89)", min: 80, color: "#2563EB" },
  { label: "B (70-79)", min: 70, color: "#14B8A6" },
  { label: "C (60-69)", min: 60, color: "#F59E0B" },
  { label: "D (50-59)", min: 50, color: "#EF4444" },
];

function GradeDistributionChart() {
  const { subjects } = useContext(ForecastContext);

  const validSubjects = (subjects || []).filter(
    (subject) => Number(subject.current) > 0
  );

  const gradeCounts = GRADES.map((grade) => ({
    name: grade.label,
    value: validSubjects.filter(
      (subject) => Number(subject.current) >= grade.min
    ).length,
    color: grade.color,
  })).filter((item) => item.value > 0);

  const hasData = validSubjects.length > 0;

  return (
    <Paper sx={{ p: 3, mt: 4, borderRadius: 3 }}>
      <Typography variant="h6" gutterBottom>
        Grade Distribution
      </Typography>

      {hasData ? (
        <Box sx={{ width: "100%", height: 320 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={gradeCounts}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={110}
                label
              >
                {gradeCounts.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>

              <Tooltip />

              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      ) : (
        <Typography color="text.secondary" sx={{ py: 6, textAlign: "center" }}>
          Add subject marks in the Forecast page to see grade distribution.
        </Typography>
      )}
    </Paper>
  );
}

export default GradeDistributionChart;

