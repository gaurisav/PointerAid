import { Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { ForecastContext } from "../../context/ForecastContext";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function CGPATrendChart() {
  const { student } = useContext(ForecastContext);

  const current = Number(student.currentCGPA) || 0;
  const target = Number(student.targetCGPA) || 0;

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
    const currentCGPA = current + progress * (target - current);

    return {
      semester,
      current: Number(currentCGPA.toFixed(2)),
      target,
    };
  });

  return (
    <Paper sx={{ p: 3, mt: 4, borderRadius: 3 }}>
      <Typography variant="h6" gutterBottom>
        CGPA Trend
      </Typography>

      <ResponsiveContainer width="100%" height={320}>
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

          <YAxis domain={[0, 10]} tickCount={6} />

          <Tooltip />

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
    </Paper>
  );
}

export default CGPATrendChart;

