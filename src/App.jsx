import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfessorDashboard from "./pages/ProfessorDashboard";
import { QueryClient, QueryClientProvider } from "react-query";
import GrantCommitteeDashboard from "./pages/GrantCommitteeDashboard";
import Homepage from "./pages/Homepage";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is included

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router basename="/grant-management-frontend">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/professor" element={<ProfessorDashboard />} />
          <Route path="/review" element={<GrantCommitteeDashboard />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};
export default App;
