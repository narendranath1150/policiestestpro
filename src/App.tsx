
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Compnents/HomePage.tsx";
import PoliciesPage from "./Compnents/MyPolicies.tsx";
import PolicyDetails from "./Compnents/PolicyCard.tsx";

function App() {

 return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/policies" element={<PoliciesPage />} />
        <Route
          path="/policies/:policyNumber"
          element={<PolicyDetails />}
        />
      </Routes>
    </BrowserRouter>
  );

}

export default App
