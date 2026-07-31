import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Forecast from "./pages/Forecast";
import Analytics from "./pages/Analytics";
import Planner from "./pages/Planner";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
