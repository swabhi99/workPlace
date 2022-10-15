import React, { Suspense } from "react";
import LandingPage from "../Components/LandingPage";
import Signup from "../Components/Signup";
import ClientOnboarding from "../Components/OnboardingForm/ClientOnboarding";
import CandidateONboarding from "../Components/OnboardingForm/CandidateOnboarding";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Navs() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/signIn/candidate"
            element={<Signup type={"candidate"} />}
          />
          <Route path="/signIn/client" element={<Signup type={"client"} />} />
          <Route path="/onboarding/client" element={<ClientOnboarding />} />

          <Route
            path="/onboarding/candidate"
            element={<CandidateONboarding />}
          />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default Navs;
