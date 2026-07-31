import { Paper, Typography, Box } from "@mui/material";
import { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { ForecastContext } from "../../context/ForecastContext";

function CreditDistributionChart() {
  const { subjects } = useContext(ForecastContext);

  const validSubjects = (subjects || []).filter(
    (subject) => Number(subject.credits) > 0 && subject.name
  );

  const data = validSubjects.map((subject) => ({
    name: subject.name.length > 12
      ? `${subject.name.slice(0, 12)}...`
      : subject.name || "Subject",
    credits: Number(subject.credits) || 0,
  }));

  const totalCredits = data.reduce((acc, item) => acc + item.credits, 0);
  const hasData = data.length > 0;

  return (
    <Paper sx={{ p: 3, mt: 4, borderRadius: 3 }}>
      <Typography variant="h6" gutterBottom>
        Credit Distribution
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 2 }}>
        Total Credits: {totalCredits}
      </Typography>

      {hasData ? (
        <Box sx={{ width: "100%", height: 320 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 8,
                right: 24,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" />

              <YAxis allowDecimals={false} />

              <Tooltip />

              <Legend />

              <Bar
                dataKey="credits"
                name="Credits"
                fill="#2563EB"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      ) : (
        <Typography color="text.secondary" sx={{ py: 6, textAlign: "center" }}>
          Add subjects with credits to see credit distribution.
        </Typography>
      )}
    </Paper>
  );
}

export default CreditDistributionChart;

