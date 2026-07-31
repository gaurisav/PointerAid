import { Grid } from "@mui/material";
import { useContext } from "react";
import { ForecastContext } from "../../context/ForecastContext";
import { calculateRequiredSGPA } from "../../utils/cgpaCalculator";
import { calculateSGPA } from "../../utils/gradeCalculator";
import KPICard from "../dashboard/KPICard";

function AnalyticsCards() {
  const { student, subjects } = useContext(ForecastContext);

  return (
    <Grid container spacing={3} mb={4}>
      <Grid size={{ xs: 12, md: 3 }}>
        <KPICard
          title="Current CGPA"
          value={student.currentCGPA || "--"}
          color="primary.main"
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <KPICard
          title="Target CGPA"
          value={student.targetCGPA || "--"}
          color="success.main"
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <KPICard
          title="Required SGPA"
          value={calculateRequiredSGPA(student) || "--"}
          color="warning.main"
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <KPICard
          title="Predicted SGPA"
          value={calculateSGPA(subjects) || "--"}
          color="secondary.main"
        />
      </Grid>
    </Grid>
  );
}

export default AnalyticsCards;

