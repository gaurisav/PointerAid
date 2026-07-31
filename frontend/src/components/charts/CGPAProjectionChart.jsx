import {
  Paper,
  Typography,
  Box,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

function CGPAProjectionChart({
  currentCGPA = 8.42,
  targetCGPA = 9.0,
}) {
  const semesters = [
    "Sem 1",
    "Sem 2",
    "Sem 3",
    "Sem 4",
    "Sem 5",
    "Sem 6",
    "Sem 7",
    "Sem 8",
  ];

  const data = semesters.map((semester, index) => {
    const progress = (index + 1) / semesters.length;

    const current = currentCGPA + progress * (targetCGPA - currentCGPA);

    return {
      semester,
      current: Number(current.toFixed(2)),
      target: targetCGPA,
    };
  });

  return (
    <Paper
      sx={{
        p: 3,
        mt: 4,
        borderRadius: 3,
      }}
    >
      <Typography variant="h6" gutterBottom>
        CGPA Projection
      </Typography>

      <Box sx={{ width: "100%", height: 320 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 8,
              right: 24,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="semester" />

            <YAxis
              domain={[0, 10]}
              tickCount={6}
            />

            <Tooltip />

            <Legend />

            <Line
              type="monotone"
              dataKey="current"
              name="Current CGPA"
              stroke="#2563EB"
              strokeWidth={3}
              dot={{ r: 4 }}
            />

            <Line
              type="monotone"
              dataKey="target"
              name="Target CGPA"
              stroke="#14B8A6"
              strokeWidth={3}
              strokeDasharray="5 5"
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
}

export default CGPAProjectionChart;

