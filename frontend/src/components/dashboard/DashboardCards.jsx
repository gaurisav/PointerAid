import { useContext } from "react";
import { Grid } from "@mui/material";
import KPICard from "./KPICard";

import { ForecastContext } from "../../context/ForecastContext";

function DashboardCards() {
  const { student } = useContext(ForecastContext);

  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      <Grid size={{ xs: 12, md: 3 }}>
        <KPICard
          title="Current CGPA"
          value={student.currentCGPA}
          color="primary.main"
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <KPICard
          title="Target CGPA"
          value={student.targetCGPA}
          color="success.main"
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <KPICard
          title="Required SGPA"
          value={student.completedCredits}
          color="warning.main"
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <KPICard
          title="Forecasts"
          value={student.semesterCredits}
          color="secondary.main"
        />
      </Grid>
    </Grid>
  );
}

export default DashboardCards;

