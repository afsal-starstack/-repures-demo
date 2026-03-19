import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import DashboardLayout from "./componets/layout/DashboardLayout";

import Overview from "./pages/Overview";
import Reviews from "./pages/Reviews";

// add more pages here

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Login />} />

        {/* Protected Layout Routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/overview" element={<Overview />} />
          <Route path="/reviews" element={<Reviews />} />
          {/* add more routes here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;