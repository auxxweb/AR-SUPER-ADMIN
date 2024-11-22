import React from "react";
import { Route, Routes } from "react-router-dom";
import AllEmployees from "../pages/AllEmployees";
import Leaves from "../pages/Leaves";
import Attendence from "../pages/Attendence";
import ShiftAndSchedule from "../pages/ShiftAndSchedule";
import Clients from "../pages/Clients";
import ClientDetails from "../pages/ClientDetails";
import ProjectDetailedPage from "../pages/ProjectDetailedPage";
import ProjetsPage from "../pages/ProjetsPage";
import PaymentPage from "../pages/PaymentPage";
import PaySlip from "../PaySlip";
import Subscription from "../Subscription";
import Department from "../pages/Department";
import Designation from "../pages/Designation";
import SettingAndConfi from "../pages/SettingAndConfi";
import DeveloperDetails from "../pages/DeveloperDetails";
import DashBoard from "../pages/DashBoard";
import PaymentDetails from "../pages/PaymentDetails";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import ReportTable from "../pages/ReportTable";
import ReportPage from "../pages/ReportTable";


function ContentArea() {
  return (
    <Routes>
      {" "}
      {/* Use Routes to define all your app routes */}
      <Route path="/" element={<DashBoard />} />
      <Route path="/allemployees" element={<AllEmployees />} />
      <Route path="/plans" element={<AllEmployees />} />
      <Route path="/leaves" element={<Leaves />} />
      <Route path="/attendence" element={<Attendence />} />
      {/* <Route path="/shiftsandschedules" element={<ShiftAndSchedule />} /> */}
      <Route path="/vendors" element={<Clients />} />
      <Route path="/clientsdetails" element={<ClientDetails />} />
      {/* <Route path="/detailedprojectpage" element={<ProjectDetailedPage />} /> */}
      <Route path="/projetspage" element={<PaymentPage />} />
      <Route path="/paymentData" element={<PaymentDetails />} />
      {/* <Route path="/payslip" element={<PaySlip />} /> */}
      <Route path="/subscription" element={<Subscription />} />
      {/* <Route path="/department" element={<Department />} /> */}
      {/* <Route path="/designation" element={<Designation />} /> */}
      <Route path="/settingandconfi" element={<TermsAndConditions />} />
      <Route path="/settings" element={<SettingAndConfi />} />
      {/* <Route path="/developerdetails" element={<DeveloperDetails />} /> */}
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/report" element={<ReportPage />} />
    </Routes>
  );
}

export default ContentArea;
