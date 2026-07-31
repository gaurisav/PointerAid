import React from "react";
import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";

import Sidebar from "../components/common/Sidebar";

function MainLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default MainLayout;

