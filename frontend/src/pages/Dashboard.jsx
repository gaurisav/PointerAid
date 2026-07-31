import { useContext } from "react";
import { Container } from "@mui/material";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardCards from "../components/dashboard/DashboardCards";
import CGPAProjectionChart from "../components/charts/CGPAProjectionChart";
import QuickActions from "../components/dashboard/QuickActions";
import RecentForecasts from "../components/dashboard/RecentForecasts";

import { ForecastContext } from "../context/ForecastContext";

function Dashboard() {
  const { student } = useContext(ForecastContext);

  return (
    <Container maxWidth="xl">
      <DashboardHeader />

      <DashboardCards />

      <CGPAProjectionChart
        currentCGPA={student.currentCGPA}
        targetCGPA={student.targetCGPA}
      />

      <QuickActions />

      <RecentForecasts />
    </Container>
  );
}

export default Dashboard;

